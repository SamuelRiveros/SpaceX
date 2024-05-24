import { 
  getAllLaunchesId
} from "../modules/launches.js";

import { getAllRocketsId } from "../modules/rockets.js";

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
    h4.textContent = "Leer sobre el cohete..."
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    a.style.color = "#4b4f6e"
    divLast.append(h4, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}


export const informationFirstFlightCrews = async({agency})=>{
    let div = document.createElement('div');
    div.classList.add('description__container');
    div.style.fontSize = "24px"; 
  
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/Mech.svg");
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.color = "#9499c3";
    h3.style.fontSize = "32px"; 
    h3.textContent = "Info. De Agencia";
    let small = document.createElement('small');
    small.style.fontSize = "24px"; 
    small.textContent = agency;
    small.style.color = "#4b4f6e";
    divLast.append(h3, small);
    div.append(divFirst, divLast);
  
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  }
  
  export const informationWebCrew = async ({ wikipedia }) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    div.style.fontSize = "24px"; 
    div.style.display = "flex"; 
    div.style.flexDirection = "column"; 
  
    let divRow = document.createElement('div');
    divRow.style.display = "flex"; 
  
  
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/Mech.svg");
    divFirst.append(img);
  
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.color = "#9499c3";
    h3.style.fontSize = "25px"; 
    h3.textContent = "Aprende más sobre su Crew";
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia);
    a.setAttribute("target", "_blank");
    a.style.color = "#4b4f6e"; 
    a.style.fontSize = "24px"; 
    a.textContent = "Wikipedia";
    a.style.color = "#4b4f6e"
    divLast.append(h3, a);
  
  
    divRow.append(divFirst, divLast);
    div.append(divRow);
  
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  }

export const informationCoresStatus = async ({status}) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "./storage/img/Mech.svg");
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
    h3.textContent = "Ultimas actualizaciones";
    h3.style.color = "gray";
    let lastUpdateText = document.createElement('p');
    lastUpdateText.textContent = last_update;
    lastUpdateText.style.color = "white";
    divLast.append(h3, lastUpdateText);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  };

  //----------------------/ DRAGONS /----------------------//

export const informationDragons = async({country, description})=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "./storage/img/Mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.color = "#9499c3";
    h3.textContent = "Country and Description";
    let small = document.createElement('small');
    small.textContent = description
    small.style.color = "#4b4f6e"
    divLast.append(h3, small);
    div.append(divFirst, divLast);
  
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
  }
  
  export const informationFirstFlightDragons = async({first_flight})=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "./storage/img/Mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.color = "#9499c3";
    h3.textContent = "First Flight Information";
    let small = document.createElement('small');
    small.textContent = first_flight
    small.style.color = "#4b4f6e"
    divLast.append(h3, small);
    div.append(divFirst, divLast);
  
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
  }

  export const informationWebDragons = async({wikipedia})=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/Mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.style.color = "#9499c3";
    h3.textContent = "Lee más sobre el cohete...";
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    a.style.color = "#4b4f6e"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
  
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
  }

  export const informationCapsuleType = async ({type}) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/Mech.svg");
    divFirst.append(img);
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type";
    h3.style.color = "#9499c3";
    let typeText = document.createElement('p');
    typeText.textContent = type;
    typeText.style.color = "white";
    divLast.append(h3, typeText);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  }

  export const informationCapsuleStatus = async ({status}) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/Mech.svg");
    divFirst.append(img);
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status";
    h3.style.color = "#9499c3";
    let statusText = document.createElement('p');
    statusText.textContent = status;
    statusText.style.color = "white";
    divLast.append(h3, statusText);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  };

  export const informationCapsuleLastUpdate = async ({last_update}) => {
    let div = document.createElement('div');
    div.classList.add('description__container');
    let divFirst = document.createElement('div');
    div.style.display = "flex";
    div.style.flexDirection = "column";
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Ultimas actualizaciones";
    h3.style.color = "#9499c3";
    let lastUpdateText = document.createElement('p');
    lastUpdateText.textContent = last_update;
    lastUpdateText.style.color = "white";
    divLast.append(h3, lastUpdateText);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item");
    description__item.append(div);
  };

  

  // Landpads //

export const informationFirstFlightland = async({full_name})=>{
  let div = document.createElement('div');
  div.classList.add('description__container');
  div.style.fontSize = "24px";

  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/Mech.svg");
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "white";
  h3.style.fontSize = "20px";
  h3.textContent = "Nombre completo";
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.style.fontSize = "16px";
  small.textContent = full_name;
  small.style.color = "#4b4f6e"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item");
  description__item.append(div);
}

