import request from './request';
export function searchFurn(){
    return request({
        url:"/ssm/hi"
    })
}
export function searchFurn2(){
    return request({
        url:"/ssm/search-furn"
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