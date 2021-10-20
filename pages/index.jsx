import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TeamMember from "../components/TeamMember";
import Slider from "react-slick";

const HomeSlider = () => {
  const sliderData = require("../data/homeSlider.json");
  const sliderSettings = {
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider className="card-slider" {...sliderSettings}>
      {sliderData.map((data, index) => (
        <div key={data.repo} className="card-wrapper">
          <article className="card">
            <picture className="card__background">
              <img src={data.image} />
            </picture>
            <div className="card__category">{data.category}</div>
            <h3
              className="card__title"
              data-repo={data.repo}
              data-description={data.description}
            >
              Pengenalan {data.repo}
            </h3>
            <button className="card__button px-3 py-1 rounded">
              Let's Go! &raquo;
            </button>
          </article>
        </div>
      ))}
    </Slider>
  );
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Wrapper */}
      <div className="container max-w-6xl mx-auto">
        {/* Home Section */}
        <section
          id="homes"
          className="h-full lg:flex lg:flex-col lg:justify-center group"
        >
          <svg
            aria-hidden="true"
            className="absolute w-0 h-0 overflow-hidden"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <symbol id="icon-cross" viewBox="0 0 32 32">
                <title>close</title>
                <path d="M31.7 25.7L22 16l9.7-9.7a1 1 0 0 0 0-1.4L27.1.3a1 1 0 0 0-1.4 0L16 10 6.3.3a1 1 0 0 0-1.4 0L.3 4.9a1 1 0 0 0 0 1.4L10 16 .3 25.7a1 1 0 0 0 0 1.4l4.6 4.6a1 1 0 0 0 1.4 0L16 22l9.7 9.7a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z" />
              </symbol>
            </defs>
          </svg>

          <div className="page" data-modal-state="closed">
            <div className="container-page flex flex-col">
              <div className="flex items-center justify-center pt-16 pb-5">
                <h1 className="tagline font-extrabold uppercase text-center">
                  Learn with Our <br />
                  Community
                </h1>
              </div>

              <HomeSlider />
            </div>
          </div>
        </section>
        {/* End Home Section */}

        {/* About Section */}
        <section id="about" className="px-4 group">
          <div className="bg-blue-600 w-full rounded-2xl lg:grid lg:grid-cols-2 p-5">
            <div className="flex items-center justify-center flex-col mb-4 lg:mb-0">
              <h1 className="text-5xl font-extrabold text-white tracking-wide">
                Get to know Us
              </h1>
              <div className="w-36 h-3.5 bg-white mt-6 rounded-xl -ml-12"></div>
            </div>
            <div className="flex items-center">
              <p className="text-base text-white tracking-wider">
                Bellshade adalah organisasi yang bergerak di bidang edukasi dan
                bersifat sumber terbuka (open source). Bellshade dikelola dan
                berada di bawah naungan komunitas Web Programming UNPAS (WPU).
                <br />
                <br />
                Nama Bellshade sendiri diambil dari bahasa Inggris yang berarti
                "penutup lampu belajar" yang mengarahkan cahaya dari lampu agar
                fokus pada tujuan dan tepat sasaran. Dengan nama ini, Bellshade
                diharapkan dapat menjadi wadah untuk menerangi dan mengarahkan
                serta memberikan ilmu kepada orang yang membutuhkan, terutama di
                bidang teknologi.
              </p>
            </div>
          </div>
        </section>
        {/* End About Section */}

        <TeamMember />

        <Footer />
      </div>
      {/* End Wrapper */}
    </>
  );
}
