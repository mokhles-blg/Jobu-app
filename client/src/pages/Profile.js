import React from "react";
import { Form } from "react-bootstrap";
const Profile = () => {
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
      <title>Profile</title>
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
                <h2>Welcome to your profile</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="trainers">
        <div className="container">
          <br />
          <br />
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src="assets/images/team-image-1-646x680.jpg" alt="" />
                </div>
                <div className="down-content">
                  <h4>My account</h4>
                  <p>Name: user's name</p>
                  <p>Email Address: user's email</p>
                  <button>
                    <a>Modify my account</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src="assets/images/team-image-2-646x680.jpg" alt="" />
                </div>
                <div className="down-content">
                  <h4>Add a resume</h4>
                  <div className="mb-3">
                    <Form.File id="formcheck-api-regular">
                      <Form.File.Input />
                    </Form.File>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="trainer-item">
                <div className="image-thumb">
                  <img src="assets/images/team-image-3-646x680.jpg" alt="" />
                </div>
                <div className="down-content">
                  <h4>Notifications</h4>
                  <p>You have no notifications for now.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* jQuery */}
      {/* Bootstrap */}
      {/* Plugins */}
      {/* Global Init */}
    </div>
  );
};

export default Profile;
