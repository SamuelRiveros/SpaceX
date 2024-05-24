import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";

import { 
    nameRockets,
    nameCrews,
    nameCores,
    nameDragons,
    nameCapsules,
    nameLand,

} from "./title.js";

import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    informDragonLaunchPayloadMass,
    informDragonData,

} from "./inform.js";

import {
    tableRocketColum1,
    tableRocketColum2,
    tableCoresLaunches,
    tableCoreLaunchesid,
    tableDragonColumn1,
    tableCapsulesLaunches,
    tableCapsulesserial,
    tableCoresLaunchesland,
    tableLandColum1,

    tableLaunchesColum1,

} from "./tables.js"

import { 
    imageRockets,
    imageCrews,
    imageDragons,
    imageLandpads,

} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,


    progressCoresStats,

    progressDragonWeight,
    progressHeightDragon,
    progressDiameterDragon,
    progressSecondStageDiameterDragon,

    progressCapsuleStats,
} from "../modulesComponents/progressBar.js";


import { 
    informationRockets,
    informationFirstFlightRocket,
    informationWebRocket,
    informationFirstFlightCrews,
    informationWebCrew,
    informationCoreLastUpdate,
    informationCoresStatus,
    informationDragons,
    informationFirstFlightDragons,
    informationWebDragons,
    informationCapsuleStatus,
    informationCapsuleType,
    informationCapsuleLastUpdate,
    informationFirstFlightland,
    informationFirstFlightlandstatus,
    informationFirstFlightlandstatustype,
    informationFirstFlightlandstatustypelocalityre,
    informationFirstFlightlandstatustypelocality,
    informationFirstFlightlandstatustypelocalityredet,
    informationNameLand,
    informationId,
    informationStatusLand,
    informationWikiLand,
    informationLaunchCrew,
    informationDetails,
    informationArticle,
    informationDate,
    informationDate2,
    informationDetailsLaunches,
    informationArticleLaunc,
    imformationSuccessLaunch,
    imformationIdLaunch,
    informationParchLaunch,
    imformationRocketLaunch,
    imformationLaunchesImg

} from "./information.js";


import {
    getAllCrews,
    getAllCrewsId
} from "../modules/crew.js";

import{
    getAllCores,
    getAllCoresId
}   from "../modules/cores.js"

import{
    getAllDragons,
    getAllDragonsId
}   from "../modules/dragons.js"

import { 
    getAllCapsules,
    getAllCapsulesId
} from "../modules/capsules.js";

import{
    getAllLandId,
    getAllLand
}   from "../modules/Landpads.js" 

import {
    getAllLaunchpadsId,
    getAllLaunchpads
} from "../modules/Launchpads.js";

import {
    getAllHistory,
    getAllHistoryId
} from "../modules/history.js";

import { 
    getAllLaunches,
    getAllLaunchesId
} from "../modules/launches.js";



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

    //mostrar carruseles//

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

    // Esconder //

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

/////////////////////////////// PAGINATION DRAGONS ////////////////////////////////////////////

const getDragonsId = async(e)=>{
    e.preventDefault();
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
    
    let Dragons = await getAllDragonsId(e.target.id);
    console.log(Dragons)
    await progressDragonWeight(Dragons);
    await progressHeightDragon(Dragons);
    await progressDiameterDragon(Dragons);
    await progressSecondStageDiameterDragon(Dragons)
    await imageDragons(Dragons.flickr_images)
    await nameDragons(Dragons.name)
    await informDragonLaunchPayloadMass(Dragons.launch_payload_mass)
    await informDragonData();
    await tableDragonColumn1(Dragons)
    await informationDragons(Dragons)
    await informationFirstFlightDragons(Dragons)
    await informationWebDragons(Dragons)
}


export const paginationDragons = async()=>{
    let Dragons = await getAllDragons();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    Dragons.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getDragonsId)
        div.appendChild(a);
    });
    let [a1,a2] = div.children
    a2.click();

    return div;
}

const getCapsulesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
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

    
    let Capsules = await getAllCapsulesId(e.target.id);
    console.log(Capsules);
    await nameCapsules(Capsules.serial);
    await progressCapsuleStats(Capsules);
    await informationCapsuleType(Capsules);
    await informationCapsuleStatus(Capsules);
    await informationCapsuleLastUpdate(Capsules);
    await tableCapsulesLaunches(Capsules)
    await tableCapsulesserial(Capsules)

    
}

export const paginationCapsules = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();

    return div;
}

// Landpads //

const getLandId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLand(Number(e.target.dataset.page)))
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
    // let section__information__q = document.querySelector("#section__information__q");
    // section__information__q.innerHTML = "";
    // let section__information__w = document.querySelector("#section__information__w");
    // section__information__w.innerHTML = "";
    
    
    let Land = await getAllLandId(e.target.id);
    console.log(Land)

    await nameLand(Land.name);
    await imageLandpads([Land])
    await informationFirstFlightland(Land)
    await informationFirstFlightlandstatustype(Land)
    await informationFirstFlightlandstatus(Land)
    await informationFirstFlightlandstatustypelocalityre(Land)
    await informationFirstFlightlandstatustypelocality(Land)
    await informationFirstFlightlandstatustypelocalityredet(Land)
    await tableCoresLaunchesland(Land)
}

export const paginationLandpads = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLand(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLandId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLandId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLandId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a2.click();
    return div;
}

// launchpads // 

const getLaunchpadsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunchpads(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Launchpads = await getAllLaunchpadsId(e.target.id);
    console.log(Launchpads);

    await nameRockets(Launchpads.name)  
    
    await informationNameLand(Launchpads.full_name)
    await informationId(Launchpads.id)
    await informationStatusLand(Launchpads.status)
    await informationWikiLand(Launchpads.wikipedia)

    await informationLaunchCrew(Launchpads.launches)

    await informationDetails(Launchpads.details)

    await tableLandColum1(Launchpads)
    
}

export const paginationLaunchpads = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunchpads(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchpadsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchpadsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchpadsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();

    return div;
}

export const paginationHistory = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllHistory(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getHistoryId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getHistoryId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getHistoryId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();

    return div;
}

const getHistoryId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationHistory(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let History = await getAllHistoryId(e.target.id);
    console.log(History);

    await nameRockets(History.title)    
    await informationDetails(History.details)
    await informationArticle(History.links.article)
    await informationId(History.id)
    await informationDate(History.event_date_utc)
    await informationDate2(History.event_date_unix)
    
}

export const paginationLaunches = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLaunches(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")

    
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLaunchesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLaunchesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLaunchesId)
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

const getLaunchesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLaunches(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    

    let Launch = await getAllLaunchesId(e.target.id);
    console.log(Launch);

    await nameRockets(Launch.name)
    await imformationLaunchesImg(Launch.links.flickr.original[0])
    await informationDetailsLaunches(Launch.details)
    await imformationSuccessLaunch(Launch.success)
    await informationArticleLaunc(Launch.links.article)
    await imformationIdLaunch(Launch.id)
    
    await tableLaunchesColum1(Launch)
    await informationParchLaunch(Launch.links.patch.small)
    await imformationRocketLaunch(Launch.rocket)
    
}