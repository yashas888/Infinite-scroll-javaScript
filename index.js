const container = document.querySelector(".container");
const loading = document.querySelector(".loading");
const API_URL = `https://picsum.photos/id/`;

const generateRandomNumbers = () => {
  return Math.floor(Math.random() * 100);
};

const LoadImages = (initialNumberOfImages = 10) => {
  let i = 0;
  while (i < initialNumberOfImages) {
    const img = document.createElement("img");
    img.loading = "lazy";
    img.src = `${API_URL}${generateRandomNumbers()}/400/500`;
    container.appendChild(img);
    i++;
  }
};

LoadImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loading.style.display = "block";
    LoadImages();
  }
});
