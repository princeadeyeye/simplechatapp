import { ActionTypes } from "./Types";
import {data } from './data';
import {  combineReducers } from 'redux';
import uuid from 'uuid';
import moment from 'moment';


export const ChatReducer = combineReducers({
	activeThreadId: activeThreadIdReducer,
	threads: threadsReducer,
});

function findThreadIndex(threads, action) {
	console.log(threads)
	switch (action.type) {
		case ActionTypes.ADD_MESSAGE: {
				return threads.findIndex(
				(t) => t.id === action.payload.threadId
			);
		}
		case ActionTypes.DELETE_MESSAGE: {
			return threads.findIndex(
				(t) => t.messages.find((m) => (
				m.id === action.payload.id
				))
			);
		}
		default: {
		return threads;
		}
	}
}

function threadsReducer(state = [
		{
			id: '1-fca2',
			title: 'Buzz Aldrin',
			messages: messagesReducer(undefined, {}),
		},
		{
			id: '2-be91',
			title: 'Michael Collins',
			messages: messagesReducer(undefined, {}),
		},
		], action) {
	switch (action.type) {
		case ActionTypes.ADD_MESSAGE:
		case ActionTypes.DELETE_MESSAGE: {
		const threadIndex = findThreadIndex(state, action);
		console.log(action.payload.threadId)
		const oldThread = state[threadIndex];
		
		const newThread = {
			...oldThread,
			messages: messagesReducer(oldThread.messages, action),
		};
		return [
				...state.slice(0, threadIndex),
				newThread,
				...state.slice(
				threadIndex + 1, state.length
				),
			];
		}
		default: {
		return state || data;
		}
	}
}

function messagesReducer(state=[], action) {
	switch (action.type) {
		case ActionTypes.ADD_MESSAGE: {
		const newMessage = {
			text: action.payload.text,
			timestamp: new Date('1976-04-19T12:59-0500'),
			id: uuid.v4(),
		};
			return state.concat(newMessage);
		}
		case ActionTypes.DELETE_MESSAGE: {
			return state.filter(m => m.id !== action.payload.id);
		}
		default: {
			return state;
		}
	}
}


function activeThreadIdReducer(state = '1-fca2', action) {
	switch (action.type) {
		case ActionTypes.OPEN_THREAD: {
			return action.payload.id;
		}
		default: {
			return state;
		}
	}
}





