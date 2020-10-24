import React from 'react'
import imgIcon1 from '../images/facebook-brands.svg'
import imgIcon2 from '../images/twitter-brands.svg'
import imgIcon3 from '../images/instagram-brands.svg'
import imgIcon4 from '../images/play-solid.svg'
const Footer = () => {
    return (
        <>
         {/* <!-- Footer --> */}
<footer className="page-footer font-small mdb-color lighten-3 pt-4">

  {/* <!-- Footer Links --> */}
  <div className="container-fluid text-center text-md-left">

    {/* <!-- Grid row --> */}
    <div className="row">

    <hr className="clearfix w-100 d-md-none"/>

{/* <!-- Grid column --> */}
<div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

  {/* <!-- Links --> */}
  <h6 className="font-weight-bold text-uppercase mb-2">POPULAR CATEGORIES</h6>

  <ul className="list-unstyled">
    <li>
      <p>
        <a className="fonts-text"  href="#!">Cars</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">Flat for rent</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">Jobs</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">Mobile Phones</a>
      </p>
    </li>
  </ul>

</div>
{/* <!-- Grid column --> */}
      <hr className="clearfix w-100 d-md-none"/>

      {/* <!-- Grid column --> */}
      <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

        {/* <!-- Links --> */}
        <h7 className="font-weight-bold text-uppercase mb-2">trending searches</h7>

        <ul className="list-unstyled">
          <li>
            <p>
              <a className="fonts-text"  href="#!">Bikes</a>
            </p>
          </li>
          <li>
            <p>
              <a className="fonts-text"  href="#!">Watches</a>
            </p>
          </li>
          <li>
            <p>
              <a className="fonts-text"  href="#!">Books</a>
            </p>
          </li>
          <li>
            <p>
              <a className="fonts-text"  href="#!">Dogs</a>
            </p>
          </li>
        </ul>

      </div>
      {/* <!-- Grid column --> */}

      <hr className="clearfix w-100 d-md-none"/>

{/* <!-- Grid column --> */}
<div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

  {/* <!-- Links --> */}
  <h7 className="font-weight-bold text-uppercase mb-2">About Us</h7>

  <ul className="list-unstyled">
    <li>
      <p>
        <a className="fonts-text"  href="#!">About OLX Group</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">OLX Blog</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">Contact Us</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">OLX for Businesses</a>
      </p>
    </li>
  </ul>

</div>
<hr className="clearfix w-100 d-md-none"/>

{/* <!-- Grid column --> */}
<div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

  {/* <!-- Links --> */}
  <h7 className="font-weight-bold text-uppercase mb-4">OLX</h7>

  <ul className="list-unstyled">
    <li>
      <p>
        <a className="fonts-text"  href="#!">Help</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">Sitemap</a>
      </p>
    </li>
    <li>
      <p>
        <a className="fonts-text"  href="#!">Legal & Privacy Information</a>
      </p>
    </li>
  </ul>

</div>
<hr className="clearfix w-100 d-md-none"/>

      {/* <!-- Grid column --> */}
      <div className="col-md-4 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

        {/* <!-- Contact details --> */}
        <h7 className="font-weight-bold text-uppercase mb-2">Follow Us</h7>
        <div>
            {/* <!-- Facebook --> */}
        <a type="button" className="btn btn-fb">
        <img src={imgIcon1} alt=""/>

        </a>
        {/* <!-- Twitter --> */}
        <a type="button" className="btn btn-tw">
          <img src={imgIcon2} alt=""/>
        </a>
        {/* <!-- Google +--> */}
        <a type="button" className="btn btn-gplus">
        <img src={imgIcon3} alt=""/>
        </a>
        {/* <!-- Dribbble --> */}
        <a type="button" className="btn btn-dribbble">
        <img src={imgIcon4} alt=""/>
          
        </a>
        </div>

      </div>
      {/* <!-- Grid column --> */}

      <hr clasNames="clearfix w-100 d-md-none"/>
    </div>
    {/* <!-- Grid row --> */}

  </div>
  {/* <!-- Footer Links --> */}

  {/* <!-- Copyright --> */}
  <div className="footer-copyright text-right py-3">Free Classifieds in Pakistan. © 2020 Copyright:
  <div className="footer-copyright2 text-left py-3">Other Countries India-South Africa-Indonesia
  </div>
  </div>
  {/* <!-- Copyright --> */}

</footer>
{/* <!-- Footer --></div> */}
        </>
    )
}
    
export default Footer