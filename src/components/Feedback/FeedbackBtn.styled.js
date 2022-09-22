import styled from 'styled-components';

export const Button = styled.button`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p =>  p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;