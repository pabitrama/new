import React from 'react';
import Footer from '../Footer';
// import Header from '../Headers';
import  Navbar  from '../NavBar';
// import Offerheading from './Offerheading'


/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
   <> 
   
  <Navbar  />
   <div style={{marginTop: '70px'}}>
   {props.children}
   </div>
   <Footer/>
   </>
   )

 }

export default Layout