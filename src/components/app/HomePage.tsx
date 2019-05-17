import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { StyledLink } = StyleSheet;

  return (
    <div>
      <p>
        <code>Welcome to my sketch book&hellip;</code>
      </p>

      <StyledLink to="/loaders">CSS/SVG Loaders</StyledLink>
    </div>
  );
}

const StyleSheet = {
  StyledLink: styled(Link)`
    color: #61dafb;
  `,
};
