import { ActionTypes } from "./Types";
import { data as phData} from "./data";

export const loadData = (dataType) => ({
	type: ActionTypes.LOAD_MESSAGE,
	payload: {
		dataType: dataType,
		data: phData[dataType]
	}
});

export const addMessage = (text, threadId) => ({
	type: ActionTypes.ADD_MESSAGE,
	payload: {
		text: text,
		threadId: threadId,
	}
});

export const deleteMessage = (id) => ({
	type: ActionTypes.DELETE_MESSAGE,
	payload: {
		id: id,
	}
});

export const openThread = (id) => ({
	type: ActionTypes.OPEN_THREAD,
	payload: {
		id: id,
	}
});