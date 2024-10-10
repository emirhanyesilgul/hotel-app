import React from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { popularsData } from "../../utils/data";
import "./Rooms.css";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Container, Row, Col } from 'react-bootstrap';

const RoomsDetail = () => {
  const { title } = useParams();
  const roomDetail = popularsData.find(room => room.title === decodeURIComponent(title));

  if (!roomDetail) {
    return <div>Oda bulunamadı.</div>;
  }

  const images = roomDetail.images.map(image => ({
    original: image,
    thumbnail: image
  }));

  return (
    <>
      <Breadcrumbs 
        title={roomDetail.title}
        pagename="Odalar"
        childPageName={roomDetail.title}
      />
      <section className='tour_details py-5'>
        <Container>
          <Row>
            <Col md={12}>
              <h1 className='fs-2 font-bold mb-4'>{roomDetail.title}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <ImageGallery items={images} />
            </Col>
            {/* Diğer içerik buraya */}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default RoomsDetail;