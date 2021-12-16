import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import VitalDataService from '../api/VitalDataService'

class Home extends Component {

    constructor(props) {
        super(props)

    }

    getVitalDataService(){
        VitalDataService.executeVitalDataService()
    }

    render() {

        return (
            <div>
                <h1 className="heading">What would you like to do?</h1>
                <div className="container center">
                <button type="button" class="btn btn-outline-info button-container"><Link to="/vitallist" style={{ textDecoration: 'none', color:'black' }}>View Vital Sets</Link></button>
                <button type="button" class="btn btn-outline-info button-container"><Link to="/vitalset/-1" style={{ textDecoration: 'none', color:'black'}}>Add Vital Set</Link></button>
                </div>
            </div>
        )
    }
}

export default Home