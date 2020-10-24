import React from 'react'
import Bike from '../images/bike.jpeg'
import Bike125 from '../images/bike125.jpg'
import Mehran from '../images/mehran.jpg'
import Cultus from '../images/cultus.jpg'
import Samsung from '../images/samsung.jpg'
import Moto from '../images/moto.jpg'
const Data = () => {
    return (
        <>
            <div className="card-group mt-4">
  <div className="card">
    <img src={Bike} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Bike 70</h5>
      <p className="card-text">PKR 25,000</p>
      <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={Bike125} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Bike 125</h5>
      <p className="card-text">PKR 70,000</p>
      <p className="card-text"><small className="text-muted">Last updated 1 hour ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={Mehran} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Mehran</h5>
      <p className="card-text">PKR 200,000</p>
      <p className="card-text"><small className="text-muted">Last updated 2 hours ago</small></p>
    </div>
  </div>
</div>
    <br/>
    <div className="card-group">
  <div className="card">
    <img src={Cultus} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Cultus</h5>
      <p className="card-text">PKR 500,000</p>
      <p className="card-text"><small className="text-muted">Last updated 24 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={Samsung} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Samsung S6</h5>
      <p className="card-text">PKR 13,000</p>
      <p className="card-text"><small className="text-muted">Last updated 50 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={Moto} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Moto Razr</h5>
      <p className="card-text">PKR 60,000</p>
      <p className="card-text"><small className="text-muted">Last updated 30 mins ago</small></p>
    </div>
  </div>
</div>
    </>
    )
}

export default Data