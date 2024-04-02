import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2  from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/drs.png";
import projImg2 from "../assets/img/tea.png";
import projImg3 from "../assets/img/find.png";

export const Projects = () => {
    const projects = [
        {
            title: "Dish Recommendation Web System Based on Available Ingredients",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Tea is the One",
            description: "Design & Development",
            imgUrl: projImg2,
          },
          {
            title: "Find Hotel",
            description: "Design & Development",
            imgUrl: projImg3,
          },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Welcome to my project showcase, where I bring ideas to life through code and creativity. As a passionate web developer, I've had the pleasure of working on diverse projects that highlight my skills in front-end and back-end development. Here's a glimpse into some of my noteworthy endeavors.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                            <Tab.Pane eventKey="second"></Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}