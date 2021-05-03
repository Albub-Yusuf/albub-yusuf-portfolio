import React, { useEffect } from 'react';
import './Resume.css';
import Aos from "aos";
import "aos/dist/aos.css";

const Resume = () => {
    useEffect(()=> {
        Aos.init({duration: 2000});
    },[])
    return (
        <div>

            <section id="resume">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col">
                            <h2>Resume</h2>
                        </div>

                    </div>

                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div data-aos="fade-up" className="resume-container" style={{ backgroundColor: '#fff', borderRadius: '10px', minHeight: '500px', border: '1px solid #ced4da', boxShadow: '5px 5px 10px #e2edff' }}>
                                <div className="row">
                                    <div  className="col-md-12 text-center mt-5">
                                        <h1 style={{ color: 'lightslategray' }}><strong>Albub Yusuf</strong></h1>
                                        <p><small>albubyusuf@gmail.com</small> <br />
                                            <a href="https://github.com/Albub-Yusuf" target="_blank">GitHub</a> |  <a href="https://www.linkedin.com/in/albub-yusuf" target="_blank">Linkdein</a> | <a href="https://albub-yusuf-portfolio.web.app/" target="_blank">Website</a>
                                        </p>

                                    </div>

                                    <div  className="col-md-11 col-sm-12 text-start mt-5 justify-content-center align-items-center" style={{ margin: '0 auto' }}>
                                        <div className="shadow-lg p-5">
                                            <h3>Objective</h3>
                                            <p>
                                                To succeed in an environment of growth and excellence in professional &
                                                challenging field
                                                of Web Development industry to become a skilled & dedicated web developer in
                                                near
                                                future.
                                        </p>
                                        </div>

                                    </div>

                                    <div  className="col-md-11 col-sm-12 text-start mt-2 justify-content-center align-items-center" style={{ margin: '0 auto' }}>
                                        <div className="shadow-lg p-5" style={{ margin: '0 auto' }}>
                                            <h3>Skills & Tools</h3>
                                            <div className="col-md-12 col-sm-12" style={{ display: 'flex', alignItems: 'center', justifyContent: 'start', flexWrap: 'wrap' }}>
                                                <div className="skill-card">
                                                    <h5>React</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>Node</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>Laravel</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>php</h5>
                                                </div>


                                                <div className="skill-card">
                                                    <h5>MySQL</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>Mongodb</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>BootStrap</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>CSS</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>HTML 5</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>Firebase</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>Heroku</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>Netlify</h5>
                                                </div>

                                                <div className="skill-card">
                                                    <h5>Git</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div  className="col-md-11 col-sm-12 text-start mt-2 justify-content-center align-items-center" style={{ margin: '0 auto' }}>
                                        <div className="shadow-lg p-5" style={{ margin: '0 auto' }}>
                                            <h3>Projects</h3>
                                            <p><strong>#1 Carfixer (Online based car repair shop) Period: April 2021</strong></p>
                                            <p><strong>Features:</strong></p>
                                            <ul>
                                                <li>Implemented Admin panel for adding or removing service, stripe payment, clients order status & review system etc</li>
                                                <li><span><strong>Technologies: </strong></span> React js, stripe, node, mongodb, firebase & Heroku.</li>
                                                <li><a href="https://carfixer-simple.web.app/home" target="_blank">Live site</a>  |  <a href="https://github.com/Albub-Yusuf/carFixer-client" target="_blank">Client</a>  |  <a href="https://github.com/Albub-Yusuf/carFixer-server" target="_blank">Server</a> </li>
                                            </ul>
                                            <br />
                                            <p><strong>#2 BoiGhor (Book Shop) Period: April 2021 </strong></p>
                                            <p><strong>Features:</strong></p>
                                            <ul>
                                                <li>Implemented Authentication system before order, clients order history, Admin panel for manage books.</li>
                                                <li>Built using React js, node, mongodb, firebase & Heroku.</li>
                                                <li><a href="https://boighor-54ea8.web.app/home" target="_blank">Live site</a> | <a href="https://github.com/Albub-Yusuf/boiGhor-client" target="_blank">Client</a> | <a href="https://github.com/Albub-Yusuf/boiGhor-server" target="_blank">Server</a></li>
                                            </ul>
                                            <br />
                                            <p><strong>#3 School Management System (Admin section) Period: September 2019 </strong></p>
                                            <p><strong>Features:</strong></p>
                                            <ul>
                                                <li>Student Admission enrolment, manage admin, teachers & students, create & manage sessions, subject, notice exam marks etc.</li>
                                                <li>Built using Laravel & MySQL.</li>
                                                <li><a href="https://www.i-schoolman.com/" target="_blank">Live site</a> |  <a href="https://github.com/Albub-Yusuf/PNT-Final-Project-School-Management-System" target="_blank"> Source code</a></li>
                                            </ul>

                                        </div>
                                    </div>



                                    <div  className="col-md-11 col-sm-12 text-start mt-2 justify-content-center align-items-center" style={{ margin: '0 auto' }}>
                                        <div className="shadow-lg p-5" style={{ margin: '0 auto' }}>
                                            <h3>Training</h3>
                                            <ul>
                                                <li>Completed MERN STACK Development training from Programming Hero</li>
                                                <li>Completed Laravel Framework training from PeopleNTech</li>
                                                <li>Completed PHP Web Application Development from BITM</li>
                                            </ul>
                                        </div>
                                    </div>


                                    <div className="col-md-11 col-sm-12 text-start mt-2 justify-content-center align-items-center" style={{ margin: '0 auto' }}>
                                        <div className="shadow-lg p-5" style={{ margin: '0 auto' }}>
                                            <h3>Education</h3>
                                            <h5>BSc. in CSE</h5>
                                            <p>University of Asia Pacific <br /> Graduated November 2016 <br />CGPA – 3.50 <br /></p>
                                        </div>
                                    </div>


                                    <div  className="col-md-11 col-sm-12 text-start mt-2 justify-content-center align-items-center" style={{ margin: '50px auto' }}>
                                        <div className="shadow-lg p-5" style={{ margin: '0 auto' }}>
                                            <h2>Experience</h2>
                                            <h5>Web Executive (February 2020 – January 2021) <br /> <small>HoqueBrothers</small></h5>
                                            <p>Responsible for analyzing, planning features upgrade, bug fixing, and update
                                            content &
                                        maintenance on various websites.</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1"
                        d="M0,288L48,277.3C96,267,192,245,288,250.7C384,256,480,288,576,266.7C672,245,768,171,864,154.7C960,139,1056,181,1152,176C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                    </path>
                </svg>
            </section>









        </div>
    );
};

export default Resume;