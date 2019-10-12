import React from "react"
import styled from "styled-components"

type Props = {
	text: string,
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button: React.FC<Props> = (props) => {
	return (
		<NormalButton onClick={props.onClick}>
			{props.text}
		</NormalButton>
	)
}

const NormalButton = styled.button`
	display: inline-block;
	width: 60px;
	height: 30px;
	background-color: #333;
	color: #fff;
	margin: 3px;
`

export default Button