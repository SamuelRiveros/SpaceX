import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";

import { 
    nameRockets,
    nameCrews,

    nameCores,
} from "./title.js";

import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,

} from "./inform.js";

import {
    tableRocketColum1,
    tableRocketColum2,

    tableCoresLaunches,
    tableCoreLaunchesid,
} from "./tables.js"

import { 
    imageRockets,
    imageCrews
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,


    progressCoresStats,
} from "../modulesComponents/progressBar.js";


import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    informationFirstFlightCrews,
    informationWebCrew,

    informationCoreLastUpdate,
    informationCoresStatus,

    /*
    informationCapsuleType,
    informationCapsuleStatus,
    informationCapsuleLastUpdate,
    informationDragons,
    informationLaunchCostDragons,
    informationFirstFlightDragons,
    informationWebDragons,
    informationFirstFlightland,
    informationFirstFlightlandstatus,
    informationFirstFlightlandstatustype,
    informationFirstFlightlandstatustypelocalityre,
    informationFirstFlightlandstatustypelocality,
    informationFirstFlightlandstatustypelocalityredet,
    informationFirstFlightlandstatustypelocalityredetship,
    informationFirstFlightlandstatustypelocalityredetshipt,
    informationFirstFlightlandstatusypelocalityredetshipt,
    informationFirtFlightlandstatustypelocalityre
    */
} from "./information.js";


import {
    getAllCrews,
    getAllCrewsId
} from "../modules/crew.js";

import{
    getAllCores,
    getAllCoresId
}   from "../modules/cores.js"




























export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}


const getRocketsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    
    
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";

    //esconder carruseles//
    let carruseles = document.querySelectorAll(".carousel__item");
    carruseles.forEach(element => {
        element.classList.remove('hidden');
        document.querySelector('.section__information__3 div:first-child').style.display = 'flex';
        document.querySelector('.section__information__2 div:first-child').style.display = 'flex';
    });


    let Rocket = await getAllRocketsId(e.target.id);
    console.log(Rocket);

    await nameRockets(Rocket.name)
    await informationRockets(Rocket.country, Rocket.description)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)

    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await imageRockets(Rocket.flickr_images);

    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)

    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    let [a1,a2,a3,a4] = div.children
    a1.click();
    return div;
}




const getCrewsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrews(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";

    let carruseles = document.querySelectorAll(".carousel__item");
        carruseles.forEach(element => {
        element.classList.add('hidden');
        document.querySelector('.section__information__3 div:first-child').style.display = 'none';
        document.querySelector('.section__information__2 div:first-child').style.display = 'none';
    });
    
    
    let Crew = await getAllCrewsId(e.target.id);
    console.log(Crew);
    await nameCrews(Crew.name)
    await imageCrews([Crew])
    await informationFirstFlightCrews(Crew)
    await informationWebCrew(Crew)
}

export const paginationCrews = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrews(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCrewsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


// Cores //

export const paginationCores = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCoresId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCoresId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCoresId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a2.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}

const getCoresId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCores(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    
    

    let Cores = await getAllCoresId(e.target.id);
    console.log(Cores);
    await nameCores(Cores.serial)
    await progressCoresStats(Cores)
    await informationCoresStatus(Cores)
    await informationCoreLastUpdate(Cores)
    await tableCoresLaunches(Cores)
    await tableCoreLaunchesid(Cores)
}

