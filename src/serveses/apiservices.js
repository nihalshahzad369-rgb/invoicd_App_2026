import axiosInstance from "./axiosinstance"



const apiservce= async(httpmethod,url,reqbody)=>{
    const reuestconfig=({
        method:httpmethod,
        url:url,
        data:reqbody
    })
    try {
        const res= await axiosInstance(reuestconfig)
        return res
        
    } catch (error) {
        console.log(error);
        
        
    }

}
export default apiservce