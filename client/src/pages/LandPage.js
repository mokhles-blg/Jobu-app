import React from "react";
import { InputGroup, FormControl, Button, Form } from "react-bootstrap";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import img1 from "../assets/images/line-dec.png";
import p1 from "../assets/images/product-1-720x480.jpg";
import v1 from "../assets/images/video.mp4";

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
        <title>PHPJabbers.com | Free Job Agency Website Template</title>

        {/* ***** Main Banner Area Start ***** */}
        <div className="main-banner" id="top">
          <video autoPlay muted loop id="bg-video">
            <source src={v1} type="video/mp4" />
          </video>
          <div className="video-overlay header-text">
            <div className="caption">
              <h6>Lorem ipsum dolor sit amet</h6>
              <h2>
                Find the perfect <em>Job</em>
              </h2>
              <Form inline>
                <Form.Label htmlFor="inlineFormInputName2" srOnly>
                  Key words
                </Form.Label>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                  placeholder="Key words"
                />
                <Form.Label htmlFor="inlineFormInputGroupUsername2" srOnly>
                  location
                </Form.Label>
                <InputGroup className="mb-2 mr-sm-2">
                  <FormControl
                    id="inlineFormInputGroupUsername2"
                    placeholder="Location"
                  />
                </InputGroup>
                <Button type="submit" className="mb-2">
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </div>
        {/* ***** Main Banner Area End ***** */}
        {/* ***** Cars Starts ***** */}
        <section className="section" id="trainers">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>
                    Featured <em>Jobs</em>
                  </h2>
                  <img src={img1} alt="" />
                  <p>
                    Nunc urna sem, laoreet ut metus id, aliquet consequat magna.
                    Sed viverra ipsum dolor, ultricies fermentum massa consequat
                    eu.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="trainer-item">
                  <div className="image-thumb">
                    <img src="assets/images/product-1-720x480.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <span>
                      {" "}
                      <sup>$</sup>70 000{" "}
                    </span>
                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                    <p>Medical &nbsp;/&nbsp; Health Jobs</p>
                    <ul className="social-icons">
                      <li>
                        <a href="job-details.html">+ View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="trainer-item">
                  <div className="image-thumb">
                    <img src="assets/images/product-2-720x480.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <span>
                      {" "}
                      <sup>$</sup>70 000{" "}
                    </span>
                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                    <p>Medical &nbsp;/&nbsp; Health Jobs</p>
                    <ul className="social-icons">
                      <li>
                        <a href="job-details.html">+ View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="trainer-item">
                  <div className="image-thumb">
                    <img src="assets/images/product-3-720x480.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <span>
                      {" "}
                      <sup>$</sup>70 000{" "}
                    </span>
                    <h4>Lorem ipsum dolor sit amet, consectetur</h4>
                    <p>Medical &nbsp;/&nbsp; Health Jobs</p>
                    <ul className="social-icons">
                      <li>
                        <a href="job-details.html">+ View More</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="main-button text-center">
              <a href="jobs.html">View Jobs</a>
            </div>
          </div>
        </section>
        {/* ***** Cars Ends ***** */}
        <section
          className="section section-bg"
          id="schedule"
          style={{
            backgroundImage:
              "url(assets/images/about-fullscreen-1-1920x700.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading dark-bg">
                  <h2>
                    Read <em>About Us</em>
                  </h2>
                  <img src="assets/images/line-dec.png" alt="" />
                  <p>
                    Nunc urna sem, laoreet ut metus id, aliquet consequat magna.
                    Sed viverra ipsum dolor, ultricies fermentum massa consequat
                    eu.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="cta-content text-center">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore deleniti voluptas enim! Provident consectetur id
                    earum ducimus facilis, aspernatur hic, alias, harum rerum
                    velit voluptas, voluptate enim! Eos, sunt, quidem.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Iusto nulla quo cum officia laboriosam. Amet tempore,
                    aliquid quia eius commodi, doloremque omnis delectus
                    laudantium dolor reiciendis non nulla! Doloremque maxime quo
                    eum in culpa mollitia similique eius doloribus voluptatem
                    facilis! Voluptatibus, eligendi, illum. Distinctio, non!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Blog Start ***** */}
        <section className="section" id="our-classes">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>
                    Read our <em>Blog</em>
                  </h2>
                  <img src="assets/images/line-dec.png" alt="" />
                  <p>
                    Nunc urna sem, laoreet ut metus id, aliquet consequat magna.
                    Sed viverra ipsum dolor, ultricies fermentum massa consequat
                    eu.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" id="tabs">
              <div className="col-lg-4">
                <ul>
                  <li>
                    <a href="#tabs-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-2">
                      Aspernatur excepturi magni, placeat rerum nobis magnam
                      libero! Soluta.
                    </a>
                  </li>
                  <li>
                    <a href="#tabs-3">
                      Sunt hic recusandae vitae explicabo quidem laudantium
                      corrupti non adipisci nihil.
                    </a>
                  </li>
                  <div className="main-rounded-button">
                    <a href="blog.html">Read More</a>
                  </div>
                </ul>
              </div>
              <div className="col-lg-8">
                <section className="tabs-content">
                  <article id="tabs-1">
                    <img src={p1} alt="" />
                    <h4>
                      Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </h4>
                    <p>
                      <i className="fa fa-user" /> John Doe &nbsp;|&nbsp;{" "}
                      <i className="fa fa-calendar" /> 27.07.2020 10:10
                      &nbsp;|&nbsp; <i className="fa fa-comments" /> 15 comments
                    </p>
                    <p>
                      Phasellus convallis mauris sed elementum vulputate. Donec
                      posuere leo sed dui eleifend hendrerit. Sed suscipit
                      suscipit erat, sed vehicula ligula. Aliquam ut sem
                      fermentum sem tincidunt lacinia gravida aliquam nunc.
                      Morbi quis erat imperdiet, molestie nunc ut, accumsan
                      diam.
                    </p>
                    <div className="main-button">
                      <a href="blog-details.html">Continue Reading</a>
                    </div>
                  </article>
                  <article id="tabs-2">
                    <img src={p1} alt="" />
                    <h4>
                      Aspernatur excepturi magni, placeat rerum nobis magnam
                      libero! Soluta.
                    </h4>
                    <p>
                      <i className="fa fa-user" /> John Doe &nbsp;|&nbsp;{" "}
                      <i className="fa fa-calendar" /> 27.07.2020 10:10
                      &nbsp;|&nbsp; <i className="fa fa-comments" /> 15 comments
                    </p>
                    <p>
                      Integer dapibus, est vel dapibus mattis, sem mauris luctus
                      leo, ac pulvinar quam tortor a velit. Praesent ultrices
                      erat ante, in ultricies augue ultricies faucibus. Nam
                      tellus nibh, ullamcorper at mattis non, rhoncus sed massa.
                      Cras quis pulvinar eros. Orci varius natoque penatibus et
                      magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <div className="main-button">
                      <a href="blog-details.html">Continue Reading</a>
                    </div>
                  </article>
                  <article id="tabs-3">
                    <img src={p1} alt="" />
                    <h4>
                      Sunt hic recusandae vitae explicabo quidem laudantium
                      corrupti non adipisci nihil.
                    </h4>
                    <p>
                      <i className="fa fa-user" /> John Doe &nbsp;|&nbsp;{" "}
                      <i className="fa fa-calendar" /> 27.07.2020 10:10
                      &nbsp;|&nbsp; <i className="fa fa-comments" /> 15 comments
                    </p>
                    <p>
                      Fusce laoreet malesuada rhoncus. Donec ultricies diam
                      tortor, id auctor neque posuere sit amet. Aliquam
                      pharetra, augue vel cursus porta, nisi tortor vulputate
                      sapien, id scelerisque felis magna id felis. Proin neque
                      metus, pellentesque pharetra semper vel, accumsan a neque.
                    </p>
                    <div className="main-button">
                      <a href="blog-details.html">Continue Reading</a>
                    </div>
                  </article>
                </section>
              </div>
            </div>
          </div>
        </section>
        {/* ***** Blog End ***** */}
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
                  <h2>
                    Send us a <em>message</em>
                  </h2>
                  <p>
                    Ut consectetur, metus sit amet aliquet placerat, enim est
                    ultricies ligula, sit amet dapibus odio augue eget libero.
                    Morbi tempus mauris a nisi luctus imperdiet.
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
        {/* ***** Testimonials Item Start ***** */}
        <section className="section" id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="section-heading">
                  <h2>
                    Read our <em>Testimonials</em>
                  </h2>
                  <img src={img1} alt="waves" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatem incidunt alias minima tenetur nemo
                    necessitatibus?
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="features-items">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="First One"
                      />
                    </div>
                    <div className="right-content">
                      <h4>John Doe</h4>
                      <p>
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dicta numquam maxime voluptatibus, impedit sed!
                          Necessitatibus repellendus sed deleniti id et!"
                        </em>
                      </p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="second one"
                      />
                    </div>
                    <div className="right-content">
                      <h4>John Doe</h4>
                      <p>
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dicta numquam maxime voluptatibus, impedit sed!
                          Necessitatibus repellendus sed deleniti id et!"
                        </em>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="features-items">
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="fourth muscle"
                      />
                    </div>
                    <div className="right-content">
                      <h4>John Doe</h4>
                      <p>
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dicta numquam maxime voluptatibus, impedit sed!
                          Necessitatibus repellendus sed deleniti id et!"
                        </em>
                      </p>
                    </div>
                  </li>
                  <li className="feature-item">
                    <div className="left-icon">
                      <img
                        src="assets/images/features-first-icon.png"
                        alt="training fifth"
                      />
                    </div>
                    <div className="right-content">
                      <h4>John Doe</h4>
                      <p>
                        <em>
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Dicta numquam maxime voluptatibus, impedit sed!
                          Necessitatibus repellendus sed deleniti id et!"
                        </em>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="main-button text-center">
              <a href="testimonials.html">Read More</a>
            </div>
          </div>
        </section>
        {/* ***** Testimonials Item End ***** */}
        {/* ***** Footer Start ***** */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p>
                  Copyright © 2020 Company Name - Template by:{" "}
                  <a href="https://www.phpjabbers.com/">PHPJabbers.com</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Landpage;
