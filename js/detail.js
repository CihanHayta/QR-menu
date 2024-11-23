import { renderDetailPage, renderNotFoundPage } from "./ui.js";




const outlet =document.getElementById("outlet");

/// javascript url parametreyi almamıza sağlar
const params = new URLSearchParams(window.location.search);

const id =parseInt( params.get("id"));
/// seçili id bulup o id için dbjsona istek atıyoruz idinin verilerini çekip html ekliyoruz
document.addEventListener("DOMContentLoaded",async()=>{
    const res = await fetch("../db.json");
    const data = await res.json();

    const product = data.menu.find((item)=>item.id === id);
    
    if(!product){
       renderNotFoundPage();
    }

    else{
        renderDetailPage(product,outlet);
    }

    
    
    
});


