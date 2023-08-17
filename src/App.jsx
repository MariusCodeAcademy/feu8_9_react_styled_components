import styled from 'styled-components';
import Btn, { GrayBtn } from './components/UI/Btn.styled';

const MainTitle = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  color: tomato;
`;

const Wrap = styled.div`
  padding-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default function App() {
  return (
    <Wrap>
      <MainTitle>Styled components</MainTitle>
      <Btn>Learn more</Btn>
      {/* <Btn secondary>Read more</Btn> */}
      <GrayBtn>Read more</GrayBtn>
    </Wrap>
  );
}
