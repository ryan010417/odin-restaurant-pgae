export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");

    // Remove any existing DOM children if present
    contentDiv.replaceChildren();
    
    // DOM for heading
    const heading = document.createElement("h1");
    heading.textContent = "This is the Home Page";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    //DOM for Food 1
    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/images/jason-leung-poI7DelFiVA-unsplash.jpg"
    topImage.alt = "Image of food 1";
    contentDiv.appendChild(topImage);

    const herop1 = document.createElement("p");
    herop1.classList.add("landing-page-copy")
    herop1.textContent = "This is paragraph 1";
    contentDiv.appendChild(herop1);

    const herop2 = document.createElement("p");
    herop2.classList.add("landing-page-copy")
    herop2.textContent = "This is paragraph 2";
    contentDiv.appendChild(herop2);

    const herop3 = document.createElement("p");
    herop3.classList.add("landing-page-copy")
    herop3.textContent = "This is paragraph 3";
    contentDiv.appendChild(herop3);
}