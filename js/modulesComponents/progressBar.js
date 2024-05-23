import { 
    getRocketMassTotal, 
    getRocketPayloadWeightsTotal, 
    getRocketHeightTotal, 
    getRocketDiameterTotal,
    getRocketSecondStageCompositeFairingDiameterTotal,
    getRocketSecondStageCompositeFairingHeightTotal
} from "../modules/rockets.js";

import{
    getCoresStats
}   from "../modules/cores.js"

import{
    getDragonMassTotal,
    getDragonHeightTotal,
    getDragonDiameterTotal,
    getDragonSecondStageCompositeFairingDiameterTotal
}   from "../modules/dragons.js"


export const progressRocketWeight = async(Rockets)=>{
    let {kg} = await getRocketMassTotal();
    let conterDiv = [];
    [Rockets].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = "Rocket weight :";
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg
        ProgressFist.value = `${val.mass.kg}`;
        ProgressFist.textContent = `${val.mass.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.mass.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.mass.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    
}
export const progressPayloadWeights = async(Rockets)=>{
    let {kg} = await getRocketPayloadWeightsTotal();
    let conterDiv = [];
    Rockets.payload_weights.forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `${val.name} :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = kg;
        ProgressFist.value = `${val.kg}`;
        ProgressFist.textContent = `${val.kg}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.kg)
        let numLb = new Intl.NumberFormat('cop').format(val.lb)
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    
}
export const progressHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketHeightTotal();
    let conterDiv = [];
    [Rockets.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket Height :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    
}
export const progressDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketDiameterTotal();
    let conterDiv = [];
    [Rockets.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Rocket diameter :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    
}
export const progressSecondStageDiameterRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingDiameterTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Diameter rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
        if(typeof val.meters ==="number" && isFinite(val.meters)) {
            ProgressFist.value = "0"
            return;
        }
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    
}
export const progressSecondStageHeightRocket = async(Rockets)=>{
    let {meters} = await getRocketSecondStageCompositeFairingHeightTotal();
    let conterDiv = [];
    [Rockets.second_stage.payloads.composite_fairing.height].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container")
        let divFirst = document.createElement("div");
        let labelFist = document.createElement("label");
        labelFist.textContent = `Height rocket shield :`;
    
        let ProgressFist = document.createElement("progress");
        ProgressFist.max = meters;
        ProgressFist.value = `${val.meters}`;
        ProgressFist.textContent = `${val.meters}%`;
    
    
        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters)
        let numFeet = new Intl.NumberFormat('cop').format(val.feet)
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`
    
        divFirst.append(labelFist)
        divFirst.append(ProgressFist)
        divLast.append(spanLast)
        divInformationContainer.append(divFirst)
        divInformationContainer.append(divLast)
        conterDiv.push(divInformationContainer)
    });
    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv)
    
}

/////////////////// PROGRES BAR CORES //////////////////////////////////////////////////////////

export const progressCoresStats = async (Cores) => {
    let { reuse_count, rtls_attempts, rtls_landings, asds_attempts, asds_landings } = await getCoresStats();

    [Cores].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.style.textAlign = "center";
        divInformationContainer.style.fontSize = "20px";

        let createProgressElement = (labelText, value, maxValue) => {
            let div = document.createElement("div");
            let label = document.createElement("label");
            label.textContent = `${labelText}:`;
            label.style.color = "white";
            div.append(label);

            let progressContainer = document.createElement("div");

            let progress = document.createElement("progress");
            progress.max = maxValue;
            progress.value = value;
            progress.style.marginBottom = "5px"; // Agrega un margen inferior para separar la barra del texto

            let progressText = document.createElement("span");
            progressText.style.color = "white";
            progressText.style.fontWeight = "bold";

            if (value === 0) {
                progress.style.color = "white";
                progress.style.backgroundColor = "red";
                progressText.textContent = "0";
            } else if (value === 1) {
                progress.style.color = "white";
                progress.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
                progressText.textContent = "1";
            } else if (value === 2) {
                progress.style.color = "white";
                progress.style.backgroundColor = "yellow";
                progressText.textContent = "2";
            } else if (value === 3) {
                progress.style.color = "white";
                progress.style.backgroundColor = "green";
                progressText.textContent = "3";
            } else {
                progressText.textContent = "No hay datos";
            }

            progressContainer.append(progress, progressText);
            div.append(progressContainer);
            return div;
        };

        divInformationContainer.append(createProgressElement("Reuse Count", val.reuse_count, reuse_count));
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(createProgressElement("RTLS Attempts", val.rtls_attempts, rtls_attempts));
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(createProgressElement("RTLS Landings", val.rtls_landings, rtls_landings));
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(createProgressElement("ASDS Attempts", val.asds_attempts, asds_attempts));
        divInformationContainer.append(document.createElement("br"));
        divInformationContainer.append(createProgressElement("ASDS Landings", val.asds_landings, asds_landings));

        document.querySelector("#information__2").appendChild(divInformationContainer);
    });
};

// Dragons //

