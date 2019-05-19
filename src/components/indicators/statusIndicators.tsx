import React from 'react';
import styled, { keyframes, css } from 'styled-components';

type ClassProps = {
  className?: string,
};


export const DoneIndicator = styled((props: ClassProps) => (
  <svg viewBox="0 0 50 50" className={props.className}>
    <circle cx="50%" cy="50%" r="20"></circle>
    <path d="M 15 25 L 22 32 L 35 20" />
  </svg>
))`
  width: 50px;
  height: 50px;

  circle {
    width: 50px;
    height: 50px;
    fill: none;
    stroke: white;
    stroke-width: 3px;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transform-origin: center;
    animation: ${keyframes`
      0% {
        stroke-dasharray: 1, 200;
      }
      50% {
        stroke-dasharray: 90, 200;
      }
      100% {
        stroke-dasharray: 200, 200;
      }
    `} 1s ease-in-out, ${keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(450deg);
      }
    `} 1s linear;
    animation-fill-mode: forwards;
  }

  path {
    fill: none;
    stroke: white;
    stroke-width: 0;
    stroke-dasharray: 0, 30;
    stroke-linecap: round;
    animation: ${keyframes`
      0% {
        stroke-dasharray: 0, 30;
      }
      69% {
        stroke-width: 0;
      }
      70% {
        stroke-width: 3px;
        stroke-dasharray: 0, 30;
      }
      85% {
        stroke-width: 3px;
        stroke-dasharray: 15, 30;
      }
      100% {
        stroke-width: 3px;
        stroke-dasharray: 30, 30;
      }
    `} 1s ease-in-out normal;
    animation-fill-mode: forwards;
  }
`;

export const ErrorIndicator = styled((props: ClassProps) => (
  <svg viewBox="0 0 50 50" className={props.className}>
    <circle cx="50%" cy="50%" r="20"></circle>
    <path d="M 20 20 L 30 30" />
    <path d="M 20 30 L 30 20" />
  </svg>
))`
  width: 50px;
  height: 50px;

  circle {
    width: 50px;
    height: 50px;
    fill: none;
    stroke: white;
    stroke-width: 3px;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    transform-origin: center;
    animation: ${keyframes`
      0% {
        stroke-dasharray: 1, 200;
      }
      50% {
        stroke-dasharray: 90, 200;
      }
      100% {
        stroke-dasharray: 200, 200;
      }
    `} 1s ease-in-out forwards, ${keyframes`
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(450deg);
      }
    `} 1s linear forwards;
  }

  path {
    fill: none;
    stroke: white;
    stroke-width: 3px;
    stroke-linecap: round;
    transform-origin: center;
    animation: ${keyframes`
      0% {
        transform: scale(0);
      }

      80% {
        transform: scale(0);
      }

      100% {
        transform: scale(1.0);
      }
    `} 1s cubic-bezier(0.5, 0.5, 0.5, 1.5) forwards;
  }
`;
