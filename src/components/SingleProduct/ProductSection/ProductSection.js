import React from 'react';
import MainProductSection from "./MainProductSection/MainProductSection"
import ServiceSection from "./ServiceSection/ServiceSection"

function ProductSection(props) {
  return (
    <section>
      <div className="container-small recher-prod">
        <MainProductSection productId={props.productId}/>
        <ServiceSection />
      </div>
    </section>
  );
}

export default ProductSection;
