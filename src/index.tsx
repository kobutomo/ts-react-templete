import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './container/App'

const render = () => {
	ReactDOM.render(
		<App />,
		document.getElementById('root')
	)
}

if (module.hot) {
	module.hot.accept('./container/App', () => {
		render()
	})
}

render()