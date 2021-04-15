import React from "react";
import SearchingBar from "../Components/SearchingBar";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome.css";
import "../assets/css/style.css";
import v1 from "../assets/images/video.mp4";
import b1 from "../assets/images/about-fullscreen-1-1920x700.jpg";
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

        {/* ***** Call to Action Start ***** */}
        <section
          className="section section-bg"
          id="call-to-action"
          backgroundImage={b1}
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
      </div>
    </>
  );
};

export default Landpage;
