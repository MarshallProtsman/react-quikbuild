import styled from "styled-components";

const Wrapper = styled.section`
	outline: ${(props) => (props.debug ? "solid 1px" : "")};
	display: grid;
	grid-template-columns: ${(props) => props.columns[0]} ${(props) => props.columns[1]} ${(props) => props.columns[2]};
	grid-template-rows: auto;
	grid-column-gap: 10px;
	grid-row-gap: 10px;
`;

export default Wrapper;
