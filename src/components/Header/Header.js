import React from 'react';
import Typewriter from 'typewriter-effect';
import profile from '../../img/profile.png';
import { faGoogle,faLinkedin,faGithub, } from '@fortawesome/free-brands-svg-icons';
import { faLink , faDownload} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Header.css';

const Header = () => {
    return (
        <div id="home" className="jumbotron text-center pt-5">
            <img src={profile} alt="Albub Yusuf" width="200" className="rounded-circle img-thumbnail" />
            <h1 className="display-4">Albub Yusuf</h1>
            <h3 className="lead">
                <Typewriter options={{
                    strings: ['Jr. Web Developer'],
                    autoStart: true,
                    loop: true,
                }} /></h3>
            <p>Hello I'm Albub a passionate web developer curious to learn new things. <br></br> Have experience in building web based applications using MERN STACK Development also comfortable with php & Laravel based backend development.</p>
                
            <div className="mt-3 text-center" style={{width:'70%', display:'flex', alignItems:'space-between', justifyContent:'center', flexWrap:'wrap', margin:'0 auto'}}>
                    <div style={{width:'50px', minHeight:'50px', marginLeft:'10px', display:'flex', alignItems:'center',justifyContent:'center',color:'cornflowerblue',fontSize:'38px'}}> <a href="https://github.com/Albub-Yusuf" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></div>
                    <div style={{width:'50px', minHeight:'50px',  marginLeft:'10px', display:'flex', alignItems:'center',justifyContent:'center',color:'cornflowerblue',fontSize:'38px'}}><a href="https://www.linkedin.com/in/albub-yusuf" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></div>
                    <div style={{width:'50px', minHeight:'50px',  marginLeft:'10px', display:'flex', alignItems:'center',justifyContent:'center',color:'cornflowerblue',fontSize:'38px'}}><a href="https://albub-yusuf-portfolio.web.app/" target="_blank"><FontAwesomeIcon icon={faLink} /></a></div>


                </div>

            <a style={{backgroundColor:'cornflowerBlue', color:'#fff',fontWeight:'600'}} className="mt-3 btn btn-lg"
                href="https://drive.google.com/uc?export=download&amp;id=1stRKskp1_9HFg0syUMZp5YiwLiUYhdbf" download
                role="button"><FontAwesomeIcon icon={faDownload} /> &nbsp; Download Resume</a>
                
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#fff" fill-opacity="1"
                    d="M0,96L30,106.7C60,117,120,139,180,165.3C240,192,300,224,360,240C420,256,480,256,540,245.3C600,235,660,213,720,186.7C780,160,840,128,900,133.3C960,139,1020,181,1080,208C1140,235,1200,245,1260,218.7C1320,192,1380,128,1410,96L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
                </path>
            </svg>
        </div>
    );
};

export default Header;