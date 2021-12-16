import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService'
import {withRouter} from 'react-router'
import '../App.css'


class Header extends Component {
    
    render(){

        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()

        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to='/' className="navbar-brand">VitaCom</Link>
                    <ul className="navbar-nav">
                    {isUserLoggedIn && <li className="nav-link"><Link to="/home" className="header-link-color">Home</Link></li>}
                    {isUserLoggedIn && <li className="nav-link"><Link to="/vitalset/-1" className="header-link-color">Add Vitals</Link></li>}
                    {isUserLoggedIn && <li className="nav-link"><Link to="/vitallist" className="header-link-color">View Vitals</Link></li>}
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className="nav-link"><Link to='/login' className="header-link-color">Login</Link></li>}
                        {isUserLoggedIn && <li className="nav-link"><Link to='/logout' onClick={AuthenticationService.logout} className="header-link-color link-hover">Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default withRouter(Header)