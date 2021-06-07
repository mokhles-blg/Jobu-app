import React from "react";
import { Col, Row } from "react-bootstrap";
import SearchingBar from "../Components/SearchingBar";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import v1 from "../assets/images/video.mp4";
import b1 from "../assets/images/about-fullscreen-1-1920x700.jpg";
import lineDec from "../assets/images/line-dec.png";
const Landpage = () => {
  return (
    <>
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
        <title>Landing Page</title>

        {/* ***** Main Banner Area Start ***** */}
        <div className="main-banner" id="top">
          <video autoPlay muted loop id="bg-video">
            <source src={v1} type="video/mp4" />
          </video>
          <div className="video-overlay header-text">
            <div className="caption">
              <h2>
                Find the perfect <em>Job</em>
              </h2>
              <div style={{ margin: "0 auto 0 150px" }}>
                <SearchingBar />
              </div>
            </div>
          </div>
        </div>
        {/* ***** Main Banner Area End ***** */}

        <section
          className="section section-bg"
          id="schedule"
          // style={{
          //   backgroundImage: `url(${b1}`,
          // }}
        >
          <div className="container">
            <Row>
              <Col sm={6}>
                <div className="cta-content">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <h2>
                    Read <em>About Us</em>
                  </h2>
                  <img src={lineDec} alt="lineDec" />
                </div>
              </Col>
              <Col sm={6}>
                <div className="cta-content text-center aboutustext">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <p style={{ textAlign: "justify" }}>
                    Jobu is a search engine for jobs in the Tunisia. Basically
                    that sums up what we are. But unlike traditional job boards,
                    users can search through thousands of career opportunities,
                    all sourced from many job sites from around Tunisia. We
                    understand that finding a job can be quite frustrating, so
                    we aim to make the website as simple and as intuitive as
                    possible. We’re working hard to ensure that you can find
                    your dream job using our service. If you have any questions,
                    please don’t hesitate to send us your comments or new
                    feature requests. We’ll try to reply as soon as possible.
                    After all, you are the reason why we build this website. If
                    you’re looking for advice on searching for jobs on Jobu,
                    please see some basic tips here.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* ***** Call to Action Start ***** */}
        <section
          className="section section-bg"
          id="call-to-action"
          // style={{
          //   backgroundImage: `url(${b1}`,
          // }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="cta-content">
                  <h2>
                    Send us a <em>message</em>
                  </h2>
                  <p>
                    Get in touch with the right people at Jobu. Email a member
                    of our team and we will get back to you shortly.
                  </p>
                  <div className="main-button">
                    <a href="contact.html">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Call to Action End ***** */}
      </div>
    </>
  );
};

export default Landpage;
