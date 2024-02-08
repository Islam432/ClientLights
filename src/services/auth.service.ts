import axios from "axios";

export function SignUp(data:any){

    return axios.post("http://localhost:3200/api/v1/auth/signin",data)
}

export function getData(data:any){
console.log(data)
    return axios.post("http://localhost:3200/api/v1/test",{data})
}