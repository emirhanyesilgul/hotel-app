import React from "react";
import "../Features/features.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Features = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
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
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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

  const featureList = [
    {
      id: 0,
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      title: "Lezzetli Kahvaltı",
      des: "Günü taze ve yerel lezzetlerle dolu zengin bir kahvaltı ile başlayın.",
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      title: "Havalimanı Transferi",
      des: "Rahat ve güvenli havalimanı transfer hizmeti ile seyahatinizi kolaylaştırın.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      title: "Şehir Rehberi",
      des: "Tarihi bölgelere yakınlığımızla şehri keşfetmek hiç bu kadar kolay olmamıştı.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
      title: "Barbekü Partisi",
      des: "Açık havada keyifli bir barbekü partisiyle unutulmaz anılar biriktirin.",
    },
  ];

  return (
    <section className="feature-section">
      <Container>
        <Row>
          <Col md="12">
            <Slider {...settings}>
              {featureList.map((feature) => (
                <div key={feature.id}>
                  <Card className="feature-card">
                    <Card.Img
                      variant="top"
                      src={feature.image}
                      alt={feature.title}
                    />
                    <Card.Body>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.des}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;