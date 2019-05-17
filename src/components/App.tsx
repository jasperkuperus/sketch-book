import React from 'react';
import styled from 'styled-components';

function App() {
  const { AppContainer, Anchor } = StyleSheet;

  return (
    <AppContainer>
      <p>
        <code>Welcome to my sketch book&hellip;</code>
      </p>
      <Anchor
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Anchor>
    </AppContainer>
  );
}

const StyleSheet = {
  AppContainer: styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  `,
  Anchor: styled.a`
    color: #61dafb;
  `,
};

export default App;
