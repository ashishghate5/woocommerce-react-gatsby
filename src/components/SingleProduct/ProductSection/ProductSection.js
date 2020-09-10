import React from 'react';
import MainProductSection from "./MainProductSection/MainProductSection"
import ServiceSection from "./ServiceSection/ServiceSection"

function ProductSection() {
  return (
    <section>
      <div className="container-small recher-prod">
        <MainProductSection />
        <ServiceSection />
      </div>
    </section>
  );
}

export default ProductSection;
