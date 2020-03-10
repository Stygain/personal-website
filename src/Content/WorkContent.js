/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function WorkContent(props) {
  const styling = css`
    ${'' /* border: 1px solid blue; */}


    h3 {
      font-size: 4vw;

      color: rgb(224, 246, 255);
    }

    h5 {
      font-size: 2.5vw;
      color: rgb(175, 211, 227);

      margin-left: 10px;
    }

    h5.location {
      font-size: 2vw;
      color: rgb(71, 126, 150);

      margin: 0;
      margin-right: 10px;
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
      font-size: 2.5vw;

      ${'' /* color: ${hover ? "rgb(14, 236, 131)" : "rgb(19, 150, 88)"}; */}
      color: rgb(14, 236, 131);

      padding-right: 4px;
    }

    p {
      ${'' /* border: 1px solid red; */}

      ${'' /* margin: 0px 30px; */}
      font-size: 2vw;
      margin: 0;
    }

    .date-location-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    @media (min-width: 1300px) {
      h3 {
        font-size: 32px;
      }

      h5 {
        font-size: 24px;
      }

      h5.location {
        font-size: 18px;
      }

      p {
        font-size: 18px;
      }

      .item-prefix {
        font-size: 18px;
      }
    }

    @media (max-width: 800px) {
      h3 {
        font-size: 4.5vw;
      }

      h5 {
        font-size: 3vw;
      }

      h5.location {
        font-size: 2.5vw;
      }

      p {
        font-size: 2.5vw;
      }
    }
  `;

  return (
    <div css={styling}>
      <h3>{props.content.position} at <a href={props.content.companylink}>{props.content.company}</a></h3>
      <div className="date-location-container">
        <h5>{props.content.start} - {props.content.end}</h5>
        <h5 className="location">{props.content.location}</h5>
      </div>
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


export default WorkContent;
