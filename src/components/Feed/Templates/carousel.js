import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import "./carousel.css"
import yourimage from "./carousel1.jpg"
import myimage from "./carousel2.jpg"
import thirdimage from "./carousel3.jpg"


  /**
   * this is a bootstrap carousel item
   * image links for carousel items may be changed from here
   */

function BootstrapCarousel(props){  
               return (  

                        <div>  

                         <div className='container-fluid' >  

                         <Carousel>  

                         <Carousel.Item style={{'height':"400px"}} >  

                         <img style={{'height':"400px"}}  

                         className="d-block w-100"  

                         src ={yourimage}  />  

                           <Carousel.Caption>  
                           <h1 className="ad"></h1>
                                 </Carousel.Caption>  

                                 </Carousel.Item  >  

                                 <Carousel.Item style={{'height':"400px"}}>  

                                 <img style={{'height':"400px"}}  

                                   className="d-block w-100"  

                                    src={myimage}    />  

                                       <Carousel.Caption>  
                                   <h3 className="conn"></h3>  

                                      </Carousel.Caption>  

                                         </Carousel.Item>  

                                       <Carousel.Item style={{'height':"400px"}}>  

                                       <img style={{'height':"400px"}}  

                                        className="d-block w-100"  

                                         src={thirdimage}   />  

                                        <Carousel.Caption>  
                                         
                                          </Carousel.Caption>  

                                         </Carousel.Item>  

                                        </Carousel>  

                                </div>  

                        </div>  

                )  

        }  


export default BootstrapCarousel  
