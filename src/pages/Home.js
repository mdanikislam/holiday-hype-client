import React from "react";
// import bgImage from "./../assets/images/sectionBg.png";
import Bg from "./../assets/images/bg.png";
import Bkimg from "./../assets/images/book-img.svg";
import { Container, Row } from "react-bootstrap";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import Course from "../components/course/Course.js";

const Home = () => {
  const { courses } = useAuth();
  return (
    <div>
      <div
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-gray">ADVENTURE IS WORTHWHILE</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-gray fs-5">
                  Dicover New Places With Us, Adventure Awaits
                </p>
              </Bounce>

              <Bounce>
                <NavLink
                  to="/courses"
                  className="rounded-pill btn btn-primary fs-5 py-2 px-4"
                >
                  View Packages
                </NavLink>
              </Bounce>
            </div>
          </div>
        </Container>
      </div>

      <div
        id="feature"
        className="py-5"
        style={{ background: `white` }}
      >
        <div className="text-center text-gray">
          <Slide left>
            <h1>Packages</h1>
          </Slide>

          <Slide right>
            <p className="mb-0">
              Dicover New Places With Us, Adventure Awaits
            </p>
          </Slide>
        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between ">
            <Row>
              {courses.slice(0, 6)?.map((course) => (
                <Course key={course.key} course={course} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
      {/* book now section  */}

      <section class="book" id="book" style={{
        
        gap: "1.5rem",
        width: "100%",
        alignItems: "center",
        flex: "1 1 40rem",
        width: "100%",
        padding: "5rem"
      }} >

        <h1 class="heading" style={{
          textAlign: "center",
          padding: "2.5rem 0",
          fontSize: "3.5rem",
          background: "rgba(255, 165, 0,.2)",
          color: "var(--orange)",
          borderRadius: ".5rem",
          padding: ".2rem 1rem",
          background: "none"
        }}>
          <span>b</span>
          <span>o</span>
          <span>o</span>
          <span>k</span>
          <span class="space"></span>
          <span>n</span>
          <span>o</span>
          <span>w</span>
        </h1>
        <div className="row" style={{
          display: "flex",
          flex: "1 1 40rem;",
          flexWrap: "wrap",
          width: "100%",
          alignItems: "center"
        }}>
          <div class="image" style={{
            background: `url(${Bkimg})`,
            flex: "1 1 35rem;",
            width: "100%",
          }}>

          </div>
          <form action="" style={{
            flex: "1 1 40rem",
            padding: "2rem",
            borderRadius: "5rem",
          }}>
            <div class="inputBox" style={{
              padding: ".5rem 0",
              width: "100%",
              padding: "1rem",
              border: ".1rem solid rgba(0,0,0,.1)",
              fontSize: "1.7rem",
              color: "#333",
              textTransform: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}>
              <h3>where to</h3>
              <input type="text" placeholder="place name" />
            </div>
            <div class="inputBox" style={{
              padding: ".5rem 0",
              width: "100%",
              padding: "1rem",
              border: ".1rem solid rgba(0,0,0,.1)",
              fontSize: "1.7rem",
              color: "#333",
              textTransform: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}>
              <h3>how many</h3>
              <input type="number" placeholder="number of guests" />
            </div>
            <div class="inputBox" style={{
              padding: ".5rem 0",
              width: "100%",
              padding: "1rem",
              border: ".1rem solid rgba(0,0,0,.1)",
              fontSize: "1.7rem",
              color: "#333",
              textTransform: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}>
              <h3>arrivals</h3>
              <input type="date" />
            </div>
            <div class="inputBox" style={{
              padding: ".5rem 0",
              width: "100%",
              padding: "1rem",
              border: ".1rem solid rgba(0,0,0,.1)",
              fontSize: "1.7rem",
              color: "#333",
              textTransform: "none",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}>
              <h3>leaving</h3>
              <input type="date" />
            </div>
            <input type="submit" class="btn" value="book now" style={{
              display: "inline-block",
              color:"black",
              padding:".8rem 3rem",
              border:".2rem solid",
              marginTop:"2rem",
              background: "orange",
              cursor: "pointer",
              fontSize: "1.7rem",
            }} />
          </form>

        </div>
      </section >

    </div >
  );
};

export default Home;
