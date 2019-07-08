import React, { useState } from 'react';
import styled from 'styled-components';
import * as loaders from './loaders';
import * as statusIndicators from './statusIndicators';

/**
 * Simple page that contains a few CSS/SVG loaders.
 */
export default function LoaderPage() {
  const {
    LoaderContainer, DoneContainer, ButtonContainer,
  } = StyleSheet;

  const [renderCount, setRenderCount] = useState(0);

  return (
    <div>
      <LoaderContainer>
        <loaders.DoubleCircleSpinner />
        <loaders.QuarterCircleSpinner />
        <loaders.DoulbeCircleExpandingSpinner />

        <loaders.CircleBackgroundSpinner />
        <loaders.CirclingBorderSpinner />
        <loaders.IonicSpinner />

        <loaders.AccelerateShrinkingSpinner />
        <loaders.AccelerateSpinner />
        <loaders.ExpandingSpinner />
      </LoaderContainer>

      <DoneContainer key={renderCount}>
        <statusIndicators.DoneIndicator />
        <statusIndicators.ErrorIndicator />
      </DoneContainer>

      <ButtonContainer>
        <button onClick={() => setRenderCount(renderCount + 1)}>
          Reset indicators
        </button>
      </ButtonContainer>
    </div>
  );
}

const StyleSheet = {
  LoaderContainer: styled.div`
    display: grid;
    grid-template: auto auto auto / auto auto auto;
    grid-gap: 25px 25px;
  `,
  DoneContainer: styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    svg {
      margin: 10px;
    }
  `,
  ButtonContainer: styled.div`
    text-align: center;
  `,
};
