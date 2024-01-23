import React from 'react'

const CardHeader = ({ image, category,}) => {
    return (
        <header>
          <h4>{category}</h4>
          <img src={image} alt="" />
        </header>
      );
}

// function CardHeader({ image, category }) {
//     return (
//       <header>
//         <h4>{category}</h4>
//         <img src={image} alt="" />
//       </header>
//     );
//   }
export default CardHeader;