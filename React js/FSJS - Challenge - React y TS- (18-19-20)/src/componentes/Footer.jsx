import React from "react";

export function Footer() {
  return (
    <>
         <div className="footer">
        <footer>
            <div className="social">
            <button className="btn">
                <i className="fab fa-google"></i>
                </button>
              <button className="btn">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button className="btn">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="btn">
              <i className="fab fa-github"></i>
              </button>
              <button className="btn">
              <i className="fab fa-instagram"></i>
              </button>
                </div>
            <ul className="list-inline">
                <li className="list-inline-item"><a href="a">Home</a></li>
                <li className="list-inline-item"><a href="a">Services</a></li>
                <li className="list-inline-item"><a href="a">About</a></li>
                <li className="list-inline-item"><a href="a">Terms</a></li>
                <li className="list-inline-item"><a href="a">Privacy Policy</a></li>
            </ul>
            <p className="copyright">Company Name © 2022</p>
        </footer>
    </div>
    </>
  );
}
