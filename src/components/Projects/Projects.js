import React, { useEffect } from 'react';
import './Projects.css';
import project1 from '../../img/carfixer.png';
import project2 from '../../img/boighor.png';
import project3 from '../../img/ischoolm.PNG';
import project4 from '../../img/easytravel.PNG';
import ProjectCard from './ProjectCard/ProjectCard';
import Aos from "aos";
import "aos/dist/aos.css";


const Projects = () => {

    useEffect(()=> {
        Aos.init({duration: 2000});
    },[])

    const projects = [
        {
            id:1,
            name:'Car fixer',
            image: project1,
            live: 'https://carfixer-simple.web.app/',
        
        },
        {
            id:2,
            name:'BoiGhor',
            image:project2,
            live: 'https://boighor-54ea8.web.app/',
        },
        {
            id:3,
            name:'School Management System',
            image:project3,
            live: 'https://www.i-schoolman.com/'
        },
        {
            id:4,
            name:'Easy Travel',
            image:project4,
            live: 'https://easy-rider008.web.app/',
        },
        {
            id:5,
            name:'Dummy',
            image:project4,
            live: 'https://easy-rider008.web.app/',
        },
    ]

    return (
        <div>
            <section id="projects">
                <div className="container">
                    <div className="row text-center mb-5">
                        <div className="col">
                            <h2>Featured projects</h2>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div data-aos="fade" className="row d-flex justify-content-center text-center" style={{overflow:'hidden'}}>
                        {
                            projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                        }
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#e2edff" fill-opacity="1"
                        d="M0,64L26.7,90.7C53.3,117,107,171,160,186.7C213.3,203,267,181,320,165.3C373.3,149,427,139,480,160C533.3,181,587,235,640,256C693.3,277,747,267,800,234.7C853.3,203,907,149,960,144C1013.3,139,1067,181,1120,208C1173.3,235,1227,245,1280,245.3C1333.3,245,1387,235,1413,229.3L1440,224L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z">
                    </path>
                </svg>
            </section>

        </div>
    );
};

export default Projects;