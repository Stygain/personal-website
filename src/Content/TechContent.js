/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function TechContent(props) {
  const styling = css`
    ${'' /* border: 1px solid blue; */}

    margin-top: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;

    h3 {
      font-size: 18px;

      margin-right: 10px;

      color: rgb(224, 246, 255);
    }

    a {
      color: rgb(14, 236, 131);
    }

    .description-container {
      ${'' /* border: 1px solid orange; */}

      ${'' /* width: 60%; */}

      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-start;
    }

    p {
      ${'' /* border: 1px solid red; */}

      margin: 0px 10px;
    }
  `;

  return (
    <div css={styling}>
      <h3>Technologies Used:</h3>
      <div className="description-container">
        {
          props.content.techAndTools.map((item) => {
            return(<p>-{item}</p>);
          })
        }
      </div>
    </div>
  );
}


export default TechContent;
