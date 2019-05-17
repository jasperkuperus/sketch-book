import React from 'react';
import Router from './Router';
import styled from 'styled-components';

function App() {
  const { AppContainer } = StyleSheet;

  return (
    <AppContainer>
      <Router />
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
};

export default App;
