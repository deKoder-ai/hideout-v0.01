const imagesInit = import.meta.glob('../../assets/img/landscape/*.jpg', { eager: true });

const images = Object.values(imagesInit).map((img) => img.default);

export default images;
