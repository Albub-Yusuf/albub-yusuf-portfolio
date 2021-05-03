import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import blogImage from '../../img/blogPlaceholder.png';


const Blogs = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    },[])
    return (
        <div>

            <section data-aos="fade" id="blog">
                <div className="container">
                    <div className="row text-center mb-3">
                        <div className="col">
                           <h2>Blogs</h2>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center text-center">
                        <div className="col-md-3-auto col-sm-auto  mb-3 text-center">
                            <div className="card" style={{width:'18rem', margin:'0 auto'}}>
                                <img src={blogImage} alt="blog" className="card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text"><b>Read more...</b></p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div> 

            </section>
        </div>
    );
};

export default Blogs;