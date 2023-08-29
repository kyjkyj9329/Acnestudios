import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';

const DIV_Hover = styled.div`
  transition: top 1s ease-in;
  top: 20px;

  &.hover {
    top: 0px;
    animation-duration: 3s;
    animation-name: fadeout;
  }
  
  @keyframes fadeout {
    0% {
      opacity: 0; 
    }

    100% {
      opacity: 1;
    }
  }
`;

const ProductCard = ({ item }) => {
  const [isHovering, setIsHovering] = useState(0);
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div
      onClick={showDetail}
      onMouseOver={() => setIsHovering(1)}
      onMouseOut={() => setIsHovering(0)}
    >
      {isHovering ? (
        <div className='card'>
          <img src={item.hoverimg} />
          <div className='item-desc'>
            <div className='item-desc-wrap'>
              <div className='item-title'>{item.title}</div>
              {item.unisex ? <div className='item-unisex'>UNISEX</div> : ""}
            </div>
            <div className='item-price'>{item.price}</div>
          </div>
        </div>
      ) : (
        <div className='card'>
          <img src={item.img} />
          <div className='item-desc'>
            <div className='item-desc-wrap'>
              <div className='item-title'>{item.title}</div>
              {item.unisex ? <div className='item-unisex'>UNISEX</div> : ""}
            </div>
            <div className='item-price'>{item.price}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard




// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const ProductCard = ({ item }) => {
//   const navigate = useNavigate();
//   const showDetail = () => {
//     navigate(`/product/${item.id}`);
//   }
//   return (
//     <div onClick={showDetail} className='card'>
//       <img src={item.img} />
//       <div className='item-desc'>
//         <div className='item-desc-wrap'>
//           <div className='item-title'>{item.title}</div>
//           {item.unisex ? <div className='item-unisex'>UNISEX</div> : ""}
//         </div>
//         <div className='item-price'>{item.price}</div>
//       </div>
//     </div>
//   )
// }

// export default ProductCard
