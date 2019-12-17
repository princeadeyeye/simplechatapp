import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import {loadData,  addMessage, deleteMessage, openThread } from "./data/ActionCreators";
import { DataTypes } from "./data/Types";
import Home from './component/Home'

const mapStateToTabsProps = (state) => ({
	...state
});


const mapDispatchToProps = {
		loadData,
		addMessage,
		deleteMessage, 
		openThread,
}


const clickTab = (threads, activeThreadId) => threads.map(t => (
		{
			title: t.title,
			active: t.id === activeThreadId,
			id: t.id,
		}
	));

const findThread = (threads, id) => threads.find(
		t => t.id === id);

const connectFunction = connect(mapStateToTabsProps, mapDispatchToProps)

export const Router = connectFunction(
	class extends Component {
    render() {
         return <Switch>
				<Route path="/"
					render={ (routeProps) => 
						<Home {...this.props} {...routeProps}
							activeThread = {findThread (this.props.threads, this.props.activeThreadId)}
							tabs = {clickTab(this.props.threads, this.props.activeThreadId)} /> } />
				<Redirect to="/" />
			</Switch>
			}

				componentDidMount() {
					this.props.loadData(DataTypes.ACTIVE_THREAD_I);
					this.props.loadData(DataTypes.THREADS);
			}
    	}
    )

