import { styled } from 'styled-components';

const Container = styled.p`
  background-image: url('/public/top.svg');
  min-height: 300px;
`;

export const Header = () => {
  return <Container />;
};
