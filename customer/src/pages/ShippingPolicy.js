import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
const ShippingPolicy = () => {
  return (
    <>
      <Meta title="Shipping Policy" />
      <BreadCrumb title="Shipping Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <div>
                <h1>Shipping Policy</h1>
                <br />
              </div>
              <div>
                <h4>Wool's World Shipping Method</h4>
                <br />
                <h5>What is the shipping method of L1B Shop?</h5>
                <p>
                  Within 24 hours of receiving your order, we will contact and
                  deliver to your requested address.
                </p>
                <p>
                  + Hanoi City Center: Within 24h-48h (except for unforeseen
                  circumstances, we will inform you to change the delivery time)
                </p>
                <p>
                  + Provinces outside Hanoi city center have a delivery time of
                  4-7 days (counting from the day we receive payment
                  confirmation from your order through our partner banks and
                  online payment gateways)
                </p>
                <br />
              </div>
              <div>
                <h5>How is the shipping fee calculated?</h5>
                <p>
                  All orders on the website will be transferred to our shipping
                  partners, Giao Hàng Tiết Kiệm and Giao Hàng Nhanh, with the
                  most convenient and economical package rates for customers
                  when purchasing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
