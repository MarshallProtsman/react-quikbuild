import styled from "styled-components";

const Input = styled.input`
  outline: ${props => props.debug ? 'solid 1px' : ''};
`;

export default Input;
