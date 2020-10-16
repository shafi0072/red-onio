import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <footer className="bg-dark py-3">
            <div className="container">
                <div className="row footer-top py-5">
                    <div className="col-md-6 mb-5">
                        <img src="https://res.cloudinary.com/dllb2cjw6/image/upload/v1584915160/logo2_tmrf40.png" alt=""/>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li>About Online Food</li>
                            <li>Read Our Blog</li>
                            <li>Sign up to deliver</li>
                            <li>Add your restaurant</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li>Get Help</li>
                            <li>Read FAQ</li>
                            <li>View All Cities</li>
                            <li>Restaurants near me</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom d-flex justify-content-between align-items-center">
                    <small className="text-secondary"><span id="copyright">Copyright &copy;  2020 Red Onion Restaurant</span>  </small>
                    <ul className="list-inline">
                        <li className="list-inline-item ml-3">Privacy Policy</li>
                        <li className="list-inline-item  ml-3">Terms of Us</li>
                        <li className="list-inline-item  ml-3">Pricing</li>
                    </ul>

                </div>
            </div>
        </footer>
    );
};

export default Footer;