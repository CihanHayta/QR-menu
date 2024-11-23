import { fetchMenu } from "./api.js";
import { renderCards } from "./ui.js";



document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchMenu();

    renderCards(data.menu);

    const inputs = document.querySelectorAll("#buttons input");

    inputs.forEach((input) => {

        input.addEventListener("change", () => {

            const selected = input.id;

           
            
           

            if (selected === "all") {
                renderCards(data.menu);
              } else {
                // İlgili categoryle alakalı ürünleri filtrele
                const filtered = data.menu.filter((item) => item.category == selected);
                // Hepsi seçili değilse ilgili categoryi render et
                renderCards(filtered);
        
                }


        });

    });


});