import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple"> Nandani Sah </span>
            from <span className="purple">Janakpur, Nepal.</span>
            <br />
            I am a final year <span className="purple"> Elctronics, Communication and Information Engineering</span> student passionate about Artificial Intelligence,
            Communication Systems, and Social Impact Tech.
            <br />
            I aim to combine technology and community development for positive change.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity"><ImPointRight /> AI & ML Projects</li>
            <li className="about-activity"><ImPointRight /> Writing Blogs & Articles</li>
            <li className="about-activity"><ImPointRight /> Yoga & Meditation</li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Using technology to empower people and create impact!"
          </p>
          <footer className="blockquote-footer">Nandani Sah</footer>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
