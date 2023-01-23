class CatDog {
  static createImgPet(image, classImage) {
    const imgPet = document.querySelector(`.${classImage}`);

    imgPet.src = image.url;
    imgPet.alt = image.name;
  }
  static getImgCat() {
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => response.json())
      .then((res) => CatDog.createImgPet(res[0], "cat"));
  }
  static async getImgDog() {
    await fetch(`https://api.thedogapi.com/v1/images/search`)
      .then((response) => response.json())
      .then((res) => CatDog.createImgPet(res[0], "dog"));
  }
}

document.body.addEventListener("click", (event) => {
  if (event.target.id === "cat--button") {
    CatDog.getImgCat();
  } else if (event.target.id === "dog--button") {
    CatDog.getImgDog();
  }
});
