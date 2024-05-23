export const imageRockets = async(flickr_images)=>{
    let section__image = document.querySelector("#section__image")
    let divs = [];
    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item")
        let img = document.createElement("img");
        img.setAttribute("src", val)
        img.setAttribute("referrerpolicy", "no-referrer")
        div.append(img)
        divs.push(div);
    });
    section__image.append(...divs)
    // <div class="carousel__item">
    //     <img src="https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg" referrerpolicy="no-referrer">
    // </div>
}

//////////////7 IMAGENES CREWS /////////////////////////////////////////////////////////////

export const imageCrews = async (crewData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenedor de imágenes antes de agregar una nueva
    
    crewData.forEach(member => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        
        let img = document.createElement("img");
        img.setAttribute("src", member.image);
        img.setAttribute("alt", member.name); // Asociar el nombre como atributo alt para accesibilidad
        img.setAttribute("referrerpolicy", "no-referrer");

        // Establecer el tamaño de la imagen
        img.setAttribute("style", "width: 200px; height: auto;"); // Ejemplo de tamaño (ajusta según lo necesites)
        
        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;
            
            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};