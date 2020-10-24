import React from 'react'

const MidHeader = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown mr-4">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            ALL CATEGORIES
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link " aria-current="page" href="#">Mobile Phones</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link " aria-current="page" href="#">Cars</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link " aria-current="page" href="#">Motorcycle</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link " aria-current="page" href="#">Houses</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link " aria-current="page" href="#">TV-Video-Audio</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link" aria-current="page" href="#">Tablets</a>
        </li>
        <li className="nav-item mr-2">
          <a className="nav-link mr-2" aria-current="page" href="#">Land & Plots</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
        </>
    )
}

export default MidHeader
