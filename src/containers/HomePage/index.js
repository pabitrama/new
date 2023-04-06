import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getProducts } from '../../actions';
// import Layout from '../../components/Layout';
// import NavBar from '../../components/NavBar';
// import Headers from '../../components/Headers';
import {Carousel} from 'react-bootstrap'
import banner1 from '../../images/newSliderImage/ns1.webp';
import banner2 from '../../images/newSliderImage/ns4.jpg';
import banner3 from '../../images/newSliderImage/ns5.jpg';



import feature1 from "../../images/leaf1.jpeg";
import feature2 from "../../images/leaf2.webp";
import feature3 from "../../images/leaf3.jpg";
import feature4 from "../../images/leaf4.webp";


import midBanner from '../../images/DSC07615.jpg';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/Footer';

import tshirt from '../../images/leaf1.jpeg';
import sunglass from '../../images/img8.jpg';
import bag from '../../images/img1.jpg';

import tshirt1 from '../../images/leaf2.webp';
import sunglass1 from '../../images/leaf5.webp';
import bag1 from '../../images/leaf4.webp';

import pant from '../../assets/dress image/pant.jpg';
import top from '../../assets/dress image/t shirt.jpg';
// import shirt from '../../assets/dress image/formal blue shirt.jpeg';
// import shoe from '../../assets/dress image/mens-denim-shirt.jpg';
// import item17 from '../../assets/dress image/gray sweater.jpg';
import Slider from '../../components/Slider';

