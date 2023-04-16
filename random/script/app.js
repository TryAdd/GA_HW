const random = document.querySelector("#randomize");
const images = document.querySelector(".image");
const widthInput = document.querySelector(".width");
const heightInput = document.querySelector(".height");

random.addEventListener("click", function() {
    console.log('hi')
    const width = widthInput.value;
    const height = heightInput.value;
    const image = document.createElement("img");
    image.src = `https://picsum.photos/${width}/${height}`;
    // image = Math.floor(Math.random()*image.src)
    console.log(image) 
    images.innerHTML="";
    images.appendChild(image)
});
