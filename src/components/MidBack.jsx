import React from 'react'
import CaruImg from '../images/BackCaru.jpg'
const MidBack = () => {
    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide mb-4" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={CaruImg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={CaruImg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={CaruImg} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </a>
  <h2>Fresh Recomendations</h2>
</div>
        </>
    )
}

export default MidBack