export const informationFirstFlightlandstatus = async({status})=>{
  let div = document.createElement('div');
  div.classList.add('description__container');
  div.style.fontSize = "24px";

  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/Mech.svg");
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "white";
  h3.style.fontSize = "20px";
  h3.textContent = "Status";
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.style.fontSize = "16px";
  small.textContent = status;
  small.style.color = "#4b4f6e"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item");
  description__item.append(div);
}

export const informationFirstFlightlandstatustype = async({type})=>{
  let div = document.createElement('div');
  div.classList.add('description__container');
  div.style.fontSize = "24px";

  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/Mech.svg");
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "white";
  h3.style.fontSize = "20px";
  h3.textContent = "Tipo de zona de caída";
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.style.fontSize = "16px";
  small.textContent = type;
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item");
  description__item.append(div);
}

export const informationFirstFlightlandstatustypelocality = async({locality})=>{
  let div = document.createElement('div');
  div.classList.add('description__container');
  div.style.fontSize = "24px";

  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/Mech.svg");
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "white";
  h3.style.fontSize = "20px";
  h3.textContent = "Localidad";
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.style.fontSize = "16px";
  small.textContent = locality;
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item");
  description__item.append(div);
}

export const informationFirstFlightlandstatustypelocalityre = async({region})=>{
  let div = document.createElement('div');
  div.classList.add('description__container');
  div.style.fontSize = "24px";

  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/Mech.svg");
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "white";
  h3.style.fontSize = "20px";
  h3.textContent = "Region";
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.style.fontSize = "16px";
  small.textContent = region;
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item");
  description__item.append(div);
}



export const informationFirstFlightlandstatustypelocalityredet = async({details})=>{
  let div = document.createElement('div');
  div.classList.add('description__container');
  div.style.width = "90%";
  div.style.fontSize = "24px";

  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/Mech.svg");
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "white";
  h3.style.fontSize = "20px";
  h3.textContent = "Detalles";
  let small = document.createElement('small');
  small.style.fontSize = "16px";
  small.textContent = details;
  small.style.color = "#4b4f6e"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#information__2");
  description__item.append(div);
}

// Launchpads // 

export const informationDetails = async(details)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  div.style.scale = "1.2";
  div.style.marginTop = "40px";
  div.style.width = "70%";
  div.style.height = "40%";
  div.style.marginBottom = "0";
  div.style.paddingBottom = "0";
  div.style.overflowY = "auto";
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Detalles del exito"
  h3.style.color = "white";
  let small = document.createElement('small');
  small.textContent = details
  small.style.color = "white"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let section__information__1 = document.querySelector("#section__information__1")
  section__information__1.innerHTML = "";
  section__information__1.append(div)
}

export const informationId = async (id) => {
  let section__information__1 = document.querySelector("#description__item")
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "ID"
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.textContent = id
  small.style.color = "#4b4f6e"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  section__information__1.append(div)
}












export const informationNameLand = async (full_name) => {
  let section__information__1 = document.querySelector("#description__item")
  section__information__1.innerHTML = "";
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Nombre Completo"
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.textContent = full_name
  small.style.color = "#4b4f6e"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  section__information__1.append(div)
}

export const informationStatusLand = async (status) => {
  let section__information__1 = document.querySelector("#description__item")
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Status"
  h3.style.color = "#9499c3";
  let small = document.createElement('small');
  small.textContent = status
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  section__information__1.append(div)
}


export const informationWikiLand = async(wikipedia)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Leer sobre el landpad..."
  h3.style.color = "#9499c3";
  let a = document.createElement('a');
  a.setAttribute("href", wikipedia)
  a.setAttribute("target", "_blank")
  a.textContent = "Wikipedia"
  a.style.color = "#4b4f6e"
  divLast.append(h3, a);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item")
  description__item.append(div)
}

