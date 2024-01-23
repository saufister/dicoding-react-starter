import React from 'react';
import TombolBro from './TombolBro';
function CardBody({date,title,content,link}) {
    return (
      <div>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{content}</p>
        <TombolBro link={link}></TombolBro>
      </div>
    );
  }
export default CardBody;