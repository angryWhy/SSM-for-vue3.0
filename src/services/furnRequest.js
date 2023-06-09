import request from './request';
//springboot接口
export function furnSave(params){
    return request({
        url:"/save",
        data:{
            ...params   
        },
        method:"POST"
    })
}
export function furnList(){
    return request({
        url:"/list",
        method:"GET"
    })
}

export function updatefurn(params){
    return request({
        url:"/update",
        data:{
            ...params   
        },
       method:"PUT"
    })
}
export function delFurn(id){
    return request({
        url:`/deleted/${id}`,
        method:"DELETE"
    })
}
//带分页，带条件
export function listByPage(params){
    return request({
        url:"/listByCondition",
        params:params
    })
}


//SSM接口
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
export function searchByPage(params){
    return request({
        url:"/ssm/furn-by-page",
        params:params
    })
}

export function searchByPageCondition(params){
    return request({
        url:"/ssm/furn-by-condition",
        params:params
    })
}