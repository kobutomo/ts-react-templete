import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { Dispatch } from "redux";
import { increment, decrement } from "../../modules/counter"
import { AppState, Actions } from "../../modules"
import Button from "../../components/Button"

const mapStateToProps = (state: AppState) => ({ counter: state.counter })

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
	return {
		increment: (payload: Parameters<typeof increment>[0]) => {
			dispatch(increment(payload))
		},
		decrement: (payload: Parameters<typeof decrement>[0]) => {
			dispatch(decrement(payload))
		}
	}
}

type Props =
	ReturnType<typeof mapDispatchToProps>
	& ReturnType<typeof mapStateToProps>


const Home: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<h1>Hello World</h1>
			<Button
				onClick={_ => { props.increment(1) }}
				text="+"
			/>
			<Button
				onClick={_ => { props.increment(-1) }}
				text="-"
			/>
			<p>{props.counter.count}</p>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	h1{
		text-align: center;
	}
`

export default connect(mapStateToProps, mapDispatchToProps)(Home)