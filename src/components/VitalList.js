import React, {Component} from 'react'
import moment from 'moment'
import VitalDataService from '../api/VitalDataService'
import AuthenticationService from './AuthenticationService'

class VitalList extends Component {
    constructor(props){
        super(props)
        this.state = {
           vitalsets: [],
           message: null
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentDidMount = () => {
        this.refreshVitalSets()
    }

    deleteVitalSet = (id) => {
        let username = AuthenticationService.getLoggedInUserName()
        VitalDataService.deleteVitalSet(username, id)   
        .then (
            response => {
                this.setState({
                    message: `Deletion successful`
                })
                this.refreshVitalSets()
            }
        )     
    }

    updateVitalSet = (id) => {
        this.props.history.push(`/vitalset/${id}`)
    }

    addVitalSet = () => {
        this.props.history.push(`/vitalset/-1`)
    }

    refreshVitalSets = () => {
        let username = AuthenticationService.getLoggedInUserName()
        VitalDataService.retrieveAllVitalSets(username)
        .then(
            response => {
                console.log(response);

                this.setState({                    
                    vitalsets: response.data
                })
            }
        )
    }

    render(){
        return(
            <div>
                <h1 className="heading">Vital Sets</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Systolic BP</th>
                                <th>Diastolic BP</th>
                                <th>Pulse</th>
                                <th>SpO2</th>
                                <th>Temperature</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Update</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.vitalsets.map(
                                    vitalset =>
                                        <tr key={vitalset.id}>
                                            <td>{vitalset.patientName}</td>
                                            <td>{vitalset.systolic}</td>
                                            <td>{vitalset.diastolic}</td>
                                            <td>{vitalset.pulse}</td>
                                            <td>{vitalset.spo2}</td>
                                            <td>{vitalset.temperature}</td>
                                            <td>{moment(vitalset.date).format('YYYY-MM-DD')}</td>
                                            <td>{vitalset.time}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateVitalSet(vitalset.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteVitalSet(vitalset.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-success" onClick={this.addVitalSet}>Add Vital Set</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default VitalList