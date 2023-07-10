import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const menuList = ['WOMAN', 'MAN', 'SALE'];
  const navigate = useNavigate();
  // const goToLogin = () => {
  //   navigate('/login');
  // }
  
  const search = (event) => {
    if(event.key === "Enter") {
      let keyword = event.target.value;
      console.log('keyword', keyword);
    }
  }
  return (
    <>
      <div className='nav-header'>
        <div className='nav-top'>
          <h1 onClick={() => navigate('/')}>
            ACNESTUDIOS.COM
          </h1>
          <div className='nav-menu-area'>
            <ul className='menu'>
              {menuList.map((menu, index) => (
                <li>
                  <a href='#' key={index}>
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='search-box'>
            <FontAwesomeIcon icon={faSearch} />
            <input type='text' placeholder='SEARCH' onKeyPress={search} />
          </div>
          <div className='nav-login'>
            <div onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} />
              <span style={{cursor: 'pointer'}}>SIGN IN</span>
            </div>
          </div>
        </div>
        <div className='nav-bottom'>
          <h1>New Arrivals</h1>
        </div>
        <div className='nav-logo' onClick={() => navigate('/')}>
          <img src='https://www.acnestudios.com/on/demandware.static/Sites-acne_ca-Site/-/en_CA/v1688693229640/icons/acne_studios_logo.svg' />
        </div>
      </div>
    </>
  )
}

export default Navbar
