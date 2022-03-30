import styled from 'styled-components';

const Wrapper = styled.section`
  outline: ${props => props.debug ? 'solid 1px' : ''};
  padding: 1em;
  background: ${props => props.background};
  border-radius: 15px;
  margin:5px;
`;

export default Wrapper;