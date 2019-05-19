import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type ClassProps = {
  className?: string,
};

const basicCircle = css`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  border-width: 3px;
  border-style: solid;
  border-color: transparent white transparent white;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const DoubleCircleSpinner = styled.div`
  ${basicCircle}
  animation: ${rotateAnimation} 1s linear infinite;
`;

export const QuarterCircleSpinner = styled.div`
  ${basicCircle}
  border-color: transparent white transparent transparent;
  animation: ${rotateAnimation} 1s linear infinite;
`;

export const DoulbeCircleExpandingSpinner = styled((props: ClassProps) => (
  <div className={props.className}>
    <div className="spinner"></div>
  </div>
))`
  position: relative;

  .spinner {
    width: 25px;
    height: 25px;
    position: absolute;

    ${basicCircle}
    border-color: transparent white transparent white;
    animation: ${keyframes`
      0% {
        transform: rotate(0deg) scale(1.0);
      }
      50% {
        transform: rotate(360deg) scale(0.6, 0.5);
        border-width: 3px;
      }
      100% {
        transform: rotate(720deg) scale(1.0);
      }
    `} 2s ease infinite;
  }
`;

export const CircleBackgroundSpinner = styled.div`
  ${basicCircle}
  border-color: rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.3) white;
  animation: ${rotateAnimation} 1s linear infinite;
`;

export const CirclingBorderSpinner = styled((props: ClassProps) => (
  <svg viewBox="25 25 50 50" className={props.className}>
    <circle cx="50" cy="50" r="20"></circle>
  </svg>
))`
  animation: ${rotateAnimation} 1s linear infinite;

  circle {
    fill: none;
    stroke: white;
    stroke-width: 4px;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${keyframes`
      0% {
        stroke-dasharray: 1, 200;
      }
      50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
      }
      100% {
        stroke-dashoffset: -125px;
      }
    `} 1s ease-in-out infinite;
  }
`;

export const IonicSpinner = styled((props: ClassProps) => (
  <div className={props.className}>
    <div className="dot">
    </div>
  </div>
))`
  ${basicCircle}
  border-color: rgba(255, 255, 255, 0.3);
  border-width: 2px;
  transform: rotate(47deg);
  animation: ${keyframes`
    0% {
      transform: rotate(47deg);
    }
    100% {
      transform: rotate(407deg);
    }
  `} 1.5s ease infinite;

  .dot {
    width: 5px;
    height: 5px;
    border-radius: 5px;
    background-color: white;
  }
`;

export const AccelerateSpinner = styled.div`
  ${basicCircle};
  animation: ${keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  `} 1s cubic-bezier(0.65, -0.6, 0.11, 1.0) infinite;
`;

export const AccelerateShrinkingSpinner = styled((props: ClassProps) => (
  <div className={props.className}>
    <div className="spinner"></div>
  </div>
))`
  width: 25px;
  height: 25px;
  position: relative;

  .spinner {
    position: absolute;
    ${basicCircle};
    animation: ${keyframes`
      0% {
        transform: scale(1.0) rotate(0deg);
      }
      20% {
        transform: scale(0.6);
      }
      100% {
        transform: scale(1.0) rotate(720deg);
      }
    `} 1.5s cubic-bezier(0.65, -1.0, 0.11, 1.0) infinite;
  }
`;

export const ExpandingSpinner = styled((props: ClassProps) => (
  <div className={props.className}>
    <div className="spinner"></div>
  </div>
))`
  width: 25px;
  height: 25px;
  position: relative;

  .spinner {
    position: absolute;
    ${basicCircle};
    border-color: #4c4C4C;
    background-color: #4c4c4c;
    animation: ${keyframes`
      0% {
        transform: scale(0.4);
      }
      50% {
        transform: scale(1.0);
      }
      100% {
        transform: scale(0.4);
      }
    `} 2s cubic-bezier(0.45, -0.85, 0.45, 1.85) infinite;
  }
`;
