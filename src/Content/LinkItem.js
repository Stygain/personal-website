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
      font-size: 2.5vw;
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
      top: 0px;
      left: 0px;
      width: 1.5px;
      height: 100%;

      background-color: rgb(6, 144, 79);

      transition: height 0.2s ease,
                  width 0.2s ease;
    }

    .indicator.active {
      width: 6px;
      background-color: rgb(14, 236, 131);
    }

    @media (min-width: 1300px) {
      & {
        padding: 15px 0px;
        padding-left: 15px;
      }

      h5 {
        font-size: 25px;
      }
    }

    @media (max-width: 800px) {
      & {
        padding: 10px 0px;
        padding-left: 10px;
      }

      h5 {
        font-size: 3.2vw;
      }

      .indicator {
        position: absolute;
        top: 0px;
        left: 0px;
        ${'' /* width: 1.5px; */}
        ${'' /* height: 100%; */}
        width: 100%;
        height: 1.5px;

        background-color: rgb(6, 144, 79);

        transition: 0.2s ease;
      }

      .indicator.active {
        width: 100%;
        height: 6px;
        background-color: rgb(14, 236, 131);
      }
    }
  `;

  return (
    <div css={styling} onClick={
      () => {
        props.setIndex(props.id);
      }
    }>
      <div className={props.id === props.index ? "indicator active" : "indicator"}></div>
      {/* <div className={props.id === props.index ? "indicator bot active" : "indicator bot"}></div> */}
      <h5>{props.content}</h5>
    </div>
  );
}


export default LinkItem;
