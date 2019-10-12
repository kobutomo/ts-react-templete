import { combineReducers, createStore } from "redux"
import { AppState, reducers } from './modules';

const configureStore = () => {
	return createStore(
		combineReducers<AppState>(reducers),
	);
};

export default configureStore