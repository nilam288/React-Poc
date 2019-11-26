import React from 'react';
import {createProject,getProject} from"../../action/ProjectActions";
import {connect} from'react-redux';
import PropTypes from 'prop-types';

class UpdateProject extends React.Component
{
    constructor()
    {
    super();
    this.state={
              id:"",
              name:"",
              description:"",
              startDate:"",
              endDate:""
       };
       this.onChange=this.onChange.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
    }
    componentDidMount()
    {
        const { id }=this.props.match.params;
        this.props.getProject(id,this.props.history);
    }
    componentWillReceiveProps(nextProps){
     const{
            id,
            name,
            description,
            startDate,
            endDate
            }=nextProps.project;
    this.setState({
            id,
            name,
            description,
            startDate,
            endDate
         });
    }
 onChange(event)
    {
    this.setState({[event.target.name]:event.target.value});
    }
    onSubmit(event)
    {
      event.preventDefault();
      const updateProject={
        id:this.state.id,
        name:this.state.name,
        description:this.state.description,
        startDate:this.state.startDate,
        endDate:this.state.endDate,
         };
     this.props.createProject(UpdateProject,this.props.history);
    }

    render()
    {
        return(
            <div className="project">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center"> Edit Project form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Project Name" 
                            name="projectName"
                            value={this.state.name}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                            name="projectIdentifier"
                            value={this.state.id}
                            disabled />
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Project Description"
                            name="description"
                            value={this.state.description}
                            onChange={this.onChange}></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                             name="startDate" 
                             value={this.state.startDate}
                             onChange={this.onChange}  />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                            name="endDate" 
                            value={this.state.endDate} 
                            onChange={this.onChange}  />
                        </div>

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        );
    }
    }

  UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject:PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};
 const mapStateToProps = state => ({
    project:state.projects.project
  });
    
    export default connect(mapStateToProps,{getProject ,createProject})(UpdateProject);