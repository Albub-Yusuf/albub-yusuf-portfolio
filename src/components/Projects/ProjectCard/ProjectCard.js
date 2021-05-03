import React from 'react';
import project from '../../../img/carfixer.png';

const ProjectCard = ({project}) => {
   
    return (
        <div className="col-md-4-auto col-sm-auto mb-3">
            <div className="card" style={{width:'18rem',margin:'0 auto'}}>
                <img src={project.image} alt="car fixer" className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text">
                            {project.name}
                        </p>
                        <button className="btn"  style={{backgroundColor:'#e2edff', color:'slateblue',fontWeight:'600'}}> <a href={`${project.live}`} target="_blank">Live site</a></button>
                    </div>
            </div>
        </div>
    );
};

export default ProjectCard;