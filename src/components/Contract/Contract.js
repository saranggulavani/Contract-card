import React from "react";
import "./Contract.css";
import { Container, Card, Col, Row, Pagination } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";

const Contract = () => {
  let active = 6;
  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <Container>
        <Col
          md={12}
          className="d-flex justify-content-center align-items-center py-5"
        >
          <Card className="bg-light rounded-0">
            <Col xs={12} md={12}>
              <Card.Text className="h3 fw-light text-center pt-4 position-relative">
                This contract lost
              </Card.Text>
              <div className="" style={{ cursor: "pointer" }}>
                <VscChromeClose
                  style={{ backgroundColor: "#2a3052" }}
                  className="h1 p-2 text-white rounded-bottom position-absolute top-0 end-0"
                />
              </div>
              <Card.Body className="">
                <Card.Text className="bg-white py-3 px-3 text-center border border-2">
                  Win payout if the last digit of Bear Market Index is 6 after 7
                  ticks.
                </Card.Text>
                <Row className="pt-3">
                  <Col className="text-center">
                    <Card.Text>Buy Price</Card.Text>
                    <Card.Text>10.00 USD</Card.Text>
                  </Col>
                  <Col className="text-center border-start">
                    <Card.Text>Final Price</Card.Text>
                    <Card.Text>0.00 USD</Card.Text>
                  </Col>
                  <Col className="text-center border-start">
                    <Card.Text>Loss</Card.Text>
                    <Card.Text>-10.00 USD</Card.Text>
                  </Col>
                </Row>
                <Card.Text className="text-center pt-3">
                  Your transaction reference is 284696602028
                </Card.Text>
                <Row className="pt-2">
                  <Col md={8} className="d-flex justify-content-end">
                    <Card.Text>
                      <BsClock className="mx-2 mb-1" />
                      06:13:10
                    </Card.Text>
                  </Col>
                  <Card.Text
                    className="h1 fw-light text-center"
                    style={{ color: "#C2C2C2" }}
                  >
                    1,045.449<span className="fw-bold text-dark">2</span>
                  </Card.Text>
                </Row>
                <Row>
                  <Col
                    xs={12}
                    md={12}
                    className="d-flex justify-content-center pt-2"
                  >
                    <Pagination>{items}</Pagination>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer
                className="rounded-0"
                style={{ backgroundColor: "#E98024" }}
              >
                <Card.Text className="text-center text-white fw-light">
                  Account balance : 9,980.00 USD
                </Card.Text>
              </Card.Footer>
            </Col>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default Contract;
