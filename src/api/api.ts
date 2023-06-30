import axios from "axios"

// https://jsonplaceholder.typicode.com/albums
// https://jsonplaceholder.typicode.com/albums/1
// https://jsonplaceholder.typicode.com/albums/1/photos
// https://jsonplaceholder.typicode.com/photos/1


export const ResqApi = async (url:string)=>{
    try{
        const htpp = axios.create({baseURL:'https://jsonplaceholder.typicode.com/'})
        let response = await htpp.get(url)
        return response.data
    }catch(e){
        return false
    }
    
}