import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ProductDetail = () => {
  let {id} = useParams(); //파라미터로 유동적으로 바뀌는 id값을 객체형태로 저장
  const [product, setProduct] = useState(null) // 처음엔 상품의 값이 있을 수 없으므로 null값
  const [loading, setLoading] = useState(false)
  const getProductDetail = async () => { // 클릭한 상품의 상세정보를 출력할 수 있게끔 하는 함수
    let url = `https://my-json-server.typicode.com/kyjkyj9329/acnestudios/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data) // 클릭한 상품의 db.json정보들이 뜸
    setLoading(false)
    setProduct(data)
  }
  useEffect(() => {
    getProductDetail();
  }, []);
  if(loading || product == null) return <h1>Loading</h1>
  return (
    <Container fluid className='product-detail-container'>
      <Row>
        <Col md={6} sm={12} className='product-detail-img'>
          <div>
            <img src={product.img} />
          </div>
          <div>
            <img src='https://www.acnestudios.com/dw/image/v2/AAXV_PRD/on/demandware.static/-/Sites-acne-product-catalog/default/dw64767818/images/CI/CI0135-/2000x/CI0135-CY0_UNISEX-WOMAN_B.jpg?sw=750&sh=1125' />
          </div>
        </Col>
        <Col>
          <div className='product-desc'>
            <div className='product-desc-wrap'>
              <div className='product-info'>{product.title}</div>
              {product.unisex ? <div className='item-unisex'>UNISEX</div> : ""}
            </div>
            <div className='product-info'>₩{product.price.toLocaleString()}</div>
          </div>
          <div className='product-size'>
            <div className='size-guide'>
              <a>Item runs True to size</a>
              <a>Size guide</a>
            </div>
            <div className='size-box'>
              {product.size.map((item) => (
                <label>
                  <input
                    type='radio'
                    name='size'
                  />
                  <div>{item}</div>
                </label>
                ))}
            </div>
            {product.unisex ?
              <div className='size-info'>
                <div>UNISEX SIZING</div>
                <div>Unisex sizes run large for women. Select 1 size smaller than your normal size.</div>
              </div> : ""
            }
          </div>
          <div className='product-button'>
            <div className='product-button-wrap'>
              <Button className='add-button' variant='primary'>ADD TO BAG</Button>
              <Button className='like-button' variant='white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              </Button>
            </div>
          </div>
          <div className='product-detail'>
            <div>
              Acne Studios yellow/navy hooded sweater features varsity detailing on the front, crafted from a midweight cotton blend. Complete with a placket on the neckline and horizontal contrast inserts. Cut to a regular unisex fit with a below hip length.
            </div>
            <div>Regular unisex fit</div>
            <div>Below the hip length</div>
            <div>Hooded</div>
            <div>Varisty '08 STHLM' detail on the front</div>
            <div>Neckline placket</div>
            <div>Contrast colour inserts</div>
            <div>Female model is 178 cm / 5'8 and wears a size XS</div>
            <div>Male model is 188 cm / 6′1 and wears a size M</div>
            <div>Style ID: FA-UX-SWEA000148</div>
            <div>Made with organically grown cotton and recycled polyester.</div>
            <div>Shell: 84% Cotton, 16% Polyester, Contrast: 100% Cotton</div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail