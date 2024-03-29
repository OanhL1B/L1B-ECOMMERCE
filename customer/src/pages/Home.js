import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import ReactStars from "react-rating-stars-component";
import wish from "../images/wish.svg";
import { addToWishlist } from "../features/products/productSlice";
import BlogCard from "../components/BlogCard";
const Home = () => {
  const productState = useSelector((state) => state.product.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  const addToWish = (id) => {
    dispatch(addToWishlist(id));
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3 "
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.00 or <br /> $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>ButIPadAir</h5>
                  <p>
                    From $1699.00 or <br /> $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>ButIPadAir</h5>
                  <p>
                    From $1699.00 or <br /> $64.62/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="small banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>ButIPadAir</h5>
                  <p>
                    From $1699.00 or <br /> $64.62/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.images} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap  align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="watch" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="watch" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                        >
                          <img src={wish} alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        {/* <img
                          src={item?.images[0].url}
                          className="img-fluid mx-auto"
                          alt="product image"
                          width={160}
                        /> */}
                        <img src={item?.images[0].url} alt="product" />
                        <img
                          src={item?.images[0].url}
                          alt=""
                          class=" w-full h-full mx-auto"
                        />
                      </div>

                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />

                        <p className="price">{item?.price}đ</p>
                      </div>

                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>

                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>

                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/1.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 8</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img src="images/tab3.jpg" className="img-fluid" alt="famous" />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">COLOR DIVERSITY</h5>
                <h6 className="text-dark">BEST CHOICE FOR BEGINER</h6>
                <p className="text-dark">LOVELY PRICE</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/smartwatch.jpg.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">COLOR DIVERSITY</h5>
                <h6 className="text-dark">SUPER SOFT</h6>
                <p className="text-dark">LOVELY PRICE</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/smartwatch.jpg.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">COLOR DIVERSITY</h5>
                <h6 className="text-dark">BEST CHOICE FOR STUFFED DOLLS</h6>
                <p className="text-dark">LOVELY PRICE</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct
                    image={item?.images[0]?.url}
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    brand={item?.brand}
                    totalrating={item?.totalrating.toString()}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popular Products</h3>
          </div>
        </div>

        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id);
                          }}
                        >
                          <img src={wish} alt="wishlist" />
                        </button>
                      </div>
                      <div className="product-image">
                        <img src={item?.images[0].url} alt="product" />
                        <img
                          src={item?.images[0].url}
                          alt=""
                          class=" w-full h-full mx-auto"
                        />
                      </div>

                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />

                        <p className="price">{item?.price}đ</p>
                      </div>

                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          {/* <button className='border-0 bg-transparent'>
                            <img src={addcart} alt="addcart" />
                          </button > */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25 ">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25 ">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blog</h3>
          </div>
        </div>
        <div className="d-flex gap-2">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </>
  );
};

export default Home;
