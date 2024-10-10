import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import Gallery from '../../components/Gallery/Gallery'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
const PhotoGallery = () => {
  return (
   <>
       <Breadcrumbs title="Galeri" pagename="Galeri" />
       <section className='py-5'>
        <Container>
            <Row>
                <Col>
                <Gallery />
                </Col>
            </Row>
        </Container>
       </section>
   </>
  )
}

export default PhotoGallery