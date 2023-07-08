import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user');
    setAuthenticate(true);
    navigate('/');
  }
  return (
    <Container className='login-area'>
      <Form className='login-form' onSubmit={(event) => loginUser(event)}>
        <Form.Group className="mb-3 login-heading" controlId="formBasicTitle">
          <div>SIGN IN</div>
          <a>FORGOT YOUR PASSWORD?</a>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="EMAIL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="PASSWORD" />
        </Form.Group>
        <Button variant="dark" type="submit">
          SIGN IN
        </Button>
        <Form.Group className="mb-3 login-register" controlId="formBasicRegister">
          <div>NOT A MEMBER?</div>
          <a>REGISTER</a>
        </Form.Group>
        <Form.Group className="mb-3 login-google" controlId="formBasicSigninGoogle">
          <div>SIGN IN WITH</div>
          <a>
            <FontAwesomeIcon icon={faGoogle} />
            <div>GOOGLE</div>
          </a>
        </Form.Group>
      </Form>
    </Container>
  )
}

export default Login