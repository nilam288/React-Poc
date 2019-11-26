import React, { Component } from 'react';
import{connect} from'react-redux';
import {createProject} from '../../action/ProjectActions';
import PropTypes from 'prop-types';
//import classnames from 'classnames';

class Addproject extends Component {

 constructor(props){

            super(props);
            this.state={
              id:"",
              name:"",
              description:"",
              startDate:"",
              endDate:"",
              errors:{}
            };
            this.onChange=this.onChange.bind(this);
            this.onSubmit=this.onSubmit.bind(this);
        }
        componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
    this.setState({ errors: nextProps.errors });
    }
        }
onChange(event)
{
  this.setState({[event.target.name]:event.target.value});
  console.log("value Enter");
}

onSubmit(event){
    event.preventDefault();
    console.log("on submit trigger");
    const newProject={
              id:this.state.id,
              name:this.state.name,
              description:this.state.description,
              startDate:this.state.startDate,
              endDate:this.state.endDate
    };
     console.log(newProject);
     this.props.createProject(newProject,this.props.history);
}

  render() {
    return (       
        <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create / Edit Project form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" class="form-control form-control-lg " placeholder="Project Name" name="name" value={this.state.name} onChange={this.onChange} />
                            <p>{this.state.errors.name}</p>
                        </div>
                        <div className="form-group">
                            <input type="text" class="form-control form-control-lg" placeholder="Unique Project ID" name="id" value={this.state.id} onChange={this.onChange} 
                                 />
                                <p>{this.state.errors.id}</p>
                        </div>
                        <div className="form-group">
                            <textarea class="form-control form-control-lg" placeholder="Project Description" name="description" value={this.state.description} onChange={this.onChange} ></textarea>
                            <p>{this.state.errors.description}</p>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" class="form-control form-control-lg" name="start_date" name="startDate" value={this.state.startDate} onChange={this.onChange}  />
                            <p>{this.state.errors.startDate}</p>
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" class="form-control form-control-lg" name="end_date" name="endDate" value={this.state.endDate} onChange={this.onChange} />
                            <p>{this.state.errors.endDate}</p>
                        </div>

                        <input type="submit" class="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>

    );
  }
}

Addproject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect (mapStateToProps ,{ createProject }) (Addproject);