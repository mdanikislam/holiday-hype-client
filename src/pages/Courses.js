import { Container, Row } from "react-bootstrap";
import useAuth from "./../hooks/useAuth.js";
import Slide from "react-reveal/Slide";
import sectionBG from "./../assets/images/sectionBg.png";
import Course from "../components/course/Course.js";

const Courses = () => {
  const { courses, totalPage, currentPage, setCurrentPage } = useAuth();

  function pageHandler(number) {
    setCurrentPage(number);
  }

  return (
    <div className="py-5" style={{ background: `url(${sectionBG})`,
    backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover", }}>
      <div className="text-center text-white">
        <Slide left>
          <h1> Our All Packages</h1>
        </Slide>

        <Slide right>
          <p className="mb-0">
          Dicover New Places With Us, Adventure Awaits
          </p>
        </Slide>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between  ">
          <Row>
            {courses.map((course) => (
              <Course key={course._id} course={course} />
            ))}
          </Row>
        </div>
        <div className="d-flex justify-content-center ">
          {[...Array(totalPage).keys()].map((number) => (
            <button
              onClick={() => pageHandler(number)}
              key={number}
              className={
                number === currentPage
                  ? "btn btn-primary rounded-0 border"
                  : "btn bg-dark text-white rounded-0 border"
              }
            >
              {number + 1}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
