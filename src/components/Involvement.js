import React from "react";
import "./Involvement.css";

const Involvement = () => {
  const involvementOptions = [
    {
      title: "Host a Hack With Me Event",
      description:
        "If you’re passionate about coding and want to bring students together, you can organize a Hack With Me event in your community.",
      list: [
        "Pick a venue in your area.",
        "Plan the activities for the 24-hour hackathon.",
        "Use the name Hack With Me [Your Location] for your event."
      ],
      buttonLabel: "Apply to Host",
      link: "#host-event"
    },
    {
      title: "Join as a Participant",
      description:
        "Are you a high school student who loves building cool projects? Join a Hack With Me event near you!",
      list: [
        "Team up with others.",
        "Learn new skills.",
        "Turn your ideas into reality."
      ],
      buttonLabel: "Find Events",
      link: "#join-participant"
    },
    {
      title: "Become a Mentor",
      description:
        "Are you experienced in coding or project development? Share your knowledge with students as they work on their projects.",
      list: [
        "Guide participants.",
        "Help them overcome challenges.",
        "Make a difference in their journey."
      ],
      buttonLabel: "Sign Up as Mentor",
      link: "#become-mentor"
    },
    {
      title: "Support as a Sponsor",
      description:
        "Sponsors are key to making Hack With Me events successful. Your support helps inspire the next generation of coders.",
      list: [
        "Provide funding.",
        "Offer tools or resources.",
        "Support local events."
      ],
      buttonLabel: "Become a Sponsor",
      link: "#become-sponsor"
    }
  ];

  return (
    <section className="involvement-section">
      <h2 className="section-title">How to Get Involved</h2>
      <p className="section-description">
        There are many ways to be part of Hack With Me. Choose the option that suits you best!
      </p>
      <div className="involvement-cards">
        {involvementOptions.map((option, index) => (
          <div className="card" key={index}>
            <h3 className="card-title">{option.title}</h3>
            <p className="card-description">{option.description}</p>
            <ul className="card-list">
              {option.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <a href={option.link} className="btn">
              {option.buttonLabel}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Involvement;
