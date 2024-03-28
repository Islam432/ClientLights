import axios from "axios";
import Cookies from 'js-cookie';
type FormData =  {
    email:string,
    password:string
}
  type Profiledata =  {
    email:string,
    name:string
}
export function SignUp(data:any){
 

    return axios.post("http://localhost:3200/api/v1/auth/signin",data)
}
export function Register(data:FormData){

    return axios.post("http://localhost:3200/api/v1/register/reg",data)
}

export function getData(data:any){
console.log(data)
    return axios.post("http://localhost:3200/api/v1/test",{data})
}


export function sendFormData(data:any ) {
return axios.post("http://localhost:3200/api/v1/test",data)
}


export async function Getid() {
    return axios.get("http://localhost:3200/api/v1/users/getId", {
      headers: {
        Authorization: Cookies.get('token'),
      },
    })
  }