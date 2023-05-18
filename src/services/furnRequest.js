import request from './request';
export function searchFurn(){
    return request({
        url:"/ssm/hi"
    })
}
export function searchAll(){
    return request({
        url:"/ssm/search-all"
    })
}
export function addFurn(params){
    return request({
        url:"/ssm/save",
        data:{
            ...params   
        },
        method:"POST"
    })
}
export function updateFurn(params){
    return request({
        url:"/ssm/update-by-id",
        data:{
            ...params   
        },
        method:"POST"
    })
}
export function deletedFurn(id){
    return request({
        url:`/ssm/deleted-by-id/${id}`,
        method:"POST"
    })
}