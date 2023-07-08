import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div onClick={showDetail} className='card'>
      <img src={item.img} />
      <div className='item-desc'>
        <div className='item-desc-wrap'>
          <div className='item-title'>{item.title}</div>
          {item.unisex ? <div className='item-unisex'>UNISEX</div> : ""}
        </div>
        <div className='item-price'>{item.price}</div>
      </div>
    </div>
  )
}

export default ProductCard
