import axios from 'axios';

const api = axios.create({
    baseURL:"http://10.89.240.76:5000/api/v1/",
    headers:{
        'accept':"application/json"
    }
})

const sheets = {
    postLogin:(user)=>api.post('user/login',user),
    postCadas:(user)=>api.post('user',user),
    postCadEve:(event)=>api.post('evento',event),
    postCadIngr:(ingresso)=>api.post('ingresso',ingresso),
    postCadOrg:(org)=>api.post('organizador',org),
}

export default sheets