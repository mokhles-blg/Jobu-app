import React from "react";

const PostDetails = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content />
      <meta name="author" content />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
      />
      <title>Post Details</title>
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="assets/css/font-awesome.css"
      />
      <link rel="stylesheet" href="assets/css/style.css" />

      {/* ***** Call to Action Start ***** */}
      <section
        className="section section-bg"
        id="call-to-action"
        style={{
          backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="cta-content">
                <br />
                <br />
                <h2>
                  <em>$70 000</em>
                </h2>
                <p>Security officer - luxury retail</p>
                <div className="main-button">
                  <a href="#">Apply for this Job</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Call to Action End ***** */}
      {/* ***** Fleet Starts ***** */}
      <section className="section" id="trainers">
        <div className="container">
          <br />
          <br />
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="assets/images/job-image-1-1200x600.jpg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="assets/images/job-image-1-1200x600.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="assets/images/job-image-1-1200x600.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <br />
          <br />
          <div className="row" id="tabs">
            <div className="col-lg-4">
              <ul>
                <li>
                  <a href="#tabs-1">
                    <i className="fa fa-cog" /> Job Description
                  </a>
                </li>
                <li>
                  <a href="#tabs-2">
                    <i className="fa fa-info-circle" /> About Employer
                  </a>
                </li>
                <li>
                  <a href="#tabs-3">
                    <i className="fa fa-phone" /> Contact Details
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-8">
              <section className="tabs-content" style={{ width: "100%" }}>
                <article id="tabs-1">
                  <h4>Job Description</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio eum expedita nobis cum vitae totam voluptate
                    temporibus nostrum, repellendus accusantium.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Illo hic quis quo tempora, totam non vero velit. Inventore,
                    obcaecati placeat perspiciatis neque enim laudantium. Sit
                    eaque, aliquid et nisi illo.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit nam placeat ut cumque ipsa iste, commodi omnis aperiam
                    perferendis incidunt. Provident doloremque, quia labore eius
                    adipisci asperiores voluptatum nisi porro corporis ex
                    explicabo magnam eligendi, autem quae, voluptate et
                    molestiae?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae soluta architecto modi. Et ullam ipsam, tempore
                    sequi nesciunt dignissimos animi odio eaque illum eligendi
                    pariatur. Porro delectus a rem rerum ex similique fugit
                    dolorem fugiat libero sint aliquam velit, eligendi adipisci
                    fuga assumenda, dolorum, deserunt ea inventore quis voluptas
                    accusantium omnis iure quia temporibus. Accusamus, adipisci
                    facere ullam ea amet.
                  </p>
                </article>
                <article id="tabs-2">
                  <h4>About Employer</h4>
                  <p className="lead">
                    {" "}
                    <i className="fa fa-map-marker" /> London{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia doloremque sit, enim sint odio corporis illum
                    perferendis, unde repellendus aut dolore doloribus minima
                    qui ullam vel possimus magnam ipsa deleniti.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus ducimus ab numquam magnam aliquid, odit
                    provident consectetur corporis eius blanditiis alias nulla
                    commodi qui voluptatibus laudantium quaerat tempore possimus
                    esse nam sed accusantium inventore? Sapiente minima dicta
                    sed quia sunt?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Rerum qui, corrupti consequuntur. Officia consectetur error
                    amet debitis esse minus quasi, dicta suscipit tempora,
                    natus, vitae voluptatem quae libero. Sunt nulla culpa
                    impedit! Aliquid cupiditate, impedit reiciendis dolores,
                    illo adipisci, omnis dolor distinctio voluptas expedita
                    maxime officiis maiores cumque sequi quaerat culpa
                    blanditiis. Quia tenetur distinctio rem, quibusdam officiis
                    voluptatum neque!
                  </p>
                </article>
                <article id="tabs-3">
                  <h4>Contact Details</h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <label>Name</label>
                      <p>John Smith</p>
                    </div>
                    <div className="col-sm-6">
                      <label>Phone</label>
                      <p>123-456-789 </p>
                    </div>
                    <div className="col-sm-6">
                      <label>Mobile phone</label>
                      <p>456789123 </p>
                    </div>
                    <div className="col-sm-6">
                      <label>Email</label>
                      <p>
                        <a href="#">john@carsales.com</a>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <label>Website</label>
                      <p>
                        <a href="http://www.cannonguards.com/">
                          http://www.cannonguards.com/
                        </a>
                      </p>
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* ***** Fleet Ends ***** */}
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enquiry
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="contact-us">
                <div className="contact-form">
                  <form action="#" id="contact">
                    <div className="row">
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter full name"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter email address"
                            required
                          />
                        </fieldset>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <fieldset>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter phone"
                            required
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <fieldset>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="From date"
                                required
                              />
                            </fieldset>
                          </div>
                          <div className="col-md-6">
                            <fieldset>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="To date"
                                required
                              />
                            </fieldset>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary">
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* jQuery */}
      {/* Bootstrap */}
      {/* Plugins */}
      {/* Global Init */}
    </div>
  );
};

export default PostDetails;
