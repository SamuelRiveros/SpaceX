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