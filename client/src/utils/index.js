//  in this folder we wil create some utils functions that we will use in our app
import axios from 'axios';
const API_URL = "http://localhost:8800/api-v1";

export const API= axios.create({
    baseURL: API_URL,
    responseType: "json",
});

export const apiRequest= async({url,token,data,method})=>
{
    try {

        const result= await API(url,{
            method: method || "GET",
            data: data,
            headers:{
                "Content-Type": "application/json",
                Authorization:token ? `Bearer ${token}`: "",

            },
        });
        return result?.data;
        
    } catch (error) {
        const err= error.response.data;
        console.log(err);
        return {status:err.success,message:err.message }

        
    }

};


export const handleFileUpload= async(uploadFile)=>{

    const formDate= new FormData();
    formDate.append("file",uploadFile);
    formDate.append("upload_preset","jobfinder");
    try {
        
        const response= await axios.post("https://api.cloudinary.com/v1_1/dboczbrja/image/upload",formDate);
        // console.log(response);
    return response.data.secure_url;

    } catch (error) 
    {
        console.log(error);
        
    }


};


export const updateURL= ({
    pageNum,
    query,
    cmpLoc,
    sort,
    navigate,
    location,
    jType,
    exp,


})=>{

        const params= new URLSearchParams();
        //  set them using condition if
        if(pageNum && pageNum>1){
            params.set("page",pageNum);
        }
        if(query){
            params.set("search",query);
        }
        if(cmpLoc){
            params.set("location",cmpLoc);
        }
        if(sort){
            params.set("sort",sort);
        }
        if(jType){
            params.set("type",jType);
        }
        if(exp){
            params.set("experience",exp);
        }

        const newURL= `${location.pathname}?${params.toString()}`;
        navigate((newURL, { replace: true }));

        return newURL;



        
};
