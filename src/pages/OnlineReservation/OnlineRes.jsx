import React from 'react';
import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import '../OnlineReservation/onlineRes.css'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const OnlineRes = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // URL'yi oluştururken parametreleri kodlamayı önlemek için
  const iframeSrc = `https://1207boutiquehotel.rezervasyonal.com/?language=tr&${searchParams.toString()}`;
  console.log(iframeSrc);

  return (
    <Container fluid className="p-0">
      <Breadcrumbs title="Rezervasyon" pagename="Rezervasyon Yap" />
      <div className="reservation-wrapper">
        <iframe 
          src={iframeSrc}
          className="reservation-iframe"
          title="Online Reservation"
        ></iframe>
      </div>
    </Container>
  );
}

export default OnlineRes;