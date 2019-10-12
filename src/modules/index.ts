import { CounterState, counterReducer, CounterActions } from "./counter"

export type AppState = {
	counter: CounterState
}

export type Actions = CounterActions

export const reducers = {
	counter: counterReducer
}