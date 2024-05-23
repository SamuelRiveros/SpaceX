export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('leftbox')
    let divFirst = document.createElement('div');
    divFirst.classList.add("icon")
    let icon = document.createElement('i');
    icon.setAttribute("class", "bx bxs-check-circle");
    icon.style.color = "#9499c3";
    divFirst.append(icon);
    
    let divLast = document.createElement('div');
    divLast.classList.add("leftboxcontent")
    let h4 = document.createElement('h4');
    h4.textContent = country
    let p = document.createElement('p');
    p.textContent = description
    divLast.append(h4, p);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <p>Lorem ipsum dolor sit amet...</p>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('leftbox')
    let divFirst = document.createElement('div');
    divFirst.classList.add("icon")
    let icon = document.createElement('i');
    icon.setAttribute("class", "bx bxs-check-circle");
    icon.style.color = "#9499c3";
    divFirst.append(icon);
    
    let divLast = document.createElement('div');
    divLast.classList.add("leftboxcontent")
    let h4 = document.createElement('h4');
    h4.textContent = "The estimated cost per rocket launch"
    let p = document.createElement('p');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    p.textContent = `$ ${money}`
    divLast.append(h4, p);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <p>Lorem ipsum dolor sit amet...</p>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('leftbox')
    let divFirst = document.createElement('div');
    divFirst.classList.add("icon")
    let icon = document.createElement('i');
    icon.setAttribute("class", "bx bxs-check-circle");
    icon.style.color = "#9499c3";
    divFirst.append(icon);
    
    let divLast = document.createElement('div');
    divLast.classList.add("leftboxcontent")
    let h4 = document.createElement('h4');
    h4.textContent = "The date of the first flight of the rocket"
    let p = document.createElement('p');
    p.textContent = first_flight
    divLast.append(h4, p);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <p>Lorem ipsum dolor sit amet...</p>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('leftbox')
    let divFirst = document.createElement('div');
    divFirst.classList.add("icon")
    let icon = document.createElement('i');
    icon.setAttribute("class", "bx bxs-check-circle");
    icon.style.color = "#9499c3";
    divFirst.append(icon);
    
    let divLast = document.createElement('div');
    divLast.classList.add("leftboxcontent")
    let h4 = document.createElement('h4');
    h4.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h4, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

///////////////////////////////////// CREWS //////////////////////////////////////////////////////////7

export const informationFirstFlightCrews = async({agency})=>{
    let div = document.createElement('div');
    div.classList.add('description__container');
    div.style.fontSize = "24px"; // Aumenta el tamaño de fuente del contenedor
  
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/mech.svg");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.color = "white";
    h3.style.fontSize = "32px"; // Aumenta el tamaño de fuente del título
    h3.textContent = "Info. De Agencia";
    let small = document.createElement('small');
    small.style.fontSize = "24px"; // Aumenta el tamaño de fuente del texto
    small.textContent = agency;
    divLast.append(h3, small);
    div.append(divFirst, divLast);
  
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  }
  
  export const informationWebCrew = async ({ wikipedia }) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    div.style.fontSize = "24px"; // Aumenta el tamaño de fuente del contenedor
    div.style.display = "flex"; // Cambia el diseño a flexbox
    div.style.flexDirection = "column"; // Cambia la dirección a columna
  
    let divRow = document.createElement('div');
    divRow.style.display = "flex"; // Cambia el diseño a flexbox
  
  
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/mech.svg");
    divFirst.append(img);
  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.color = "white";
    h3.style.fontSize = "25px"; // Aumenta el tamaño de fuente del título
    h3.textContent = "Aprende más sobre su Crew";
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia);
    a.setAttribute("target", "_blank");
    a.style.color = "blue"; // Establece el color del enlace a azul
    a.style.fontSize = "24px"; // Aumenta el tamaño de fuente del enlace
    a.textContent = "Wikipedia";
    divLast.append(h3, a);
  
  
    divRow.append(divFirst, divLast);
    div.append(divRow);
  
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  }


  //////////////////////////// CORES ///////////////////////////////////////////7

export const informationCoresStatus = async ({status}) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/mech.svg");
    divFirst.append(img);
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status";
    h3.style.color = "gray";
    let statusText = document.createElement('p');
    statusText.textContent = status;
    statusText.style.color = "white";
    divLast.append(h3, statusText);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  };
  
  
  export const informationCoreLastUpdate = async ({last_update}) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    div.style.display = "flex"; 
    div.style.flexDirection = "column";
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last Update";
    h3.style.color = "gray";
    let lastUpdateText = document.createElement('p');
    lastUpdateText.textContent = last_update;
    lastUpdateText.style.color = "white";
    divLast.append(h3, lastUpdateText);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  };