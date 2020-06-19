import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 33px;
  width: 250px;
  background: #f9ed5b;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 2px 0;

  position: relative;
  display: flex;
  align-items: center;
  
  @media screen and (min-width: 300px) and (max-width: 768px) {
    
    float: center;
    width: 100%;
  }
`;

export const PlayPauseButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  outline:none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const PlayIcon = styled.div`
  width: 34px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  cursor: pointer;
  outline:none;

  &::before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 10px;
    border-color: transparent transparent transparent black;
  }
`;

export const PauseIcon = styled.div`
  justify-content: center;
  width: 34px;

  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 100%;
  cursor: pointer;
  display: flex;

  &::before {
    content: "";
    width: 4px;
    height: 10px;
    border-radius: 2px;
    background: black;
    border: 0;
    margin-right: 4px;
  }
  &::after {
    content: "";
    width: 4px;
    height: 10px;
    border-radius: 2px;
    background: black;
    border: 0;
  }
`;

export const ScrubberContainer = styled.div`
  overflow: hidden;
  align-self: center;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  position: relative;
  height: 109%;

  &::before {
    content: "";
    display: block;
    position: absolute;
    // top: calc(50% - 2.5px);
    width: 100%;
    height: 10px;
    background: black;
    border: 0;
  }
`;

export const ScrubberProgress = styled.div`
  height: 10px;
  width: 0px;
  // padding-top: 1.5px;
  z-index: 1;
  cursor: pointer;
  width: 100%;
`;

export const ScrubberLoaded = styled.div`
  height: 100%;

  ${({ progress }) =>
    css`
      width: ${progress}%;
    `};

  background: white;
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  height: 33px;
  font-size: 13px;
  line-height: 33px;
  padding: 0 11px 0 11px;
  color: black;
`;

export const TimeContainerPlayed = styled.div`
  padding: 0 2px 0 0;
`;

export const TimeContainerDuration = styled.div`
  padding: 0 0 0 2px;
`;
