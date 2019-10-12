import { Reducer } from 'redux'

export type CounterState = {
	count: number
}

type Payload = number

export const increment = (payload: Payload) => {
	return {
		type: "INCREMENT" as "INCREMENT",
		payload: payload
	}
}

export const decrement = (payload: Payload) => {
	return {
		type: "DECREMENT" as "DECREMENT",
		payload: payload
	}
}

export type CounterActions = ReturnType<typeof increment> | ReturnType<typeof decrement>

const initialState: CounterState = {
	count: 0
};

export const counterReducer: Reducer<CounterState, CounterActions> = (state = initialState, action): CounterState => {
	switch (action.type) {
		case "INCREMENT":
			return {
				...state,
				count: state.count + action.payload
			};
		case "DECREMENT":
			return {
				...state,
				count: state.count + action.payload
			};
		default:
			return state;
	}
};