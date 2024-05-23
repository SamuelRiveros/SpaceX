export const getAllLand = async (page,limit)=>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                page,
                limit
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/landpads/query", config)
    let data = await res.json();
    console.log(data);
    return data;
  }
  
  export const getAllLandId = async (id)=>{
      let res = await fetch(`https://api.spacexdata.com/v4/landpads/${id}`)
      let data = await res.json();
      return data;
  }