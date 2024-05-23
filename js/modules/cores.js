export const getAllCores = async (page,limit)=>{
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
    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config)
    let data = await res.json();
    console.log(data);
    return data;
  }

  export const getAllCoresId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/cores/${id}`)
    let data = await res.json();
    return data;
}


export const getCoresStats = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "reuse_count": 1,
                    "rtls_attempts": 1,
                    "rtls_landings": 1,
                    "asds_attempts": 1,
                    "asds_landings": 1
                },
                "limit": 1
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/cores/query", config);
    let { docs: [{ reuse_count, rtls_attempts, rtls_landings, asds_attempts, asds_landings }] = [] } = await res.json();

    return { reuse_count, rtls_attempts, rtls_landings, asds_attempts, asds_landings };
};
