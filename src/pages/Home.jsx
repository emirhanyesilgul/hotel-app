import React from "react";
import Banner from "../components/Common/Banner/Banner";
import ReservationFilter from "../components/ReservationFilter/ReservationFilter";
import { Container, Row, Col } from "react-bootstrap";
import Features from "../components/Features/Features";
import "./Home.css";
import Gallery from "../components/Gallery/Gallery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from "../components/Cards/Cards";
import { destinationsData, popularsData } from "../utils/data";
import PopularCard from "../components/Cards/PopularCard";
const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };
  return (
    <>
      <Banner />
      <div className="reservation-filter-container">
        <ReservationFilter />
      </div>
      <Features />
      {/* tour seciton start */}

      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Otellerimiz</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return <Cards destination={destination} key={inx} />;
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* tour seciton start */}

      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Popüler Odalar</h1>
              </div>
            </Col>
          </Row>
          <Row>
            {popularsData.map((val, inx) => {
              return (
                <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                  <PopularCard val={val} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">ANTALYA'NIN İNCİSİ</h5>
              <h2 className="heading">
                UNUTULMAZ BİR TATİL İÇİN 1207 HOTEL'İ KEŞFEDİN!
              </h2>
              <p className="text">
                Antalya Konaklı'nın eşsiz sahillerinde, lüks ve konforun
                buluştuğu 1207 Hotel, size unutulmaz bir tatil deneyimi sunuyor.
                Akdeniz'in masmavi sularına nazır odalarımız, dünya
                mutfaklarından lezzetler sunan restoranlarımız ve özel
                plajımızla, tatilinizi bir rüyaya dönüştürüyoruz. Yenilenmiş ve
                dinlenmiş hissetmek için doğru adrestesiniz!
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="tel:6398312365"
                className="secondary_btn bounce"
                rel="no"
              >
                {" "}
                İletişime Geç !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      <section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1>Fotoğraf Galerisi</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
