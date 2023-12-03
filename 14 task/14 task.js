function loadImage(url) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const imageInfo = {
        width: image.width,
        height: image.height,
        url: url,
      };
      resolve(imageInfo);
    };

    image.onerror = () => {
      reject(new Error("Failed to load image"));
    };

    image.src = url;
  });
}

const imageUrl = "https://example.com/image.jpg";
loadImage(imageUrl)
  .then((imageInfo) => {
    console.log("Информация об изображении:", imageInfo);
  })
  .catch((error) => {
    console.error("Ошибка при загрузке изображения:", error);
  });
