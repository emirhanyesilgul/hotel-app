import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { Container, Row, Col, Card, Form, FloatingLabel } from 'react-bootstrap';
import image from "../../assets/images/new/contact-us.png";
import "../Contact/contact.css";
export const Contact = () => {
    return (

        <>
            <Breadcrumbs title="Contact" pagename="Contact" />
            <section ClassName="contact pt-5">
                <Container>
                  
                    <Row className="py-5">
                        <Col lg="4" md="6" className="mb-4 mb-lg-0">
                            <Card className="border-0 shadow rounded-3 mb-4">
                                <Card.Body className="text-center">
                                    <div className="d-flex justify-content-center align-item-search my-2">
                                        <div className=" bg-info rounded-circle text-info shadow-sm bg-opacity-10 p-3 mb-2">
                                            <i className="bi bi-headset h3"></i>
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold h5">
                                        Bizi Ara
                                    </Card.Title>
                                    <p className="mb-3 body-text">
                                        Bizi her zaman arayın.Bizi her zaman arayın.
                                    </p>
                                    <div className="d-block justify-content-between">
                                        <a type="button" className="btn btn-light me-2 btn-sm">
                                            <i className="bi bi-phone me-1"></i>
                                            +905465465466
                                        </a>
                                        <a type="button" className="btn btn-light me-2 btn-sm">
                                            <i className="bi bi-telephone me-1"></i>
                                            +905465465466
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col lg="4" md="6" className="mb-4 mb-lg-0">
                            <Card className="border-0 shadow rounded-3 mb-4">
                                <Card.Body className="text-center">
                                    <div className="d-flex justify-content-center align-item-search my-2">
                                        <div className=" bg-danger rounded-circle text-danger shadow-sm bg-opacity-10 p-3 mb-2">
                                            <i className="bi bi-envelope h3"></i>
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold h5">
                                        Bize Mail Atın
                                    </Card.Title>
                                    <p className="mb-3 body-text">
                                        Bize Mail Atın.
                                        
                                    </p>
                                    <div className="d-block justify-content-between">
                                        <a type="button" className="btn btn-light me-2 btn-sm">
                                        {event => {
                      event.preventDefault();
                      window.open('https://www.google.com/', '_blank');
    }}
                                            <i className="bi bi-envelope me-2" ></i>
                                            info@keptur.com
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col lg="4" md="6" className="mb-4 mb-lg-0">
                            <Card className="border-0 shadow rounded-3 mb-4">
                                <Card.Body className="text-center">
                                    <div className="d-flex justify-content-center align-item-search my-2">
                                        <div className=" bg-warning rounded-circle text-warning shadow-sm bg-opacity-10 p-3 mb-2">
                                            <i className="bi bi-globe h3"></i>
                                        </div>
                                    </div>
                                    <Card.Title className="fw-bold h5">
                                        Sosyal Medya
                                    </Card.Title>
                                    <p className="mb-3 body-text">
                                        Sosyal Medya
                                    </p>
                                    <div className="d-block justify-content-between">
                                        <a type="button" className="btn btn-light me-2 btn-sm">
                                          <a href="https://www.instagram.com/kepturotel/?igsh=MWV6MnZndTRjbDVidQ%3D%3D" target="_blank" rel="noopener norefferer">  
                                          <i className="bi bi-instagram me-2"></i>
                                            kepturhotel
                                            </a>
                                        </a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="py-5 align-items-center">
                        <Col xl="6" md="6" className="d-none d-md-block">
                            <img src={image} alt="" className="img-fluid me-3" />
                        </Col>
                        <Col xl="6" md="6">
                            <Card className="bg-light p-4 border-0 shadow-sm">
                                <div className="form-box">
                                    <h1 className="h3 font-bold mb-4">Bize Mesaj Gönder</h1>
                                    <Form>
                                        <Row>
                                            <Col md="6">
                                                <FloatingLabel controlId="name" label="İsim" className="mb-4">
                                                    <Form.Control type="text" placeholder="İsim" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col md="6">
                                                <FloatingLabel controlId="email" label="E-Mail Adresi" className="mb-4">
                                                    <Form.Control type="email" placeholder="name@example.com" />
                                                </FloatingLabel>
                                            </Col>
                                            <Col md="12">
                                                <FloatingLabel controlId="phone" label="Telefon Numarası" className="mb-4">
                                                    <Form.Control type="text" placeholder="İsim" />
                                                </FloatingLabel>
                                            </Col>

                                            <Col md="12">
                                                <FloatingLabel controlId="message" label="Mesajınız">
                                                    <Form.Control
                                                        as="textarea"
                                                        placeholder="Mesajınız"
                                                        style={{ height: '126px' }}
                                                    />
                                                </FloatingLabel>
                                            </Col>
                                        </Row>
                                        <button className="primaryBtn mt-3" type="button">Gönder</button>
                                    </Form>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )

}

export default Contact;