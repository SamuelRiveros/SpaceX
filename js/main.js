import { getAllRocketEngineTotal } from "./modules/rockets.js";
import { 
    paginationRockets
} from "./modulesComponents/pagination.js";


let paginacion = document.querySelector("#paginacion");
paginacion.innerHTML = ""
paginacion.append(await paginationRockets())