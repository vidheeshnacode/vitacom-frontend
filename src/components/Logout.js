import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Logout extends Component {
    render(){
        return(
        <div className='center'>
            <h1 className="heading">You are logged out.</h1>
            <p>Click <Link to='/login'>here</Link> to log back in.</p>    
        </div>
        )
    }
}
export default Logout