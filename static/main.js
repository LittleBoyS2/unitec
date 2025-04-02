function initMap() {

    const localizacaoClinica = { lat: -23.60344335895204, lng: -46.52975984700882 }; 

    
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15, 
        center: nossoendereco,
    });

   
    const marker = new google.maps.Marker({
        position: nossoendereco,
        map: map,
        title: "Nosso Endereço",
    });
}

document.addEventListener("DOMContentLoaded"), function () {
    
    const Pcorporal = ["../static/text.jpeg", "../static/foto.png", "../static/text.jpeg"];
    const Pfacial = ["../static/text.png", "../static/imagens.png", "../static/text.png"];
    const Pinstalações = [];
    const Preparos = [];
    
   

    let index1 = 0;
    let index2 = 0;


    function changeImage1() {
        const imgElement = document.getElementById("carousel-instalaçoes");
        index1 = (index1 + 1) % Preaparos.length;
        imgElement.src = Preparos[index1];
    }
}