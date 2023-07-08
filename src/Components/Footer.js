import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className='Footer'>
      <Container fluid>
        <Row>
          <Col>
            <a>LIVE CHAT</a>
            <a>CALL</a>
            <a>EMAIL</a>
            <div className='acne'>© ACNE STUDIOS 2023</div>
          </Col>
          <Col>
            <a>CLIENT SERVICES</a>
            <a>ORDER STATUS</a>
            <a>REGISTER RETURN</a>
            <a>PRODUCT CARE</a>
            <br />
            <a>STORES</a>
            <a>NEWSLETTER</a>
          </Col>
          <Col>
            <a>ABOUT</a>
            <a>PRESS</a>
            <a>CAREERS</a>
            <a>TERMS & CONDITIONS</a>
            <a>SUSTAINABILITY</a>
            <a>ACCESSIBILITY</a>
            <a>WHISTLEBLOWING</a>
          </Col>
          <Col>
            <a>INSTAGRAM</a>
            <a>FACEBOOK</a>
            <a>TWITTER</a>
            <a>PINTEREST</a>
            <a>WEIBO</a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
