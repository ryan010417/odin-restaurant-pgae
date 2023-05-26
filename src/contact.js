import restaurantImage from './assets/images/jason-leung-poI7DelFiVA-unsplash.jpg'

export function contact() {
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();
    
    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "This is the Contact Page";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //DOM for Phone Image
    const phoneImage = document.createElement("img");
    phoneImage.classList.add("top-image");
    phoneImage.src = restaurantImage;
    phoneImage.alt = "Image of phone 1";
    contentDiv.appendChild(phoneImage);

    const descPhone1 = document.createElement("p");
    descPhone1.classList.add("landing-page-copy")
    descPhone1.textContent = "This is phone 1";
    contentDiv.appendChild(descPhone1);

    //DOM for Phone Image
    const emailImage = document.createElement("img");
    emailImage.classList.add("top-image");
    emailImage.src = restaurantImage;
    emailImage.alt = "Image of email 2";
    contentDiv.appendChild(emailImage);

    const descEmail1 = document.createElement("p");
    descEmail1.classList.add("landing-page-copy")
    descEmail1.textContent = "This is email 2";
    contentDiv.appendChild(descEmail1);
}