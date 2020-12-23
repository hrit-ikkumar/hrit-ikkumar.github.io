import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";
import L_JAVA from '../../assets/img/skills/java.jpg';
import L_XML from '../../assets/img/skills/xml.png';
import L_Firebase from '../../assets/img/skills/firebase.png';
import L_ANDROID from '../../assets/img/skills/android_studio';
import L_MERN from '../../assets/img/skills/MERN.jpg';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Coding Valut (IDE Web App) */}
        <ImageEvent
            date="15/10/2020"
            className="text-center"
            text="Coding Vault (IDE Web App)"
            src={L_EXPRESS}
            alt="Coding Vault (IDE Web App)"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a web app which executes source code in C, C++, Python, Java, &amp; JavaScript. Then returns detailed execution of program with output.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Executes Programs in C, C++, Python, Java, &amp; JavaScript</li>
                          <li>Powered by React.js, Express.js &amp; Node.js</li>
                          <li>NPM Modules are used like codemirror &amp; compile-run.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="EXPRESS"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              EXPRESS
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="NODE"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              NODE
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/hrit-ikkumar/coding-vault"
                  target="_blank"
                >
                  {/*SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrit-ikkumar/coding-vault"
                  target="_blank"
                  >*/}
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrit-ikkumar/coding-vault"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>


          {/* Project: DateYourEve */}
          <ImageEvent
              date="16/12/2020"
              className="text-center"
              text="DateYourEve"
              src={L_ANDROID}
              alt="DateYourEve"
            >
              <div className="d-flex justify-content-between flex-column mt-1">
                <div>
                  <Accordion>
                    <Card>
                      <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-2 text-center accordian-main"
                      >
                        PROJECT DETAILS
                      </Accordion.Toggle>

                      <Accordion.Collapse eventKey="0" className="text-left">
                        <Card.Body>
                          <strong>Description:</strong> The app can be used to manage events. You can create events and check out home feed for all the public events. User can also maintain a profile where he can store basic informations. 
                          <hr />
                          <strong>Features:</strong>
                          <ul className="list-styles pt-1">
                            <li>CRUD Operations on events</li>
                            <li>Firebase Auth &amp; FireStore used for backend</li>
                            <li>RecylerView implemented in fragments.</li>
                          </ul>
                          <hr />
                          <strong>Tech used:</strong>
                          <ul>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_JAVA}
                                  alt="JAVA"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Java
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_XML}
                                  alt="XML"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                XML
                              </span>
                            </li>
                            <li>
                              <span className="p-2">
                                <Image
                                  src={L_Firebase}
                                  alt="Firebase"
                                  rounded
                                  className="image-style1 m-1"
                                ></Image>{" "}
                                Firebase
                              </span>
                            </li>
                          </ul>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
                <div className="d-flex justify-content-between flex-nowrap text-center">
                  <UrlButton
                    href="https://github.com/hrit-ikkumar/DateYourEve"
                    target="_blank"
                  >
                    SEE LIVE (APK)
                  </UrlButton>
                  <UrlButton
                    href="https://drive.google.com/file/d/1TKZRaUQtX5G52FU0sXaWfg8Cbe-WDJAY/view"
                    target="_blank"
                  >
                    SOURCE CODE
                  </UrlButton>
                  <UrlButton
                    href="https://github.com/hrit-ikkumar/DateYourEve"
                    target="_blank"
                  >
                    WATCH VIDEO
                  </UrlButton>
                </div>
              </div>
            </ImageEvent>

          {/* Project: Rist */}
          <ImageEvent
            date="19/06/2020"
            className="text-center"
            text="Ristorante Con Fusion"
            src={L_MERN}
            alt="Ristorante Con Fusion"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> An restaurant web app to show case products and also allow users to maintain their favorite items' list. 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User can login/register in application (implemented using JWT)</li>
                          <li>Single Page Application (SPA) using Redux (MVC Architecture)</li>
                          <li>REST API using Express.js</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_EXPRESS}
                                alt="Express"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Express
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_NODE_JS}
                                alt="Node"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              Node
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_MONGODB}
                                alt="MongoDB"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              MongoDB
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                <UrlButton
                  href="https://github.com/hrit-ikkumar/Ristorante-Con-Fusion"
                  target="_blank"
                >
                {/*}  SEE LIVE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrit-ikkumar/Ristorante-Con-Fusion"
                  target="_blank"
                >
                */}
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://github.com/hrit-ikkumar/Ristorante-Con-Fusion"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;
