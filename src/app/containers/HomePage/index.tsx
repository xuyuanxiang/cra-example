import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ height: number }>`
  background: #ffffff;
  width: 200px;
  font-size: 17px;
  height: ${props => props.height}px;
`;

export function HomePage() {
  return <StyledButton height={44}>Styled Button</StyledButton>;
}
