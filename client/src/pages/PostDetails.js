import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import { Helmet } from "react-helmet";

const PostDetails = ({ match }) => {
  const user = useSelector((state) => state.userReducer.user);
  const [job, setJob] = useState();
  const [ready, setReady] = useState(false);
  const [employer, setEmployer] = useState();

  useEffect(() => {
    async function fetchData() {
      const jobDetails = await axios.get(`/api/job/${match.params.id}`);
      const employerDetails = await axios.get(
        `/api/user/profile/${jobDetails.data.jobToGet.employerId}`
      );
      setEmployer(employerDetails.data.userToFind);
      setJob(jobDetails.data.jobToGet);
      setReady(true);
    }
    if (!ready) {
      fetchData();
    }
  }, [ready]);
  return (
    <div>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" />
      <meta name="author" />
      <link
        href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
        rel="stylesheet"
      />
      <Helmet>
        <script src="/assets/js/jquery-2.1.0.min.js"></script>
        <script src="/assets/js/popper.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/scrollreveal.min.js"></script>
        <script src="/assets/js/waypoints.min.js"></script>
        <script src="/assets/js/jquery.counterup.min.js"></script>
        <script src="/assets/js/imgfix.min.js"></script>
        <script src="/assets/js/mixitup.js"></script>
        <script src="/assets/accordions.js"></script>
        <script src="/assets/js/custom.js"></script>
      </Helmet>

      <title>Post Details</title>
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
                  <em>{job?.salary} DT</em>
                </h2>
                <p>{job?.title}</p>
                {user?.role.toLowerCase() === "job seeker" ? (
                  <div className="main-button">
                    <Button href="/applicationForm">Apply for this Job</Button>
                  </div>
                ) : (
                  ""
                )}
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
                  <p>{job?.description}</p>
                </article>
                <article id="tabs-2">
                  <h4>About Employer</h4>
                  <p className="lead">
                    {" "}
                    <i className="fa fa-map-marker" /> {job?.location}{" "}
                  </p>
                  <p>{employer?.aboutEmployer}</p>
                </article>
                <article id="tabs-3">
                  <h4>Contact Details</h4>
                  <div className="row">
                    <div className="col-sm-6">
                      <label>Name</label>
                      <p>{employer?.name}</p>
                    </div>
                    <div className="col-sm-6">
                      <label>Phone</label>
                      <p> {employer?.phone ? employer.phone : "N/A"}</p>
                    </div>
                    <div className="col-sm-6">
                      <label>Email</label>
                      <p>
                        <a href="">{employer?.email}</a>
                      </p>
                    </div>
                    <div className="col-sm-6">
                      <label>Website</label>
                      <p>
                        {employer?.website ? (
                          <a href={employer.website}> {employer.website} </a>
                        ) : (
                          "N/A"
                        )}
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
    </div>
  );
};

export default PostDetails;
