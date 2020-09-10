import React from 'react';

function NewLettters() {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-6">
                <div className="newsletter-content">
                  <h2>Newsletter</h2>
                  <p className="para2">Recevez des réductions en avant prémière !</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="input-box-newsletter">
                  <input type="text" placeholder="Email..." />
                  <button type="button">Envoyer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewLettters;
