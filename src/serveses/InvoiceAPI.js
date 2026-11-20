import apiservce from "./apiservices"

 
export const getinvoiceApi=()=>{
    return apiservce("GET",'/inoives',{})
}

export const addInoviceApi=(reqbody)=>{
    return apiservce("POST",'/inoives',reqbody)
}
 export const updateInvoiceApi=(id,reqbody)=>{
    return apiservce("PUT",`/inoives/${id}`,reqbody)
 }
 export const dltInvoiceApi=(id)=>{
    return apiservce("DELETE",`/inoives/${id}`,{})
 }