export const progressDragonWeight = async(Dragons)=>{
    let kg = await getDragonMassTotal();
    let conterDiv = [];
    [Dragons].forEach((val) => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container");

        let divFirst = document.createElement("div");
        let labelFirst = document.createElement("label");
        labelFirst.textContent = "Dragon weight:";

        let progressFirst = document.createElement("progress");
        progressFirst.max = kg;
        progressFirst.value = val.dry_mass_kg;
        progressFirst.textContent = `${((val.dry_mass_kg / kg) * 100).toFixed(2)}%`;

        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numKg = new Intl.NumberFormat('cop').format(val.dry_mass_kg);
        let numLb = new Intl.NumberFormat('cop').format(val.dry_mass_lbs);
        spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`;

        divFirst.append(labelFirst);
        divFirst.append(progressFirst);
        divLast.append(spanLast);
        divInformationContainer.append(divFirst);
        divInformationContainer.append(divLast);
        conterDiv.push(divInformationContainer);
    });

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv);
}

export const progressHeightDragon = async(Dragons)=>{
    let {meters} = await getDragonHeightTotal();
    let conterDiv = [];
    [Dragons].map(dragon => dragon.height_w_trunk).forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container");

        let divFirst = document.createElement("div");
        let labelFirst = document.createElement("label");
        labelFirst.textContent = `Dragon Height :`;

        let progressFirst = document.createElement("progress");
        progressFirst.max = meters;
        progressFirst.value = val.meters;
        progressFirst.textContent = `${((val.meters / meters) * 100).toFixed(2)}%`;

        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters);
        let numFeet = new Intl.NumberFormat('cop').format(val.feet);
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

        divFirst.append(labelFirst);
        divFirst.append(progressFirst);
        divLast.append(spanLast);
        divInformationContainer.append(divFirst);
        divInformationContainer.append(divLast);
        conterDiv.push(divInformationContainer);
    });

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv);
}


export const progressDiameterDragon = async(Dragons)=>{
    let {meters} = await getDragonDiameterTotal();
    let conterDiv = [];
    [Dragons.diameter].forEach(val => {
        let divInformationContainer = document.createElement("div");
        divInformationContainer.classList.add("information__container");

        let divFirst = document.createElement("div");
        let labelFirst = document.createElement("label");
        labelFirst.textContent = `Dragon diameter :`;

        let progressFirst = document.createElement("progress");
        progressFirst.max = meters;
        progressFirst.value = val.meters;
        progressFirst.textContent = `${((val.meters / meters) * 100).toFixed(2)}%`;

        let divLast = document.createElement("div");
        let spanLast = document.createElement("span");
        let numMeters = new Intl.NumberFormat('cop').format(val.meters);
        let numFeet = new Intl.NumberFormat('cop').format(val.feet);
        spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

        divFirst.append(labelFirst);
        divFirst.append(progressFirst);
        divLast.append(spanLast);
        divInformationContainer.append(divFirst);
        divInformationContainer.append(divLast);
        conterDiv.push(divInformationContainer);
    });

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv);
}

export const progressSecondStageDiameterDragon = async(Dragons) => {
    let diameterResult = await getDragonSecondStageCompositeFairingDiameterTotal();
    let diameter = diameterResult !== null ? diameterResult : 0; // Asignar 0 si diameterResult es nulo
    let conterDiv = [];

    [Dragons].forEach(dragon => {
        if (dragon && dragon.trunk && dragon.trunk.cargo && dragon.trunk.cargo.composite_fairing && dragon.trunk.cargo.composite_fairing.diameter) {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container");

            let divFirst = document.createElement("div");
            let labelFirst = document.createElement("label");
            labelFirst.textContent = `Diameter dragon shield :`;

            let progressFirst = document.createElement("progress");
            progressFirst.max = diameter;
            progressFirst.value = dragon.trunk.cargo.composite_fairing.diameter.meters;
            progressFirst.textContent = `${((dragon.trunk.cargo.composite_fairing.diameter.meters / diameter) * 100).toFixed(2)}%`;

            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");
            let numMeters = new Intl.NumberFormat('cop').format(dragon.trunk.cargo.composite_fairing.diameter.meters);
            let numFeet = new Intl.NumberFormat('cop').format(dragon.trunk.cargo.composite_fairing.diameter.feet);
            spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`;

            divFirst.append(labelFirst);
            divFirst.append(progressFirst);
            divLast.append(spanLast);
            divInformationContainer.append(divFirst);
            divInformationContainer.append(divLast);
            conterDiv.push(divInformationContainer);
        } else {
            let divInformationContainer = document.createElement("div");
            divInformationContainer.classList.add("information__container");

            let divFirst = document.createElement("div");
            let labelFirst = document.createElement("label");
            labelFirst.textContent = `Diameter dragon shield :`;

            let progressFirst = document.createElement("progress");
            progressFirst.max = diameter;
            progressFirst.value = 0;
            progressFirst.textContent = `0%`;

            let divLast = document.createElement("div");
            let spanLast = document.createElement("span");
            spanLast.innerHTML = `0 M <br> 0 F`;

            divFirst.append(labelFirst);
            divFirst.append(progressFirst);
            divLast.append(spanLast);
            divInformationContainer.append(divFirst);
            divInformationContainer.append(divLast);
            conterDiv.push(divInformationContainer);
        }
    });

    let information__2 = document.querySelector("#information__2");
    information__2.append(...conterDiv);
}