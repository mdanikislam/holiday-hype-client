import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
// import sectionBg from "./../assets/images/sectionBg.png";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
const About = () => {
  return (
    <div
      style={{ background: "white", backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-gray mb-4">
            WELCOME TO HOLIDAY-HYPE
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-gray">About Us</h5>
              <p className="text-muted">
                Vestibulum in accumsan magna mauri tincidunt turpisligula semper namc orci magec dia commodo viverra eget et leo curabitur dia consequat condimentum nunc molestie feugiat elit proin id viverra diam massa aliquam velit.
              </p>
              <p className="text-muted">
              Nullam dapibus rhoncus vehicula sed lorem est consectet etios interdum do vul putate vestibulum ullamcorper sapien eget sodales feugiat donec turpis etiam justo..
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-gray">Our Vision</h5>
              <p className="text-muted">
                We are a passionate team with the vision of delivering
                the best & exiting experience for customers
              </p>
              <h5 className="text-gray">Our Mission</h5>
              <p className="text-muted">
              consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white">Sign up for our monthly newsletter</h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-gray">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-gray"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
