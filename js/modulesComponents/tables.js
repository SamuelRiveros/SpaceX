export const tableRocketColum1 = async (Rocket) => {
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Information rocket"
    let hr = document.createElement("hr");
    information__table__1.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Rocket in service"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.active) ? "Active" : "Low" }`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Number of stages"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${Rocket.stages}`
    div2.append(span2, strong2)
    
    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of propellants"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${Rocket.boosters}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Type"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${Rocket.type}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Landing legs"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${Rocket.landing_legs.number}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Leg material"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.landing_legs.material) ? Rocket.landing_legs.material : ""}`
    div6.append(span6, strong6)

    div.append(div4, div1, div2, div3, div5, div6)
    information__table__1.append(div)
}

export const tableRocketColum2 = async (Rocket)=>{
    let information__table__2 = document.querySelector("#information__table__2");
    information__table__2.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.textContent = "Engine information"
    let hr = document.createElement("hr");
    information__table__2.append(h3, hr)

    let div = document.createElement("div");
    div.classList.add("table__container__1");
    // 
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.textContent = "Maximum power loss"
    let strong1 = document.createElement("strong");
    strong1.textContent = `${(Rocket.engines.engine_loss_max) ? Rocket.engines.engine_loss_max : 0}`
    div1.append(span1, strong1)

    // 
    let div2 = document.createElement("div");
    let span2 = document.createElement("span");
    span2.textContent = "Engine availability"
    let strong2 = document.createElement("strong");
    strong2.textContent = `${(Rocket.engines.layout) ? Rocket.engines.layout : ""}`
    div2.append(span2, strong2)

    // 
    let div3 = document.createElement("div");
    let span3 = document.createElement("span");
    span3.textContent = "Number of engines"
    let strong3 = document.createElement("strong");
    strong3.textContent = `${(Rocket.engines.number) ? Rocket.engines.number : 0}`
    div3.append(span3, strong3)

    // 
    let div4 = document.createElement("div");
    let span4 = document.createElement("span");
    span4.textContent = "Stage 1 fuel"
    let strong4 = document.createElement("strong");
    strong4.textContent = `${(Rocket.engines.propellant_1) ? Rocket.engines.propellant_1 : ""}`
    div4.append(span4, strong4)

    // 
    let div5 = document.createElement("div");
    let span5 = document.createElement("span");
    span5.textContent = "Stage 2 fuel"
    let strong5 = document.createElement("strong");
    strong5.textContent = `${(Rocket.engines.propellant_2) ? Rocket.engines.propellant_2 : ""}`
    div5.append(span5, strong5)

    // 
    let div6 = document.createElement("div");
    let span6 = document.createElement("span");
    span6.textContent = "Type"
    let strong6 = document.createElement("strong");
    strong6.textContent = `${(Rocket.engines.type) ? Rocket.engines.type : 0} ${(Rocket.engines.version) ? Rocket.engines.version : ""}`
    div6.append(span6, strong6)

    div.append(div6, div1, div2, div3, div4, div5)
    information__table__2.append(div)
}

// CORES //

export const tableCoresLaunches = async (Cores) => {
    let information__table__1 = document.querySelector("#information__table__1");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.style.fontSize = "32px"; // Aumenta el tamaño de fuente del título a 32 píxeles
    h3.style.color = "white";
    h3.textContent = "Capsule Launches";
    let hr = document.createElement("hr");
    let div = document.createElement("div");
    div.classList.add("table__container__1");
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    span1.style.color = "blue";
    span1.textContent = "N° Block";
    let strong1 = document.createElement("strong");
    strong1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    strong1.style.color = "green";
    strong1.textContent = `${Cores.block}`;
    div1.append(span1, strong1);
    div.append(div1);
    information__table__1.append(h3, hr, div);
};

export const tableCoreLaunchesid = async (Cores) => {
    let information__table__1 = document.querySelector("#information__table__2");
    information__table__1.innerHTML = "";
    let h3 = document.createElement("h3");
    h3.style.fontSize = "32px"; // Aumenta el tamaño de fuente del título a 32 píxeles
    h3.style.color = "white";
    h3.textContent = "Capsule Launches";
    let hr = document.createElement("hr");
    let div = document.createElement("div");
    div.classList.add("table__container__1");
    let div1 = document.createElement("div");
    let span1 = document.createElement("span");
    span1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    span1.textContent = "Launches";
    let strong1 = document.createElement("strong");
    strong1.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto a 24 píxeles
    strong1.textContent = `${Cores.launches}`;
    div1.append(span1, strong1);
    div.append(div1);
    information__table__1.append(h3, hr, div);
}