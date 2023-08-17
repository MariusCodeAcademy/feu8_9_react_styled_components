import styled from 'styled-components';

const Wrap = styled.div`
  border-radius: 6px;
  background-color: var(--primary);
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: tomato;
  }

  & i {
    font-size: 21px;
    color: white;
  }
`;

export default function Icon(props) {
  return (
    <Wrap>
      <i className={`fa fa-${props.children}`} aria-hidden='true'></i>
    </Wrap>
  );
}