export const informationLaunchCrew = async (launch) => {
  let section__information__1 = document.querySelector("#information__2")
  section__information__1.innerHTML = "";
  for (let i = 0; i < launch.length; i++) {
      let launches = (await getAllLaunchesId(launch[i]))
      let div = document.createElement('div');
      div.classList.add('description__container')
      let divFirst = document.createElement('div');
      let img = document.createElement('img');
      img.setAttribute("src", "./storage/img/Mech.svg")
      divFirst.append(img);
      
      let divLast = document.createElement('div');
      let h3 = document.createElement('h3');
      h3.textContent = "Launch id"
      let small = document.createElement('small');
      small.textContent = launches.id
      let img2 = document.createElement("img")
      img2.src = launches.links.flickr.original[0]
      img2.style.marginTop = "10px";
      img2.style.width = "100%";
      img2.style.height = "200px";
      img2.style.borderRadius = "2px";
      img2.style.boxShadow = "#298BFE 0px 0px 6px 4px";
      divLast.append(h3, small, img2);
      div.append(divFirst, divLast);

      section__information__1.append(div)
  }
  let information__table__2 = document.querySelector("#information__table__2")
  information__table__2.innerHTML = "";
  let information__table__1 = document.querySelector("#information__table__1")
  information__table__1.innerHTML = "";
}

export const informationArticle = async(link)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Archivement article"
  h3.style.color = "white";
  let a = document.createElement('a');
  a.setAttribute("href", link)
  a.setAttribute("target", "_blank")
  a.textContent = "link"
  a.style.color ="white"
  divLast.append(h3, a);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item")
  description__item.innerHTML = "";
  description__item.append(div)
}

export const informationDate = async (date) => {
  let section__information__1 = document.querySelector("#information__2")
  section__information__1.innerHTML = "";
  let info1 = document.querySelector("#information__table__1")
  info1.innerHTML = "";
  let info2 = document.querySelector("#information__table__2");
  info2.innerHTML = "";
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Fecha del evento utc"
  h3.style.color = "white"
  let small = document.createElement('small');
  small.textContent = date
  small.style.color = "#4b4f6e"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  section__information__1.append(div)
}

export const informationDate2 = async (date) => {
  let section__information__1 = document.querySelector("#information__2")
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Fecha del evento unix"
  h3.style.color = "white"
  let small = document.createElement('small');
  small.textContent = date
  small.style.color = "#4b4f6e"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  section__information__1.append(div)
}


// Launches //

export const informationDetailsLaunches = async(details)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  div.style.scale = "1.2";
  div.style.marginTop = "40px";
  div.style.width = "70%";
  div.style.height = "40%";
  div.style.overflowY = "auto";
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Detalles del lanzamiento"
  h3.style.color = "white";
  let small = document.createElement('small');
  small.textContent = details
  small.style.color = "white"
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let section__information__1 = document.querySelector("#section__information__1")
  section__information__1.innerHTML = "";
  section__information__1.append(div)

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

export const informationArticleLaunc = async(link)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  divLast.append(h3);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item")
  description__item.append(div)
}


export const imformationSuccessLaunch = async(success)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Lanzamientos exitosos"
  h3.style.color = "rgb(148, 153, 195)"
  h3.style.fontSize = "32px"
  let small = document.createElement('small');
  small.textContent = success
  small.style.color = "white"
  divLast.append(h3, small);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item")
  description__item.append(div)

}

export const imformationIdLaunch = async(id)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div'); 
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "ID del lanzamiento"
  h3.style.color = "rgb(148, 153, 195)"
  h3.style.fontSize = "32px"
  let small = document.createElement('small');
  small.textContent = id
  small.style.color = "white"
  divLast.append(h3, small);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item")
  description__item.append(div)

}

export const informationParchLaunch = async(link)=>{
  let information__table__2 = document.querySelector("#information__table__2")
  information__table__2.innerHTML = "";
  if(link){
      let div = document.createElement('div');
      div.classList.add('description__container')
      div.style.objectFit = "contain";
      div.style.justifyContent = "center";
      let imgFist = document.createElement("img");
      imgFist.src = link;
      imgFist.style.width = "60%";
      div.append(imgFist);

      information__table__2.append(div)
  }
}

export const imformationRocketLaunch = async(Rocket)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "./storage/img/Mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Rocket used"
  let small = document.createElement('small');
  small.textContent = Rocket
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#information__2")
  description__item.innerHTML = "";
  description__item.append(div)

}

export const imformationLaunchesImg = async(imagen)=>{
  let description__item = document.querySelector("#description__item")
  description__item.innerHTML = "";
  if(imagen){
      let div = document.createElement('div');
      div.classList.add('description__container')
      div.style.marginTop = "4px";
      div.style.justifyContent = "center";
      let imgFist = document.createElement("img");
      imgFist.src = imagen;
      imgFist.style.width = "100%";
      imgFist.style.height = "200px";
      imgFist.style.borderRadius = "2px";
      imgFist.style.boxShadow = "#298BFE 0px 0px 6px 4px";
      div.append(imgFist);

      description__item.append(div)
  }
}