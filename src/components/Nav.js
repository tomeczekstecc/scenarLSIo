import React, { Fragment } from "react";
import styles from '../style'

function Nav(props) {

  return (
    <Fragment>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <a href="index.html" className="navbar-brand text-light">
            scenar<span style={styles.styleSpan}>LSI</span>o
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  o projekcie
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  zespół
                </a>
              </li>
              <li className="nav-item">
                <a href="index.html" className="nav-link">
                  LSI.slaskie.pl
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav;
