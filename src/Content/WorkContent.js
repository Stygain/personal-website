/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function Work(props) {
  const styling = css`
    ${'' /* border: 1px solid blue; */}


    h3 {
      font-size: 28px;
      color: rgb(224, 246, 255);
    }

    h5 {
      font-size: 20px;
      color: rgb(175, 211, 227);

      margin-left: 10px;
    }

    a {
      color: rgb(14, 236, 131);
    }

    .description-container {
      ${'' /* border: 1px solid orange; */}

      margin-top: 10px;

      display: flex;
      flex-direction: column;
      align-items: baseline;
      justify-content: flex-start;
    }

    .description-item {
      ${'' /* border: 1px solid yellow; */}

      display: flex;
      flex-direction: row;
      align-items: baseline;

      margin-left: 15px;
      ${'' /* margin-top: 15px; */}
    }

    .item-prefix {
      ${'' /* border: 1px solid red; */}

      ${'' /* color: ${hover ? "rgb(14, 236, 131)" : "rgb(19, 150, 88)"}; */}
      color: rgb(14, 236, 131);

      padding-right: 4px;
    }

    p {
      ${'' /* border: 1px solid red; */}

      ${'' /* margin: 0px 30px; */}
      margin: 0;
    }
  `;

  return (
    <div css={styling}>
      <h3>{props.content.position} at <a href={props.content.companylink}>{props.content.company}</a></h3>
      <h5>{props.content.start} - {props.content.end}</h5>
      <div className="description-container">
        {
          props.content.description.map((item) => {
            return(
              <div className="description-item">
                <h2 className="item-prefix">
                  >
                </h2>
                <p>{item}</p>
              </div>);
          })
        }
      </div>
    </div>
  );
}


export default Work;
