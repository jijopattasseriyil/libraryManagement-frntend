import axios from "axios"

export const commonAPI = async(httpMethod,url,reqBody) =>{
    const reqConfig = {
        method : httpMethod,
        url : url,
        data : reqBody,
        headers : {"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then((result)=>{
        console.log(result);
        return result
    }).catch((err)=>{
        console.log(err);
        return err
    })
}