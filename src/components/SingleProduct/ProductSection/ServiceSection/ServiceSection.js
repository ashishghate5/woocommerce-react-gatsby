import React from 'react';
import service1xImg from "../../../../assets/images/service1x.png"
import service2xImg from "../../../../assets/images/service2x.png"
import service3xImg from "../../../../assets/images/service3x.png"

function ServiceSection() {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h2>Le service</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="services-prod">
            <img src={service1xImg} alt="service" />
            <div className="serv-cont-prod">
              <p className="para3">Livraison, échanges <br />et retours</p>
              <p className="para4">Gratuit </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-prod">
            <img src={service2xImg} alt="service" />
            <div className="serv-cont-prod">
              <p className="para3">Satisfait ou remboursé </p>
              <p className="para4">30 jours pour<br /> changer d’avis </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="services-prod">
            <img src={service3xImg} alt="service" />
            <div className="serv-cont-prod">
              <p className="para3">Paiement 100% sécurisé </p>
              <p className="para4">Naviguez en toute<br /> confiance </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
