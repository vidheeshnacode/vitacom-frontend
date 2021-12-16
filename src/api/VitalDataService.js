import axios from 'axios'

class VitalDataService {
    retrieveAllVitalSets(name){
        return axios.get(`http://localhost:8080/users/${name}/vitalsets`)
    }

    retrieveVitalSet(name, id){
        return axios.get(`http://localhost:8080/users/${name}/vitalsets/${id}`)
    }

    deleteVitalSet(name, id){
        return axios.delete(`http://localhost:8080/users/${name}/vitalsets/${id}`)
    }

    updateVitalSet(name, id, vitalset){
        return axios.put(`http://localhost:8080/users/${name}/vitalsets/${id}`, vitalset)
    }

    addVitalSet(name, vitalset){
        return axios.post(`http://localhost:8080/users/${name}/vitalsets`, vitalset)
    }
}

export default new VitalDataService