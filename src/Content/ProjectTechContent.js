/** @jsx jsx */
import { jsx, css } from '@emotion/core';


function ProjectTechContent(props) {
  const styling = css`
    ${'' /* border: 1px solid blue; */}

    display: flex;
    flex-direction: row;
    justify-content: center;

    .description-container {
      ${'' /* border: 1px solid orange; */}

      ${'' /* width: 60%; */}

      display: flex;
      flex-direction: row;
      align-items: baseline;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    p {
      ${'' /* border: 1px solid red; */}

      color: rgb(166, 166, 166);
      font-size: 15px;

      margin: 0px 10px;
    }
  `;

  return (
    <div css={styling}>
      <div className="description-container">
        {
          props.content.map((item) => {
            return(<p>{item}</p>);
          })
        }
      </div>
    </div>
  );
}


export default ProjectTechContent;
