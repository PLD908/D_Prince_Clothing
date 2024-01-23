fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => {
        if (response.ok) {
            let res = response.json();
            console.log(res);
            return res;
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then((data) => {
        console.log(data);
        displayClothes(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayClothes(data) {
    const randomNumber = Math.floor(Math.random() * 10);
    const clothe = data[randomNumber];
    const clotheDiv = document.getElementById('container');
    const aboutClothe = document.getElementById('about-cloth');
    const clotheImage = document.getElementById('item-image');

    // add image of product
    const clotheImg = document.createElement('img');
    clotheImg.src = clothe.images[0];
    clotheImage.appendChild(clotheImg);
    console.log(clotheImage);
    // document.body.style.backgroundImage = "url('" + clothe.images[0] + "')";

    // add name the clothe
    const clotheName = clothe.title;
    const heading = document.createElement('h1');
    heading.innerHTML = clotheName;
    aboutClothe.appendChild(heading);

    // add price of the clothe
    const clothePrice = clothe.price;
    const headingPrice = document.createElement('h3');
    headingPrice.innerHTML = clothePrice;
    aboutClothe.appendChild(headingPrice);

    // add about of the clothe
    const clotheAbout = clothe.description;
    const paragraph = document.createElement('p');
    paragraph.innerHTML = clotheAbout;
    aboutClothe.appendChild(paragraph);

    // add button
    // const button = document.createElement('button');
    // button.
    // aboutClothe.appendChild(button);
}