import styled from "styled-components";

const Button = styled.a`
	outline: ${(props) => (props.debug ? "solid 1px" : "")};
	display: flex;
	justify-content: center;
	min-width: 2em;
	padding: 10px;
	border-radius: 5px;
	color: ${(props) => (props.primary ? "#F3F8FA" : "#00474B")};
	background-color: ${(props) => (props.primary ? "#00474B" : "#F3F8FA")};
	cursor: pointer;
`;

export default Button;
