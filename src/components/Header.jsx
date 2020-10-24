import React from 'react'
import myImg from '../images/OLX_New_Logo.png'
import myImgs from '../images/search-solid.svg'
import Bell from '../images/bell-solid.svg'
const Header = () => {
    return (
        <>
         <nav className="navbar navbar-expand-md navbar-light bg-light">
  <div className="container-fluid">
    <a className="Normal"><img src={myImg} alt="" width="80" height="40"/></a>
      <div className="col-md-3 mr-1">
      <form className="d-flex justify-content-center">
        <select className="form-control" id="placeholder" type="search" placeholder="Search" aria-label="Search">
        <option value="Pakistan">Pakistan</option>
        <option value="Karachi">Karachi</option>
        <option value="Lahore">Lahore</option>
        </select>
        <div className="style-icon">
        <button className="btn" type="submit"><img src={myImgs} alt=""/></button>
        </div>
      </form>
      </div>
      <div className="col-md-5">
      <form class="d-flex">
        <input class="form-control " type="search" placeholder="Find Cars,Mobile Phones and more" aria-label="Search"/>
        <button class="btn" type="submit"><img src={myImgs} alt=""/></button>
      </form>
      </div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#"><i className="far fa-comment"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Login
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
      </ul>
      </div>
  </div>
</nav>   
        </>
    )
}

export default Header
