import restaurantImage from './assets/images/jason-leung-poI7DelFiVA-unsplash.jpg'

export function menu() {
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();
    
    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "This is the Menu Page";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //DOM for Food 1
    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = restaurantImage;
    topImage.alt = "Image of food 1";
    contentDiv.appendChild(topImage);

    const descfood1 = document.createElement("p");
    descfood1.classList.add("landing-page-copy")
    descfood1.textContent = "This is food 1";
    contentDiv.appendChild(descfood1);

    // DOM for food 2
    const topImage2 = document.createElement("img");
    topImage2.classList.add("top-image");
    topImage2.src = restaurantImage;
    topImage2.alt = "Image of food 2";
    contentDiv.appendChild(topImage2);

    const descfood2 = document.createElement("p");
    descfood2.classList.add("landing-page-copy")
    descfood2.textContent = "This is food 2";
    contentDiv.appendChild(descfood2);

    // DOM for food 3
    const topImage3 = document.createElement("img");
    topImage3.classList.add("top-image");
    topImage3.src = restaurantImage;
    topImage3.alt = "Image of food 3";
    contentDiv.appendChild(topImage3);

    const descfood3 = document.createElement("p");
    descfood3.classList.add("landing-page-copy")
    descfood3.textContent = "This is food 3";
    contentDiv.appendChild(descfood3);
}