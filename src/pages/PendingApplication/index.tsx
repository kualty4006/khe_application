import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "reactstrap";

//Import Images
import img1 from "../../assets/images/small/img-1.jpg";
import img3 from "../../assets/images/small/img-3.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img5 from "../../assets/images/small/img-5.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

import img8 from "../../assets/images/small/pexels-photo-546819.jpg";

//Import Light box
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

import { GalleryData, GalleryDataPending } from "../../common/data/gallery";

const PendingApplication = () => {
  document.title = "Pending Applications";
  const [displayCategory, setCategory] = useState<string>("All");
  const [Modal, setModal] = useState<boolean>(false);
  const [photoIndex, setphotoIndex] = useState<number>(0);

  const images = [img8, img3, img4, img5, img6, img7];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Apps" breadcrumbItem="Pending Applications" />

          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader className="justify-content-between d-flex align-items-center">
                  <h4 className="card-title">Gallery Photos</h4>
                  <p className="m-0 badge badge-primary-subtle py-2">
                    Dashonic Only
                  </p>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg={12}>
                      <div className="text-center">
                        <ul
                          className="list-inline categories-filter button-group"
                          id="filter"
                        >
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              onClick={() => setCategory("All")}
                              className={
                                displayCategory === "All"
                                  ? "categories active"
                                  : "categories"
                              }
                            >
                              All
                            </Link>{" "}
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              onClick={() => setCategory("engineering")}
                              className={
                                displayCategory === "engineering"
                                  ? "categories active"
                                  : "categories"
                              }
                            >
                              Engineering
                            </Link>{" "}
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              onClick={() => setCategory("health")}
                              className={
                                displayCategory === "health"
                                  ? "categories active"
                                  : "categories"
                              }
                            >
                              Health
                            </Link>{" "}
                          </li>
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              onClick={() =>
                                setCategory("sciences_and_technology")
                              }
                              className={
                                displayCategory === "sciences_and_technology"
                                  ? "categories active"
                                  : "categories"
                              }
                            >
                              Sciences and Technology
                            </Link>{" "}
                          </li>
                          {/* <li className="list-inline-item">
                            <Link
                              to="#"
                              onClick={() => setCategory("development")}
                              className={
                                displayCategory === "development"
                                  ? "categories active"
                                  : "categories"
                              }
                            >
                              Development
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                  <Row className="gallery-wrapper">
                    {GalleryDataPending.filter(
                      ({ category }: any) =>
                        category.includes(displayCategory) ||
                        displayCategory === "All"
                    ).map(({ title, image, author }, key) => (
                      <Col key={key} xl={4} sm={6} className="element-item">
                        <Card className="gallery-box">
                          <div className="gallery-container">
                            <Link
                              className="image-popup"
                              to={image}
                              title={title}
                              onClick={event => {
                                event.preventDefault();
                                setModal(!Modal);
                                setphotoIndex(key);
                              }}
                            >
                              <img
                                className="gallery-img img-fluid img-thumbnail mx-auto"
                                src={image}
                                alt={title}
                              />
                              <div className="gallery-overlay"></div>
                            </Link>
                          </div>

                          <div className="box-content p-3">
                            <h5 className="display-6">{title}</h5>
                            <p className="post">
                              {" "}
                              <Link to="#" className="text-body">
                                {author}
                              </Link>
                            </p>
                            <Button
                              type="button"
                              color="primary"
                              outline
                              className="btn-rounded post mt-3"
                            >
                              More
                            </Button>
                          </div>
                        </Card>
                      </Col>
                    ))}

                    {/* lightbox for portfolio images */}
                    {Modal && (
                      <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={
                          images[
                            (photoIndex + images.length - 1) % images.length
                          ]
                        }
                        imagePadding={100}
                        onCloseRequest={() => setModal(false)}
                        onMovePrevRequest={() =>
                          setphotoIndex(
                            (photoIndex + images.length - 1) % images.length
                          )
                        }
                        onMoveNextRequest={() =>
                          setphotoIndex((photoIndex + 1) % images.length)
                        }
                      />
                    )}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default PendingApplication;
