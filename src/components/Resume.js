import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Tabs, Tab, Media, ProgressBar } from "react-bootstrap";
import "./Resume.css";

function ResumeTest() {
  const reactLevel = 70;
  const JavascriptLevel = 80;
  const expertLevel = 90;
  const Dansk = 80;
  const English = 90;
  const Urdu = 100;
  return (
    <div>
      <Grid fluid className="resumeGrid">
        <Row>
          <Col lg={4} className="leftCol">
            <img
              src="https://i.ibb.co/m6Q881w/nalFoto.png"
              alt="Nazaqat's Foto"
              className="nalFotoFoo"
            />
            <h2>Frontend Web Developer</h2>
            <p>
              {" "}
              React js | Node js | React Bootstrap | Javascript | Knex js |
              Express js | MySQL | Html5 | CSS3 | Wordpress | Github | NAV | AX
              | C5 | E-conomic | Bogholderi | Kunde support | Microsoft Office
              Ekspert | Holdspiller & Selvdrevet | Proaktiv | Ambitiøs...
            </p>
            {/* social links section  */}
            <div className="social-links">
              {/* linkedin */}
              <a
                href="https://www.linkedin.com/in/nazaqat-ali/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i
                  className="fa fa-linkedin-square icon"
                  aria-hidden="true"
                ></i>
              </a>

              {/* Github */}
              <a
                href="https://github.com/Nazaqat"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square icon" aria-hidden="true"></i>
              </a>

              {/* Youtube */}
              <a
                href="https://www.youtube.com/feed/my_videos"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square icon" aria-hidden="true"></i>
              </a>
              {/* Telephone */}
              <a
                href="https://www.linkedin.com/in/nazaqat-ali/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-phone-square icon" aria-hidden="true"></i>
              </a>

              {/* E-mail */}
              <a href="mailto:naa.dk@yahoo.com">
                <i className="fa fa-envelope icon" aria-hidden="true"></i>
              </a>
            </div>{" "}
          </Col>
          <Col lg={7} className="rightCol">
            <div>
              {/* summary section  */}
              <Tabs defaultActiveKey="Summary">
                <Tab eventKey="Summary" title="Summary" className="summaryTab">
                  <p>
                    Talentfuld med behagelig personlighed der har flere år
                    erfaring som kundesupport konsulent til regnskab medarbejder
                    og stærke baggrund inden for regnskab, logistiks & supply
                    chain management, og web udvikling. Dedikeret til at spar
                    50% af tiden på bogholderi & at styrke virksomhedens
                    processerne gennem automatisering af forretningsprocesser.
                  </p>
                </Tab>
                {/* Experience Section  */}
                <Tab eventKey="Experience" title="Experience">
                  <div className="Experience">
                    <h5>
                      <a href="https://www.navidoc.dk/">
                        Kundesupport Konsulent | NaviDoc Aps | 11.2017 Till Dato
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; 1st niveau support til alle NaviDocs kunder vedr.
                      Bogholderi (på front end, Microsoft NAV/ C5) <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Implementerings opgaver i.e. importere Kunde data,
                      opret ERP Connector & task Schedule og opret firma &
                      bruger i NaviDoc workflow, i forbindelse med af nye
                      kundeinstallationer samt opdatering af eksisterende kunder{" "}
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Være med til at ”designe” nye funktioner og moduler
                      i NaviDoc sammen med udvikler <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; QA og aftestning af nye funktioner og moduler i
                      NaviDoc
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Stress og funktionalitet test af applikationer og
                      NaviDoc moduler, test i forskellige miljøer, herunder web
                      og mobil & 3skrive fejlrapporter <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Vedligeholde og udarbejde brugervejledninger til
                      NaviDoc systemer{" "}
                    </p>
                    <h6>Resultater</h6>
                    <span style={{ color: "#302b63" }}>
                      <i
                        class="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    &nbsp;Reduceret problemløsningstid til 50% <br />
                    <span style={{ color: "#302b63" }}>
                      <i
                        class="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    &nbsp; Vendte ulykkelige kunder ind i Wow kunder gennem
                    værditilvækst support <br />
                    <span style={{ color: "#302b63" }}>
                      <i
                        class="fa fa-arrow-circle-right"
                        aria-hidden="true"
                      ></i>
                    </span>{" "}
                    &nbsp;Hurtig respons & aldrig slappe af indtil jobbet er
                    færdigt teori
                  </div>
                  {/* Experience as Chauffør */}
                  <div className="Experience">
                    <h5>
                      <a href="https://taxa.dk/">
                        Chauffør | Copenhagen Taxi Company (4X35) |
                        04.2013-11.2017
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Upheld standarder for professionalisme og
                      diskretion, når man arbejder med højtstående kunder.{" "}
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Håndhævet den on-time transport af gæster og varer
                      til at skabe exceptionelle kundeoplevelser. <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Mappede effektive ruter med minimal forstyrrelse af
                      passagerer eller tidsplaner.
                    </p>
                  </div>
                  {/* Experience as Revisor  */}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.facebook.com/hajimuradtrusteyehospital/">
                        Revisor | Murad Trust Eye Hospital, Pakistan |
                        05.2007-08.2010
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Finansbogholderi <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Debitor & Kreditorstyring <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Afstemninger
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Fakturering
                    </p>
                  </div>
                  {/* Experience as Teacher  */}
                  <div className="Experience">
                    <h5>
                      <a href="https://elitecolleges.edu.pk/">
                        Lærer i handel | Elite Group of Colleges Gujranwala,
                        PAK| 07.2007-08.2010
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Levere forelæsninger til bachelorstuderende på emner
                      som finansielt regnskab & forretningsprincipper. <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Moderat kursusmateriale, undervisningsmetoder og
                      diskussioner i klasserummet <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Samarbejd med kollegaer og medlemmer af
                      erhvervslivet for at løse forskningsudfordringer og
                      udvikle nye programmer og give student adgang til
                      læringsmuligheder som praktikophold.
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp;Relevante opgaver som at designe pensum, kompilere,
                      administrere og karakter eksamener og Karriere rådgivning
                      til studerende.
                    </p>
                  </div>
                </Tab>

                {/* Skill set section  */}
                <Tab eventKey="Skills" title="Skills">
                  <h4>Skill Set !!</h4>
                  <div>
                    <span>Technical Skills</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% React js`}
                    />{" "}
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% Node js`}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% React Bootstrap | Knex js | Express js`}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={reactLevel}
                      variant="info"
                      label={`${reactLevel}% MySql | Wordpress | Github `}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={JavascriptLevel}
                      variant="info"
                      label={`${JavascriptLevel}% Javascript | Html5 | Css3 `}
                    />
                  </div>
                  <br />
                  <div>
                    <span>ERP Skills</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={JavascriptLevel}
                      variant="info"
                      label={`${JavascriptLevel}% NAV | AX | C5 | E-conomic `}
                    />{" "}
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={JavascriptLevel}
                      variant="info"
                      label={`${JavascriptLevel}% Bogholderi `}
                    />
                  </div>
                  <br />
                  <div>
                    <span>Soft Skills</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Microsoft Office Ekspert`}
                    />{" "}
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Holdspiller & Selvdrevet`}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Proaktiv `}
                    />
                    <br />
                    <ProgressBar
                      className="progressBarStylingx"
                      now={expertLevel}
                      variant="info"
                      label={`${expertLevel}% Ambitiøs...`}
                    />
                  </div>
                </Tab>

                {/* Courses Section  */}
                <Tab eventKey="Courses" title="Courses">
                  {/* Full stack web Development courese  */}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.hackyourfuture.dk/">
                        Full-stack Development | Foreningen Hack Your Future |
                        08.2019-04.2020
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; React js |React Bootstrap | Node js | Express js |
                      Knex js <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; JavaScript | TypeScript | JQuery
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Rest API’er <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; MySql
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; HTML5 | CSS3
                    </p>
                  </div>
                  {/* wordpress web Development courese  */}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.youtube.com/watch?v=8AZ8GqW5iak&t=1565s">
                        WordPress Website Development | Tyler Moore Youtube
                        Channel | 07.2020-08.2020
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Wordpress Installation & Updation <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Wordpress Dashboard Management: Theme Management |
                      Webpages Customization
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Import | Export database <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Import demo theme contents
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Webpage Security
                    </p>
                  </div>
                  {/* Google Chrome Developer Tools Crash Course */}
                  <div className="Experience">
                    <h5>
                      <a href="https://www.youtube.com/watch?v=x4q86IjJFag&list=LLGeuBZxo8N7wdMvqLuJXZ-g&index=5&t=0s">
                        Google Chrome Developer Tools Crash Course | Traversy
                        Media | 06.2020
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Inspect | Examine | Edit HTML/CSS
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Enable/Disabled styles | Move & Delete Elements
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Console Logs | Other Commands |Special Console
                      Symbols <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Examine Network & Resources | Use Snippets
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Workspaces & Permanent Changes | View & Remove
                      Browser Storage
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Perform Audits
                    </p>
                  </div>
                  <div className="Experience">
                    {/* Microsoft Dynamics Navision Course  */}
                    <h5>
                      <a href="https://www.udemy.com/">
                        Microsoft Dynamics Navision | Udemy.com <br />
                        Application Setup in Microsoft Dynamics NAV
                        2015|12.2018-01.2019
                      </a>
                    </h5>
                    <p>
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Oprettelse af ny kundevirksomhed ved hjælp af Rapid
                      Start Services <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Konfigurer et datterselskab
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Administrer brugerrettigheder og profiler <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Establishment of postal groups and dimensions
                      <br />
                      <span style={{ color: "#302b63" }}>
                        <i
                          class="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </span>{" "}
                      &nbsp; Etablering af numre serie & trail koder
                    </p>
                  </div>
                </Tab>

                {/* Education section  */}
                <Tab eventKey="Education" title="Education">
                  <div className="Experience">
                    <h5>
                      Kandidat | International Logistik & Supply Chain
                      Management
                    </h5>
                    <a href="https://ju.se/en/about-us/jonkoping-international-business-school.html">
                      Jönköping International Business School | Sverige |
                      08.2010-02.2013
                    </a>
                  </div>
                  <div className="Experience">
                    <h5>Bachelor | Erhvervsøkonomi </h5>

                    <a href="http://pugc.edu.pk/website/">
                      University of the Punjab Gujranwala Campus, Pakistan |
                      03.2003-07.2007
                    </a>
                  </div>
                </Tab>

                {/* Languages section */}
                <Tab
                  eventKey="Languages"
                  title="Languages"
                  style={{ paddingTop: "3%" }}
                >
                  <div>
                    <span>Dansk</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={Dansk}
                      variant="info"
                      label={`${Dansk}% `}
                    />{" "}
                    <br />
                    <span>English</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={English}
                      variant="info"
                      label={`${English}% `}
                    />{" "}
                    <br />
                    <span>Urdu / Hindi</span>
                    <ProgressBar
                      className="progressBarStylingx"
                      now={Urdu}
                      variant="info"
                      label={`${Urdu}% `}
                    />{" "}
                    <br />
                  </div>
                </Tab>
                {/* Recommendations section  */}
                <Tab eventKey="Recommendations" title="Recommendations">
                  <ul className="list-unstyled">
                    <Media as="li" className="recommendtCell">
                      <img
                        width={50}
                        height={50}
                        className="mr-3"
                        src="https://i.ibb.co/MC88FLM/circle-cropped.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>
                          Anders Løkkegaard | Forretningskonsulent | Navidoc ApS
                          | alo@navidoc.dk | +45 xx xx xx xx
                        </h5>

                        <p className="Experience">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                      </Media.Body>
                    </Media>

                    <Media as="li" className="recommendtCell">
                      <img
                        width={50}
                        height={50}
                        className="mr-3"
                        src="https://i.ibb.co/MC88FLM/circle-cropped.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>
                          Muhammad Touseef | Programmør | Navidoc ApS |
                          mt@navidoc.dk | +45 xx xx xx xx
                        </h5>
                        <p className="Experience">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                      </Media.Body>
                    </Media>

                    <Media as="li" className="recommendtCell">
                      <img
                        width={50}
                        height={50}
                        className="mr-3"
                        src="https://i.ibb.co/MC88FLM/circle-cropped.png"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>
                          Benjamin Hughes | Programmør & Lærer | Hack Your
                          Future | xxxxxxxxxxx | +45 xx xx xx xx
                        </h5>
                        <p className="Experience">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                      </Media.Body>
                    </Media>
                    <Media as="li" className="recommendtCell">
                      <img
                        width={50}
                        height={50}
                        className="mr-3"
                        src="https://i.ibb.co/MC88FLM/circle-cropped.png"
                        alt="Generic placeholder"
                      />

                      <Media.Body>
                        <h5>
                          Babak Bandpey | Programmør & Lærer | Hack Your Future
                          | xxxxxxxxxxx | +45 xx xx xx xx
                        </h5>
                        <p className="Experience">
                          Cras sit amet nibh libero, in gravida nulla. Nulla vel
                          metus scelerisque ante sollicitudin commodo. Cras
                          purus odio, vestibulum in vulputate at, tempus viverra
                          turpis. Fusce condimentum nunc ac nisi vulputate
                          fringilla. Donec lacinia congue felis in faucibus.
                        </p>
                      </Media.Body>
                    </Media>
                  </ul>
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default ResumeTest;
