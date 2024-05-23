export const getAllCapsules = async (page,limit)=>{
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
  let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config)
  let data = await res.json();
  console.log(data);
  return data;
}

export const getAllCapsulesId = async (id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/capsules/${id}`)
    let data = await res.json();
    return data;
}

export const getCapsuleStats = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "reuse_count": 1,
                    "water_landings": 1,
                    "land_landings": 1
                },
                "limit": 1
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs: [{ reuse_count, water_landings, land_landings }] = [] } = await res.json();

    return { reuse_count, water_landings, land_landings };
};

export const getCapsuleData = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "last_update": 1,
                    "launches": 1,
                    "status": 1,
                    "type": 1
                },
                "limit": 1
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs: [{ last_update, launches, status, type }] = [] } = await res.json();

    return { last_update, launches, status, type };
};

export const getCapsuleLaunchAndSerial = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "launches": 1,
                    "serial": 1
                },
                "limit": 1
            }
        })
    };

    let res = await fetch("https://api.spacexdata.com/v4/capsules/query", config);
    let { docs: [{ launches, serial }] = [] } = await res.json();

    return { launches, serial };
};
