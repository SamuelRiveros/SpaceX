import { 
    load,
    paginationRockets,
    paginationCrews,
    paginationCores,
    paginationDragons
} from "./modulesComponents/pagination.js";


//let paginacion = document.querySelector("#paginacion");
//paginacion.innerHTML = ""
//paginacion.append(await paginationRockets())



let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footercenter .centericon")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#Rockets")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let Crew = document.querySelector("#Crews")
Crew.addEventListener("click", async(e)=>{
    await footerSelect(e, Crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrews())
})

let cores = document.querySelector("#Cores")
cores.addEventListener("click", async(e)=>{
    await footerSelect(e, cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})


let capsules = document.querySelector("#Capsules")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

let launches = document.querySelector("#Launches")
launches.addEventListener("click", async(e)=>{
    await footerSelect(e, launches)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLaunches())
})

let Dragons = document.querySelector("#Dragons")
Dragons.addEventListener("click", async(e)=>{
    await footerSelect(e, Dragons)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDragons())
})
