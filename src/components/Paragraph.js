import styled from 'styled-components';

const Wrapper = styled.p`
  outline: ${props => props.debug ? 'solid 1px' : ''};
  padding: 1em;
  color: darkgrey;
`;

export default Wrapper;