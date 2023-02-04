import React from "react";
import Auth from '../utils/auth';


export default function Header() {
  
  return (
    <nav className="navbar navbar-expand-lg shadow-lg">
      <div className="container-fluid">
      <h1 className="title text-center">My Friendly Monster</h1>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link hidden" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
