import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

import "./about.css";

function about() {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        voluptatem nisi dolor porro doloribus cum temporibus quibusdam facilis
        repellat architecto!
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-contente">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              sint molestias vero cumque accusantium eveniet, dolorem id nihil
              aspernatur fugit! Fugiat reprehenderit quidem unde omnis ratione
              impedit dolore temporibus voluptas!
            </p>
            <form action="../../../Backend/post" method="post" className="form">
              <button type="submit">Connected?</button>
            </form>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              necessitatibus neque similique sapiente sed unde illo odit iste,
              totam officiis doloribus rem quis, mollitia vero.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              ducimus repellat repellendus quibusdam provident accusantium!
            </p>
          </div>
        </div>
      </section>
      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-contente">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              sint molestias vero cumque accusantium eveniet, dolorem id nihil
              aspernatur fugit! Fugiat reprehenderit quidem unde omnis ratione
              impedit dolore temporibus voluptas!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              necessitatibus neque similique sapiente sed unde illo odit iste,
              totam officiis doloribus rem quis, mollitia vero. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. In, nihil?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-contente">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              sint molestias vero cumque accusantium eveniet, dolorem id nihil
              aspernatur fugit! Fugiat reprehenderit quidem unde omnis ratione
              impedit dolore temporibus voluptas!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
              necessitatibus neque similique sapiente sed unde illo odit iste,
              totam officiis doloribus rem quis, mollitia vero.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              ducimus repellat repellendus quibusdam provident accusantium!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
