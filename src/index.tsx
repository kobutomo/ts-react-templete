import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from "./store"
import App from './App'

const store = configureStore();

const render = () => {
	ReactDOM.render(
		<App store={store} />,
		document.getElementById('root')
	)
}

if (module.hot) {
	module.hot.accept('./App', () => {
		render()
	})
}

render()