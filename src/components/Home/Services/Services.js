import React from 'react';
import service1Img from "../../../assets/images/service1.png"
import service2Img from "../../../assets/images/service2.png"
import service3Img from "../../../assets/images/service3.png"

function Services() {
  return (
    <section className="le-service">
      <div className="container">
        <div className="title">
          <h2>Le service</h2>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <div className="services">
              <img src={service1Img} alt="service" />
              <div className="serv-cont">
                <p className="para1">Livraison, échanges et retours</p>
                <p className="para2">Gratuit</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="services">
              <img src={service2Img} alt="service" />
              <div className="serv-cont">
                <p className="para1">Satisfait ou remboursé</p>
                <p className="para2">30 jours pour changer d’avis</p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="services">
              <img src={service3Img} alt="service" />
              <div className="serv-cont">
                <p className="para1">Paiement 100% sécurisé</p>
                <p className="para2">Naviguez en toute confiance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
