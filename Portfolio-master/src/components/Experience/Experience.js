import React from "react";
import "./Experience.css";
import Locus from "../../Assets/locus.jpg";
import Coordinator from "../../Assets/jh2.jpg";
import YSB from "../../Assets/ysbF1.jpg";
import NT from "../../Assets/ntbns.jpg";
import SE from "../../Assets/SE.jpg";
import Bookbus from "../../Assets/Bookbus.jpg";
import VN from "../../Assets/vn.jpg";
import yuwa from "../../Assets/yuwa.jpg";
import PDSC from "../../Assets/pdsc.jpg";
import NCC from "../../Assets/ncc.jpeg";

 // Make sure the filename matches

const experiences = [
  {
    title: "Marketing Director",
    organization: "LOCUS – IOE Pulchowk Campus",
    date: "Jun 2025 – Present",
    description: "Led marketing and Sponsorship campaigns for events, found potential sponsors and collected money, and increased participation significantly.",
    photo: Locus,
  },
  {
    title: "Coordinator",
    organization: "Janakpur Hackathon – Nepal's first ever hackathon in Madhesh",
    date: "Oct 2024 – Dec 2024",
    description: "Developed AI-based solutions for social impact projects, collaborated in agile teams, and presented research findings.",
    photo: Coordinator,
  },
  {
    title: "Youth Sounding Board",
    organization: "European Union in Nepal",
    date: "Jun 2023 – Nov 2024",
    description: "Participated in youth policy initiatives, provided recommendations to improve community engagement, and helped organize events.",
    photo: YSB,
  },
  {
    title: "BookBus Fellow",
    organization: "US Embassy Nepal",
    date: "Oct 2024 – Jun 2025",
    description: "Worked on improving literacy among children in rural areas by conducting workshops, creating educational resources, and mentoring volunteers.",
    photo: Bookbus, // Corrected
  },
  {
    title: "STEM Educator",
    organization: "Kathmandu Metropolitan City",
    date: "Apr 2023 – Apr 2024",
    description: "Taught STEM subjects to school students, conducted hands-on workshops, and encouraged problem-solving skills.",
    photo: SE,
  },
  { title: "Advocate", 
organization: "Yuwa", 
date: "Nov 2023 – Dec 2023", 
description: "Taught STEM subjects to school students, conducted hands-on workshops, and encouraged problem-solving skills.",
 photo: yuwa, }, 
{
 title: "Executive Member",
 organization: "PDSC, Pulchowk Campus",
 date: "Jun 2022 – Dec 2023",
 description: "Taught STEM subjects to school students, conducted hands-on workshops, and encouraged problem-solving skills.",
 photo: PDSC, },
 { 
title: "Executive", 
organization: "Nepal Terai Bidhyarthi Navjagaran Sangh, Pulchowk Campus", 
date: "Jun 2022 – Jun 2023",
 description: "Taught STEM subjects to school students, conducted hands-on workshops, and encouraged problem-solving skills.",
 photo: NT, },
 {
 title: "Executive", 
organization: "National Cadet Corps Alumni Association Nepal ",
 date: "Jun 2022 – Dec 2022", 
description: "Taught STEM subjects to school students, conducted hands-on workshops, and encouraged problem-solving skills.", 
photo: NCC, }, 
{
 title: "Treasurer",
 organization: "Viswa Batika Club",
 date: "Jun 2021 – Dec 2021",
 description: "Taught STEM subjects to school students, conducted hands-on workshops, and encouraged problem-solving skills.",
 photo: VN, },

  
];

export default function InteractiveFlipTimeline() {
  return (
    <section className="timeline-section">
      <h2 className="section-title">
        My <span className="highlight">Experience</span>
      </h2>
      <div className="interactive-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flip-card"
            tabIndex={0} // keyboard accessible
            aria-label={`${exp.title} at ${exp.organization} from ${exp.date}. Click to view description`}
          >
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <img src={exp.photo} alt={exp.title} className="card-photo" />
                <h3>{exp.title}</h3>
                <h9>{exp.organization}</h9>
                <span className="date">{exp.date}</span>
              </div>
              {/* Back */}
              <div className="flip-card-back">
                <p>{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
