import React from "react";
import "./Landingpage.css";
import { Grid, Cell } from "react-mdl";
import { Carousel } from "react-bootstrap";

function Landingpage() {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Grid className="landingpageGrid">
        <Cell col={12}>
          <img
            src="https://i.ibb.co/m6Q881w/nalFoto.png"
            alt="Nazaqat's Foto"
            className="nalFotoFoo"
          />
          <div className="frontEndDiv">
            <h2>Frontend Web Developer</h2>
            <hr />
            <p>
              {" "}
              React js | Node js | React Bootstrap | Javascript | Knex js |
              Express js | MySQL | Html5 | CSS3 | Wordpress | Github <br></br>{" "}
              NAV | AX | C5 | E-conomic | Bogholderi | Kunde support | Microsoft
              Office Ekspert | Holdspiller & Selvdrevet | Proaktiv | Ambitiøs...
            </p>
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
            </div>
          </div>
        </Cell>
        <Cell col={12}></Cell>
      </Grid>
      <div>
        <Carousel className="slides">
          <Carousel.Item>
            <img
              className="d-block"
              src="https://windows10wall.com/wp-content/uploads/2014/07/Black-Stone-Wall-HD-Wallpaper.jpg"
              alt="Projects"
            />

            <Carousel.Caption>
              <h3>Recent Projects</h3>
              <p>React JS, Javascript & Wordpress</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://windows10wall.com/wp-content/uploads/2014/07/Black-Stone-Wall-HD-Wallpaper.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Skills Dashboard</h3>
              <p>Technical Skills | ERP-system Skills| Soft Skills...</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src="https://windows10wall.com/wp-content/uploads/2014/07/Black-Stone-Wall-HD-Wallpaper.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Resume</h3>
              <p>Breif desrciption of all aspects of professional life...</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Landingpage;
