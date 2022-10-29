import React from "react";

export default function Footer() {


    return (
        <footer>
            <div className="footer-grid-container">
                <div className="footer-container">
                    <h4 className="footer-list-title">Customer Service</h4>
                    <a className="footer-link-list-item">Email us</a>
                    <a className="footer-link-list-item">Phone: +61 3 1344 5881</a>
                    <a className="footer-link-list-item">Shipping</a>
                    <a className="footer-link-list-item">Returns</a>
                    <a className="footer-link-list-item">Crash Replacement</a>
                    <a className="footer-link-list-item">FAQ</a>
                    <a className="footer-link-list-item">Careers</a>
                    <a className="footer-link-list-item">Sitemap</a>
                </div>
                <div className="footer-container">
                    <h4 className="footer-list-title">About us</h4>
                    <a className="footer-link-list-item">About</a>
                    <a className="footer-link-list-item">Stockists</a>
                    <a className="footer-link-list-item">Shipping</a>
                    <a className="footer-link-list-item">Privacy Policy</a>
                    <a className="footer-link-list-item">Terms and Conditions</a>
                    <a className="footer-link-list-item">Etape LaB</a>
                </div>
                <div className="footer-container">
                    <h4 className="footer-list-title">Connect</h4>
                    <a className="footer-link-list-item">Facebook</a>
                    <a className="footer-link-list-item">Instagram</a>
                    <a className="footer-link-list-item">Strava</a>
                    <a className="footer-link-list-item">Twitter</a>
                </div>
                <div className="footer-newsletter">
                    <label htmlFor="sign-up">Sign up for our newsletter</label>
                    <form className=" sign-up pill">
                        <input
                            className="email"
                            type="email"
                            placeholder="Enter your email address"
                            name="sign-up"
                            id="sign-up"
                        />
                        <button className="submit">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.793 8 8.146 5.354a.5.5 0 010-.708z" clipRule="evenodd"></path><path fillRule="evenodd" d="M4 8a.5.5 0 01.5-.5H11a.5.5 0 010 1H4.5A.5.5 0 014 8z" clipRule="evenodd"></path></svg>
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    )
}