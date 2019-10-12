import React from "react"
import styled from "styled-components"
import Home from "./containers/pages/Home"
import { Store } from "redux";
import { Provider } from "react-redux";
import { AppState } from "./modules";

type Props = {
	store: Store<AppState>;
};

const App: React.FC<Props> = ({ store }) => {
	return (
		<Provider store={store as any}>
			<Container>
				<Home></Home>
			</Container>
		</Provider>
	)
}

const Container = styled.div`
	width: 1100px;
	margin: 0 auto;
	padding: 0;
`

export default App