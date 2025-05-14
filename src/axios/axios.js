import axios from 'axios';
import * as SecureStore from "expo-secure-store";

const api = axios.create({
    baseURL:"http://10.89.240.75:5000/api/v1/",
    headers:{
        'accept':"application/json"
    }
})

    api.interceptors.request.use(async (config)=>{
        const token = await SecureStore.getItemAsync("token");
        if(token){
            config.headers.authorization = token;
        }
        return config;
    },(error) => Promise.reject(error)
);

const sheets = {
    getEventos:()=>api.get("evento"),
    getIngressosporEvento:(idEvento)=>api.get(`ingresso/${idEvento}`),
    postLogin:(user)=>api.post('user/login',user),
    postCadas:(user)=>api.post('user',user),
    postCadEve:(event)=>api.post('evento',event),
    postCadIngr:(ingresso)=>api.post('ingresso',ingresso),
    postCadOrg:(org)=>api.post('organizador',org),
    createIngresso: (dados) => api.post("ingresso", dados),
}

export default sheets