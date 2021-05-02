import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";


const Blogs = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    },[])
    return (
        <div>

            <section id="blog">
                <div className="container">
                    <div className="row text-center mb-3">
                        <div className="col">
                           <h2>Blogs</h2>
                        </div>
                    </div>
                    <div data-aos="slide-up" className="row d-flex justify-content-center text-center">
                        <div className="col-md-3 col-sm-auto  mb-3">
                            <div className="card" style={{width:'18rem'}}>
                                <img src="http://placehold.it/250x250" alt="blog" className="card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text"><b>Read more...</b></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-auto  mb-3">
                            <div className="card" style={{width:'18rem'}}>
                                <img src="http://placehold.it/250x250" alt="blog" className="card-img-top"/>
                                <div className="card-body">
                                    <p className="card-text"><b>Read more...</b></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-auto  mb-3">
                            <div className="card" style={{width:'18rem'}}>
                                <img src="http://placehold.it/250x250" alt="blog" className="card-img-top"/>
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