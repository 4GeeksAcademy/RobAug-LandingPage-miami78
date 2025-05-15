import React from "react";
import bootstrapThemes from "../../img/bootstrap-themes.png";


const Hero = () => {
  return (
    <>
      <div className="row">
        <div className="Col-1"></div>
        <div className="col-10">
          <div className="container py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img
                  src={bootstrapThemes}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 text-start fw-bold lh-1 mb-3">
                  Responsive left-aligned hero with image
                </h1>
                <p className="lead text-start">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 me-md-2"
                >
                  Call To Action
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Sign A Petition
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </>
  );
};

export default Hero;