import NewArrival from '../../components/NewArrival/Carousel';
import {Link} from 'react-router-dom';
import NewArrivalCarousel from './Carousel';
import ArrivalCarousel from './New Carousel';
import Pagi from '../pagination/pagination';
import CategoryS from '../../components/CategorySection';
/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  const category = useSelector(state => state.category);
  const product = useSelector(state => state.product);   
 
  console.log(category, ">>cate");
  const dispatch = useDispatch();
  console.log(product, ">>product");

  useEffect(() => {
    dispatch(getAllCategory())
  }, []);  

  const renderCategories = (categories) =>{
          
    let myCategories = [];
    for(let category of categories){
        myCategories.push(
            <li key ={category.name}>
             {
               category.parentId ? <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name} <img style={{width: '80px', height: '80px'}} src={category.categoryImage} alt="alt"/></a>  : <span>{category.name} </span>
             }
                {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>): null}
            </li>
        )
    } 

    return myCategories;

}

  return(
    // <Layout>
 

   
    <>
    {/* <NavBar /> */}


<Carousel variant="dark" style={{marginTop:"260px"}}>
  <Carousel.Item>
    <img
    style={{position:"center",
    display:"cover"
  }}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className="headding-all">
<h2>Top <span style={{"color" : "green"}}>Category</span></h2>
</div>
<br/>
<br/>
<CategoryS />







<div className="headding-all">
<h2>Top <span style={{"color" : "green"}}>Catelogs</span></h2>
</div>
{/* <div className="homeCategoryMain">

  {
    category.categories.map(cat => 
      
   
        <div className="homeCategory">
         <div>
                <Link to={`/${cat.name}`}>
                  <img src={cat.categoryImage} alt={cat.categoryImage} />
                </Link>
                <h5>{cat.name}</h5>
              
         </div>
      </div>
  
      
      )
  }
</div> */}

<section class="about_area">
<div class="container">
    <div class="row">
        <div class="col-md-6"><br/>
        <h4 style={{position:"absolute",marginTop:"100px",padding:"0 30px",color:"#fff",fontWeight:"700",filter:"drop-shadow(0 0 5px #000"}}>Assign arrow function to a variable before exporting as module default</h4>
        <h4 style={{position:"absolute",marginTop:"200px",padding:"0 30px",color:"#fff",fontWeight:"700",filter:"drop-shadow(0 0 5px #000"}}>Assign arrow function to a variable before exporting as module default</h4>
        <button className='btn-primary' style={{position:"absolute",marginTop:"260px",marginLeft:"50px",padding:"5px"}}>Click Hrere For More Details!</button>
        <a href='#'>
        <img src={tshirt} alt="" style = {{height:"700px" ,width: "100%" , margin:"10px" }} />
        </a>
        </div>
        <div class="col-md-6"><br/>
        <h4 style={{position:"absolute",marginTop:"100px",padding:"0 30px",color:"#fff",fontWeight:"700",filter:"drop-shadow(0 0 5px #000"}}>Assign arrow function to a variable before exporting as module default</h4>
        <h4 style={{position:"absolute",marginTop:"200px",padding:"0 30px",color:"#fff",fontWeight:"700",filter:"drop-shadow(0 0 5px #000"}}>Assign arrow function to a variable before exporting as module default</h4>
        <button className='btn-primary' style={{position:"absolute",marginTop:"260px",marginLeft:"50px",padding:"5px"}}>Click Hrere For More Details!</button>

        <a href='#'>
        <img src={bag}  style = {{height: "350px" ,  width: "100%"}} />
        </a>
        <h4 style={{position:"absolute",marginTop:"100px",padding:"0 30px",color:"#fff",fontWeight:"700",filter:"drop-shadow(0 0 5px #000"}}>Assign arrow function to a variable before exporting as module default</h4>
        <h4 style={{position:"absolute",marginTop:"200px",padding:"0 30px",color:"#fff",fontWeight:"700",filter:"drop-shadow(0 0 5px #000"}}>Assign arrow function to a variable before exporting as module default</h4>
        <button className='btn-primary' style={{position:"absolute",marginTop:"260px",marginLeft:"50px",padding:"5px"}}>Click Hrere For More Details!</button>

        <a href='#'>
        <img src={sunglass} href="#" style = {{height: "350px" ,  width: "100%" , paddingTop:"10px"}}/></a>
        </div>
    </div>
</div>
</section>


<div className="headding-all">
<h2>New <span style={{"color" : "green"}}>Arrivals</span></h2>
{/* <Pagi/> */}
</div>
<br/><br /> 
      <Slider />
      <br/>
    
      <section>
      <div className="mid-banner">
          <div className="midText">
             <h3>50% OFF</h3>
             <p className="midText-p">All Men, Women, Kids Collection</p>
             <button>Shop Now</button>
          </div>
          {/* <div className="midImg">
            <img src={midBanner} alt="" />
           </div> */}
        </div>
      </section>
      <div className="headding-all">
<h2>Treanding <span style={{"color" : "green"}}>Products</span></h2>

</div>
      <section>
        <NewArrivalCarousel />
        
      </section>
      <section>
      <div className="mid-bannerr">
          <div className="midText">
             <h3 >50% OFF</h3>
             <p className="midText-p" style={{"color" : "#fff" ,"backgroundColor" : "blue" , "font-size" : "20px" , "font-weight" : "bold"}}>All Men, Women, Kids Collection</p>
            <br/><br/>
             <button style={{"backgroundColor" : "green"}}>Shop Now</button>
          </div>
         {/* <div className="midImg">
            <img src={midBanner} alt="" />
           </div> */}
       </div>
      </section>

      <div className="headding-all">
<h2>New <span style={{"color" : "green"}}>Arrivals</span></h2>
<br/><br/>
<NewArrival />
</div>
<br/><br/>

<section class="about_area">
                            <div class="container">
                                <div class="row">
                                <div class="col-md-6"><br/>
                                <a href='#'>
                                    <img src={bag1}  style = {{height: "350px" ,  width: "100%"}} /></a>
                                    <a href='#'>
                                    <img src={sunglass1} href="#" style = {{height: "350px" ,  width: "100%" , paddingTop:"10px"}}/></a>
                                    </div>
                                    <div class="col-md-6"><br/>
                                    <a href='#'>
                                    <img src={tshirt1} alt="" style = {{height:"700px" ,width: "100%" , margin:"10px" }} />
                                    </a>
                                    </div>
                                  
                                </div>
                            </div>
                        </section>

     {/* <Footer /> */}
     <div className="headding-all">
<h2>New <span style={{"color" : "green"}}>Arrivals</span></h2>
<br/><br/>
<ArrivalCarousel />
</div>
<br/><br/>
<div className="headding-all">
<h2>New <span style={{"color" : "green"}}>Arrivals</span></h2>
<br/><br/>
<NewArrival />
</div>
<br/><br/>

<section class="service_section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <center>
            <div class="img-box" style={{"width":"80px"}}>
              <img src={feature1} alt=""/>
            </div>
            </center>
            <div class="detail-box">
              <h5>
                Fast Delivery
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <center>
              <div class="img-box" style={{"width":"80px"}}>
              <img src={feature2} alt="" />
            </div>
            </center>
            <div class="detail-box">
              <h5>
                Free Shiping
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <center>
            <div class="img-box" style={{"width":"80px", "alignItems":"center"}}>
              <img src={feature3} alt="" />
            </div>
            </center>
            <div class="detail-box">
              <h5>
                Best Quality
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
          <center>
             <div class="img-box" style={{"width":"80px", "alignItems":"center"}}>
              <img src={feature4} alt="" />
            </div>
          </center>
            <div class="detail-box">
              <h5>
                24x7 Customer support
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </>
   
   )
 
 }

export default HomePage