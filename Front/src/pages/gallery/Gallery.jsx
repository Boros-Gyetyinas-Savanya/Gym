import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_3.jpg";

import "./gallery.css";

const gallery = () => {
  const galleryLenght = 15;
  const images = [];

  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        assumenda, officia quisquam esse eaque harum.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default gallery;
