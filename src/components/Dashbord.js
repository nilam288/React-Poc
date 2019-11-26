import React, { Component } from 'react';
import ProjectItem from './projects/ProjectItem';
import Createprojectbutton from './projects/Createprojectbutton';
import {connect} from'react-redux';
import {getProjects} from '../action/ProjectActions';
import PropTypes from 'prop-types';

class Dashbord extends Component {

  componentDidMount(){
    this.props.getProjects();
  }
  
  render() {
    const {projects} =this.props.projects;
    return (
     <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Projects</h1>
                    <br />
                    <br />
                    <Createprojectbutton/>                  
                    <hr />
                    {projects.map(project =>(
                        <ProjectItem key={project.id} project={project}/>
                    ))}        
         </div>
        </div>
       </div>
     </div>
    );
  }
}

Dashbord.propTypes = {
  projects: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  projects: state.projects
});

export default connect (mapStateToProps ,{ getProjects })(Dashbord);

