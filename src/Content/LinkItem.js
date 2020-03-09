/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function LinkItem(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    position: relative;

    width: calc(100% - 15px);
    padding: 10px 0px;
    padding-left: 15px;

    cursor: pointer;

    background-color: rgb(0, 58, 83);

    transition: background-color 0.2s ease;

    h5 {
      font-size: 20px;
      color: rgb(157, 199, 217);

      transition: color 0.3s ease;
    }

    &:hover {
      background-color: rgb(7, 75, 105);

      h5 {
        color: rgb(14, 236, 131);
      }
    }

    .indicator {
      position: absolute;
      ${'' /* top: 0px;
      left: 0px; */}
      width: 1.5px;
      ${'' /* height: 20px; */}
      height: 50%;

      background-color: rgb(6, 144, 79);

      transition: 0.2s ease;
    }

    .indicator.top {
      top: 0px;
      left: 0px;
    }

    .indicator.bot {
      bottom: 0px;
      left: 0px;
    }

    .indicator.top.active {
      width: 6px;
      background-color: rgb(14, 236, 131);
      ${'' /* height: 53%;
      transform: translateY(1px) translateX(5px) rotate(-30deg); */}
    }

    .indicator.bot.active {
      width: 6px;
      background-color: rgb(14, 236, 131);
      ${'' /* height: 53%;
      transform: translateY(-1px) translateX(5px) rotate(30deg); */}
    }
  `;

  return (
    <div css={styling} onClick={
      () => {
        props.setIndex(props.id);
      }
    }>
      <div className={props.id === props.index ? "indicator top active" : "indicator top"}></div>
      <div className={props.id === props.index ? "indicator bot active" : "indicator bot"}></div>
      <h5>{props.content}</h5>
    </div>
  );
}


export default LinkItem;
