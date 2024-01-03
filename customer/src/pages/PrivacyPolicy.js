import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const PrivacyPolicy = () => {
  return (
    <>
      <Meta title="Privacy Policy" />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div>
                <h1>Privacy Policy</h1>
                <br />
              </div>
              <div>
                <h5>1. Purpose and scope of collection</h5>
                <p>
                  Thank you for visiting our website. To use our services on the
                  website, you may be required to register personal information
                  with us, such as:
                </p>
                <p>- Full name, contact address</p>
                <p>- Email, mobile phone number</p>
                <h5>2. Use of information</h5>
                <p>
                  http://shop.l1b.vn/ collects and uses personal information for
                  appropriate purposes and fully complies with this "privacy
                  policy". We only use your information internally within the
                  company or may disclose it to third parties such as agents,
                  other service providers to provide the best and most optimal
                  service for you.
                </p>
                <h5>3. Information storage duration</h5>
                <p>
                  Your information will be stored in our company's internal
                  system until you request to cancel the provided information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
