import styled from 'styled-components';

export const TodoWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing(10)};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.spacing(2)};

  color: ${({ theme }) => theme.colors.gray};
  box-shadow: ${({ theme }) => theme.shadows.regular};

  position: relative;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 700;

  text-align: ${({ textAlign }) => (!textAlign ? 'left' : textAlign)};
  margin-bottom: ${({ marginBottom }) => (!marginBottom ? 0 : marginBottom)};
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  padding: ${({ theme }) => theme.spacing(2.5)};
  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;

  padding: ${({ theme }) => theme.spacing(2.5)};

  transition: transform ${({ theme }) => theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  background-color: ${({ select }) => (select ? 'green' : 'red')};
  grid-gap: ${({ theme }) => theme.spacing(25)};
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
