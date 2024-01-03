import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const RefundPolicy = () => {
  return (
    <>
      <Meta title="Refund Policy" />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div>
                <h1>Return and Refund Policy</h1>
                <br />
              </div>
              <div>
                <h5>1. Conditions for returns</h5>
                <p>
                  - The return period is within 03 days from the date of
                  purchase (receipt of goods)
                </p>
                <p>
                  - The returned item must have the original tags, labels,
                  cards, be unused, and accompanied by the purchase invoice
                </p>
                <p>
                  - Customers can return products due to manufacturing defects.
                </p>
              </div>
              <div>
                <h5>2. Value of the returned item:</h5>
                <p>
                  - The exchanged product must have an equivalent or higher
                  value than the previously purchased item.
                </p>
              </div>
              <div>
                <h5>3. Timeframe for handling returns</h5>
                <p>
                  - Immediate handling for exchanged products within 01 day (24
                  hours)
                </p>
                <p>
                  - Products requiring assessment due to manufacturing defects
                  will be resolved within 03 days (excluding Sundays and
                  holidays)
                </p>
              </div>
              <div>
                <h5>5. Return method:</h5>
                <p>
                  - Customers are requested to package the items and take them
                  to the nearest post office for return shipping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
