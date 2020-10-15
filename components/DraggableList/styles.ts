import styled from 'styled-components';

export const Content = styled.div`
  position: relative;
  width: 320px;
  height: 240px;
  user-select: none;
  cursor: grab;

  & > div {
    position: absolute;
    width: 320px;
    height: 90px;
    overflow: visible;
    pointer-events: auto;
    transform-origin: 50% 50% 0px;
    border-radius: 5px;
    color: white;
    line-height: 90px;
    padding-left: 32px;
    font-size: 14.5px;
    background: lightblue;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  & > div:nth-child(1) {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  }
  & > div:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  & > div:nth-child(3) {
    background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
  }
  & > div:nth-child(4) {
    background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
  }
`;

export default { Content };
