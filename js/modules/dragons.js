export const getAllDragons = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/dragons")
    let data = await res.json();
    return data;
}
export const getAllDragonsId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/dragons/${id}`)
    let data = await res.json();
    return data;
}