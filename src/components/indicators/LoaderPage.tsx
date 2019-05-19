import React from 'react';
import styled from 'styled-components';
import * as loaders from './loaders';
import * as statusIndicators from './statusIndicators';

/**
 * Simple page that contains a few CSS/SVG loaders.
 */
export default function LoaderPage() {
  const { LoaderContainer, DoneContainer } = StyleSheet;

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

      <DoneContainer>
        <statusIndicators.DoneIndicator />
        <statusIndicators.ErrorIndicator />
      </DoneContainer>
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
};
