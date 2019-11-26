import React from 'react';
import { Link } from 'react-router-dom';
import Addproject from './Addproject';

const Createprojectbutton=()=>
{
    return(
        <React.Fragment>
            <Link to="/Addproject" class="btn btn-lg btn-info">
            Create Project
            </Link>
         </React.Fragment>
    );
}

export default Createprojectbutton;
