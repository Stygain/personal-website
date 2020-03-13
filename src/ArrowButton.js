/** @jsx jsx */
import { jsx, css } from '@emotion/core';

import { useDispatch, useSelector } from 'react-redux';

function ArrowButton(props) {
  const dispatch = useDispatch();

  const styling = css`
    ${'' /* border: 1px solid orange; */}

    cursor: pointer;

    padding: 2px 6px;

    .bar1, .bar2, .bar3 {
      width: 35px;
      height: 2px;

      margin: 7px 0;
      border-radius: 3px;

      background-color: rgb(14, 236, 131);

      transition: all 0.25s cubic-bezier(.52,.01,.5,1.23) 0.2s;
    }

    .bar1.open {
      height: 4px;
      transform: translateY(3.7px) translateX(8.5px) rotate(-135deg) scaleX(0.7);
    }

    .bar2.open {
      height: 4px;
      transform: translateY(0px) translateX(-2px) rotate(180deg) scaleX(0.9);
    }

    .bar3.open {
      height: 4px;
      transform: translateY(-3.7px) translateX(8.5px) rotate(135deg) scaleX(0.7);
    }
  `;

  return (
    <div css={styling} className={props.action ? "open" : ""} onClick={() => {
      dispatch(props.setAction(!props.action));
    }}>
      <div className={props.action ? "bar1 open" : "bar1"}></div>
      <div className={props.action ? "bar2 open" : "bar2"}></div>
      <div className={props.action ? "bar3 open" : "bar3"}></div>
    </div>
  );
}


export default ArrowButton;
