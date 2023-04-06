/** @format */

import React from "react";
// import Layout from "../Layout";
// import { ReactDOM } from "react-dom";
import "./portfolio.css";
import { Container, Row, Col, ProgressBar, Carousel } from "react-bootstrap";
import banner1 from "../../images/logo/banner-3.jpg";
// import banner2 from "../../images/logo/women-banner.jpg";
import banner3 from "../../images/leaf1.jpeg";
import {
  FaArrowRight,
  FaBuilding,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaFacebookF,
  FaFacebookSquare,
  FaGlobe,
  FaInstagramSquare,
  FaPhone,
  FaRocket,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

// var Carousel = require("react-responsive-carousel").Carousel;

/**
 * @author
 * @function PortFolio
 **/

const PortFolio = (props) => {
  const SKILLS_LIST = [
    {
      label: "HTML5/CSS3 - 95%",
      percentage: "100%",
    },
    {
      label: "ES6 / 95%",
      percentage: "95%",
    },
    {
      label: "React/Redux - 95%",
      percentage: "95%",
    },
  ];
  console.log(SKILLS_LIST);
  const ProgressLine = ({
    label,
    percentage,
    barBg,
    progresBg,
    barHeight,
    borderRadius,
  }) => {
    const [widths, setWidths] = React.useState(0);

    React.useEffect(() => {
      requestAnimationFrame(() => setWidths(percentage));
    }, [percentage]);

    return (
      <section className="progress-line">
        <span className="progress-line__label">{label}</span>
        <div
          className="progress-line__outer"
          style={{
            background: barBg,
            height: `${barHeight}px`,
            borderRadius: borderRadius,
          }}>
          <div
            className="progress-line__inner"
            style={{
              width: widths,
              background: progresBg,
              transition: "width 2s",
            }}
          />
        </div>
      </section>
    );
  };

  const Skills = () => (
    <Container>
      <Row>
        <Col>
          {SKILLS_LIST.map(
            (
              skill,
              index // index: static values
            ) => (
              <ProgressLine
                key={index}
                barHeight="8"
                barBg="#efefef"
                progresBg="rgba(255, 82, 82, .7)"
                label={skill.label}
                percentage={skill.percentage}
                borderRadius="10px"
              />
            )
          )}
        </Col>
      </Row>
    </Container>
  );

  return (
    <>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <div className="headingGardeningService">
        <div className="headding-all">
          <h2 style={{fontSize:"30px"}}>Gardening <span style={{"color" : "green"}}>Setup Service</span></h2>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="h_para">
          <p>Starting <span style={{"color":"orange","fontSize":"25px","fontWeight":"700"}}>@ 6999/-</span></p>
          <p>ou are just a phone call away from us!!<br/>
            Let our expert convert your space into dream garden.
          </p>
        </div>
        <br/>
        <div className="h_button">
        <button>Book Appointment Now</button>
        </div>
      </div>

      <br/>
      <br/>

      <div className="bannerGs">
        <div className="imgGs">
          <img src={banner3}/>
        </div>
        <div className="contentGs">
          <div className="headingGardeningService">
            <br/>
            <br/>
            <div className="headding">
              <h2 style={{fontSize:"30px"}}>Let’s Create Stunning Balcony Gardens!</h2>
            </div>
            <br/>
            <br/>
            <p>
              Handpicked Plants, Garden Accessories & Expert Assistance in Creating Your Dream Garden.
            </p>
            <div className="headding-all">
              <h2 style={{fontSize:"30px"}}>Starting <span style={{"color" : "green"}}>@ 7999/-</span></h2>
            </div>
            <br/>
            <br/>
            <br/>
            <div className="h_para">
              <p>8 Plants</p>
              <p>8 Inner Pots</p>
              <p>8 Outer Planters</p>
              <p>8 Metal Stands</p>
              <p>1 Artificial Lawn</p>
            </div>
            <br/>
            <div className="h_button">
            <button>Book Appointment Now</button>
            </div>
          </div>
        </div>
      </div>




      {/* body */}


      <section style={{"marginTop":"-40px"}}>
        <div className="headding-all">
          <h2 style={{fontSize:"30px"}}>How It <span style={{"color" : "green"}}>Works</span></h2>
        </div>
        <br/>
        <br/>
        <Container>
          <div className="serviceContainer">
            <div className="serviceBox">
              <div className="service-icon">
                <span style={{"fontSize":"70px","fontWeight":"900"}}>
                  1
                </span>
              </div>
              <h3 className="title">Book a Call</h3>
              <p className="description">
              It will help us to understand the requirements of your dream garden.
              </p>
            </div>
            <div className="serviceBox orange">
              <div className="service-icon">
                <span style={{"fontSize":"70px","fontWeight":"900"}}>
                  2
                </span>
              </div>
              <h3 className="title">Site Visit</h3>
              <p className="description">
              An expert will inspect the site to create the final  for your garden.
              </p>
            </div>
            <div className="serviceBox purple">
              <div className="service-icon">
                <span style={{"fontSize":"70px","fontWeight":"900"}}>
                  3
                </span>
              </div>
              <h3 className="title">Cost Estimate</h3>
              <p className="description">
              After discussion, the expert will provide an estimate and a basic plan.
              </p>
            </div>
            <div className="serviceBox blue">
              <div className="service-icon">
                <span style={{"fontSize":"70px","fontWeight":"900"}}>
                  4
                </span>
              </div>
              <h3 className="title">Garden Set Up</h3>
              <p className="description">
              We will set up a customized garden and deliver the plant happiness.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <div className="productsGs row">
        <div className="row">
          <div className="addmedia col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="row d-flex card">
              <div className="productGsImg col-6">
                <img src={banner3}/>
              </div>
              <div className="col-6 pcontentGs">
                <h2>Heading</h2>
                <h3>Starting <span>@ 4999</span></h3>
                <p>5 Plants</p>
                <p>5 Inner Pots</p>
                <p>5 Outer Pots</p>
                <p>1 Big Metal Stand</p><br/>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section style={{"marginTop":"-40px"}}>
        <div className="headding-all">
          <h2 style={{fontSize:"30px"}}>Our <span style={{"color" : "green"}}>Plantations</span></h2>
        </div>
        <br/>
        <br/>
        <Container>
          <div id="gallery" className="container-fluid">
            <img
              src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://img.haymarketsac.in/autocarpro/1d509711-7e02-4f61-b874-38b3a32c418e.JPG&w=735&h=490&q=80"
              className="img-responsive"
            />
            <img
              src="https://www.nelda.org.in/wp-content/uploads/2021/11/blog_img_2019-08-12_16-36-26_uapMrLeFIncjGhWy.jpg"
              className="img-responsive"
            />
            <img
              src="https://phcet.ac.in/wp-content/uploads/2022/09/Tree-Plantation-Drive-2022-23-5.jpg"
              className="img-responsive"
            />

            <img
              src="https://indiacsr.in/wp-content/uploads/2022/07/CSR-Aravali-Plantation-Drive-by-Onlygood-Increasing-the-green-cover-by-750-samplings.jpg"
              className="img-responsive"
            />
            <img
              src="https://static.tnn.in/photo/msid-91788757,imgsize-491555,width-100,height-200,resizemode-75/91788757.jpg"
              className="img-responsive"
            />
            <img
              src="https://static.tnn.in/photo/msid-91788757,imgsize-491555,width-100,height-200,resizemode-75/91788757.jpg"
              className="img-responsive"
            />
            <img
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/10ECF/production/_107772396_treesmall.jpg"
              className="card img-responsive"
            />
            <img
              src="https://5.imimg.com/data5/ANDROID/Default/2021/12/RY/MO/IL/59289577/product-jpeg-1000x1000.jpg"
              className="img-responsive"
            />
            <img
              src="https://www.excelsagardens.com/wp-content/uploads/2014/12/Theobroma-cacao-Chocolate-Tree-9.jpg"
              className="img-responsive"
            />
            <img
              src="https://www.plantsbycreekside.com/wp-content/uploads/2015/03/greenhouse4-H2-2015.jpg"
              className="img-responsive"
            />
            <img
              src="https://c1.wallpaperflare.com/preview/230/734/482/bananas-banana-trees-banana-plantation-plantation.jpg"
              className="img-responsive"
            />
            <img
              src="https://images.indianexpress.com/2022/05/tree-plantation.jpg?w=414"
              className="img-responsive"
            />
            <img
              src="https://im.indiatimes.in/facebook/2016/Sep/fb_1474885421.jpg?w=1200&h=900&cc=1"
              className="img-responsive"
            />
            <img
              src="https://www.dsndp.com/images/activities/plantation/tree_plantation/Sudhgad_Pali/tree_plantation_sudhagad_pali_adulse_01.JPG"
              className="img-responsive"
            />
            <img
              src="https://media.istockphoto.com/id/483074488/photo/beautiful-and-fresh-green-tea-leaves.jpg?b=1&s=170667a&w=0&k=20&c=dZnpsm9wyVHvy1D5Btn9YQ2m_qXQzonzl9sh2EEN4-c="
              className="img-responsive"
            />
          </div>

          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <div className="counterProfile">
          <div className="counterInnerProfile">
            <h5>43</h5>
            <p>clients</p>
          </div>
          <div className="counterInnerProfile">
            <h5>43</h5>
            <p>clients</p>
          </div>
          <div className="counterInnerProfile">
            <h5>43</h5>
            <p>clients</p>
          </div>
          <div className="counterInnerProfile">
            <h5>43</h5>
            <p>clients</p>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "black" }}>
        <Carousel>
          <Carousel.Item>
            <div className="d-block w-100" style={{ height: "400px" }}>
              <Carousel.Caption className="inner-testi1">
                <div>
                  <img
                    style={{
                      backgroundColor: "black",
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      verticalAlign: "middle",
                    }}
                    src={banner1}
                    alt="First slide"
                  />
                </div>
                <div>
                  <h5>JON DEO</h5>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries,
                  </p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-block w-100" style={{ height: "400px" }}>
              <Carousel.Caption className="inner-testi1">
                <div>
                  <img
                    style={{
                      backgroundColor: "black",
                      height: "100px",
                      width: "100px",
                      borderRadius: "50%",
                      verticalAlign: "middle",
                    }}
                    src={banner1}
                    alt="First slide"
                  />
                </div>
                <div>
                  <h5>JON DEO</h5>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries,
                  </p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      <section>
        <div className="appMainHeading">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-info">
          <ul className="ulContact">
            <li className="liContact">
              <div className="circle">
                <i className="fas fa-home">
                  {" "}
                  <FaBuilding />{" "}
                </i>
              </div>{" "}
              Tokyo, Japan
            </li>
            <li className="liContact">
              <div className="circle">
                <i className="fas fa-phone"></i> <FaPhone />{" "}
              </div>{" "}
              +0 000 0000000
            </li>
            <li className="liContact">
              <div className="circle">
                <i className="fas fa-envelope">
                  {" "}
                  <FaEnvelope />{" "}
                </i>
              </div>{" "}
              name@address.com
            </li>
            <li className="liContact">
              <div className="circle">
                <i className="fas fa-clock">
                  {" "}
                  <FaClock />{" "}
                </i>
              </div>{" "}
              Mon - Fri 8:00 AM to 4:00 PM
            </li>
          </ul>
          <div className="contact-section">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="@Your E-mail" />
            <textarea placeholder="Write your message..."></textarea>
            <button className="buttonContainer">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortFolio;
