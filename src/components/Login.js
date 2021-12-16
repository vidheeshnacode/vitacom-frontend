import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'


class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginClick = (event) => {
        // if(this.state.username==="sarah" && this.state.password==="sarah"){
        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //     this.props.history.push(`/home/${this.state.username}`)
        // }else{
        //     this.setState({
        //         showSuccessMessage: false,
        //         hasLoginFailed: true
        //     })  
        // } 
        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
                this.props.history.push(`/home/${this.state.username}`)
            }
        )
        .catch(
            () => {
                this.setState({
                    showSuccessMessage: false,
                    hasLoginFailed: true
                })  
            }
        )
    }

    render(){
        return(
            <div className="container center">
                <h2 className="heading">Login</h2>
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {this.state.hasLoginFailed && <div>Invalid Login</div>}
                <div className="form-group">
                    <input type="text" name="username" placeholder="username" value={this.state.username} onChange = {this.handleChange}/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="password" value={this.state.password} onChange = {this.handleChange}/>
                </div>
                <button className="btn btn-info button" onClick={this.loginClick}>Submit</button>
            </div>
        )
    }
}
export default Login