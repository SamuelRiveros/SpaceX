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

export const getDragonMassTotal = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "dry_mass_kg": 1
                },
                "sort":{
                    "dry_mass_kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let {docs:[{dry_mass_kg} = maxMassDragon]} = await res.json();
    return dry_mass_kg;
}

export const getDragonHeightTotal = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "height_w_trunk": 1
                },
                "sort": {
                    "height_w_trunk.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let {docs:[{height_w_trunk} = maxHeightDragon]} = await res.json();
    return height_w_trunk;
}

export const getDragonDiameterTotal = async() =>{
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "diameter": 1
                },
                "sort": {
                    "diameter.meters": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let {docs:[{diameter} = maxDiameterDragon]} = await res.json();
    return diameter;
}

export const getDragonSecondStageCompositeFairingDiameterTotal = async() => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "heat_shield.diameter": 1
                },
                "sort": {
                    "heat_shield.diameter": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let {docs} = await res.json();
    let maxDiameterCompositeFairingDragon = docs[0];
    
    if (maxDiameterCompositeFairingDragon && maxDiameterCompositeFairingDragon.heat_shield && maxDiameterCompositeFairingDragon.heat_shield.diameter) {
        return maxDiameterCompositeFairingDragon.heat_shield.diameter;
    } else {
        return null; // o un valor predeterminado si es necesario
    }
}

export const getAllDragonEngineTotal = async() => {
    let config = {
        headers:{
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "launch_payload_mass": 1
                },
                "sort": {
                    "launch_payload_mass.kg": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let {docs:[{launch_payload_mass} = maxPayloadMassDragon]} = await res.json();
    return launch_payload_mass.kg;
}


export const getAllDragonData = async () => {
    let config = {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "query": {
                "options": {
                    "select": {
                        "name": 1,
                        "first_flight": 1,
                        "active": 1
                    },
                    "sort": {
                        "first_flight": "asc"
                    }
                }
            }
        })
    };
    let res = await fetch("https://api.spacexdata.com/v4/dragons/query", config);
    let { docs: dragons } = await res.json();
    let totalData = {
        totalDragons: dragons.length,
        upcomingDragons: dragons.filter(dragon => new Date(dragon.first_flight) > new Date()).length,
        activeDragons: dragons.filter(dragon => dragon.active === true).length
    };
    return totalData;
}