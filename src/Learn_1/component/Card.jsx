import React from 'react';
import CardHeader  from './CardHeader';
import CardBody from './CardBody';
function Card({ image, category, date, title, content, link }) {
    return (
      <article>
        <CardHeader image={image} category={category} />
        <CardBody date={date} title={title} content={content} link={link} />
      </article>
    );
  }

  export default Card;