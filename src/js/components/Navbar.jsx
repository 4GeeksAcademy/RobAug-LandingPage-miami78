import React from "react";

const Navbar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <div className="d-flex">
                  <a className="nav-link active text-white px-4" aria-current="page" href="#">
                    Home
                  </a>
                  
                  <a className="nav-link text-white" href="#">
                    Link
                  </a>
            </div>    
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
