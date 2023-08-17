import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 56px auto;
  column-gap: 24px;
`;
const IconPlace = styled.div`
  grid-row: span 2;
`;
const Title = styled.h3``;
const Text = styled.p``;

export default function GainItem(props) {
  return (
    <Grid>
      <IconPlace>{props.icon}</IconPlace>
      <Title>{props.title}</Title>
      <Text>{props.descr}</Text>
    </Grid>
  );
}
