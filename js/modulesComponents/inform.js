import {
    getAllRocketEngineTotal,
    getAllRocketEngineThrustVacuumTotal
} from "../modules/rockets.js";

import{
    getAllDragonEngineTotal,
    getAllDragonData
}   from "../modules/dragons.js"


export const informRocketEngineThrustSeaLevel = async(thrust_sea_level)=>{
    let {kN:totalKN} = await getAllRocketEngineTotal();
    let pocentaje = (thrust_sea_level.kN * 100) / totalKN

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color-quinto) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div)


}


export const informRocketEngineThrustVacuum = async(thrust_vacuum)=>{
    let {kN:totalKN} = await getAllRocketEngineThrustVacuumTotal();
    let pocentaje = (thrust_vacuum.kN * 100) / totalKN;

    let div = document.createElement('div');
    div.classList.add("carousel__item")
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color-quinto) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value")
    let strong = document.createElement('strong');
    strong.textContent = "Speed in space"
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`
    
    let smallLast = document.createElement('small');
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)
    smallLast.innerHTML = `${kN} kN <br> ${lbf} Lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divFirst.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.append(div)


}

////////////////////////// INFORM DRAGONS ////////////////////////////////////////////////////////////////////

export const informDragonLaunchPayloadMass = async (launch_payload_mass) => {
    let { kg: totalKg } = await getAllDragonEngineTotal();
    let percentage = (launch_payload_mass.kg * 100) / totalKg;
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side 85%, transparent 85% 100%), conic-gradient( ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Launch Payload Mass";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    let kg = new Intl.NumberFormat('cop').format(launch_payload_mass.kg);
    let lb = new Intl.NumberFormat('cop').format(launch_payload_mass.lb);
    smallLast.innerHTML = `${kg} kg <br> ${lb} lb`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div);
};

export const informDragonData = async () => {

    //esconder carruseles//
    let carruseles = document.querySelectorAll(".item__progress__bar");
    carruseles.forEach(element => {
        element.classList.add('hidden');
        document.querySelector('.section__information__3 div:first-child').style.display = 'none';
        document.querySelector('.section__information__2 div:first-child').style.display = 'none';
    });

    // Este el de la izquierda

    let { totalDragons, activeDragons } = await getAllDragonData();
    let div = document.createElement('div');
    div.classList.add("carousel__item");
    let divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");

    let percentage = (totalDragons * 100) / totalDragons;
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient( ${percentage}%, transparent 0)`;
    let divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement('strong');
    strong.textContent = "Total Dragons";
    let smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    let smallLast = document.createElement('small');
    smallLast.innerHTML = `${totalDragons}`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    
    document.querySelector('.section__information__3').append(div);
    

    // este se supone que es el circulo de la derecha

    div = document.createElement('div');
    div.classList.add("carousel__item");
    divFirst = document.createElement('div');
    divFirst.classList.add("item__progress__bar");
    percentage = (activeDragons * 100) / totalDragons;
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient( ${percentage}%, transparent 0)`;
    divFirstChildren = document.createElement('div');
    divFirstChildren.classList.add("progress__value");
    strong = document.createElement('strong');
    strong.textContent = "Active Dragons";
    smallFirst = document.createElement('small');
    smallFirst.textContent = `${percentage.toFixed(2)} %`;
    smallLast = document.createElement('small');
    smallLast.innerHTML = `${activeDragons}`;
    divFirstChildren.append(strong, smallFirst, smallLast);
    divFirst.append(divFirstChildren);
    div.append(divFirst);
    document.querySelector('.section__information__2').append(div);
}
