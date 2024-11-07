import React from 'react';
import './ScheduleSection.css';

const ScheduleSection = () => {
  return (
    <div className="schedule-container" id="schedule">
      <h1>Hack With Me – 24-Hour Hackathon Schedule 🕛</h1>
      
      <section className="day">
        <h2 className="schedule_subtitle">Day 1 – Kickoff & Coding</h2>
        
        <div className="event-card">
          <time>8:30 AM - 9:30 AM</time>
          <div>
            <h3>Registration & Breakfast</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>9:30 AM - 10:00 AM</time>
          <div>
            <h3>Opening Ceremony & Theme Reveal</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>10:00 AM - 11:00 AM</time>
          <div>
            <h3>Team Formation & Icebreakers</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>11:00 AM - 12:00 PM</time>
          <div>
            <h3>Project Brainstorming & Planning</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>12:00 PM - 1:00 PM</time>
          <div>
            <h3>Lunch Break</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>1:00 PM - 2:00 PM</time>
          <div>
            <h3>Lightning Talks & Inspiration 🌟</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>2:00 PM - 5:00 PM</time>
          <div>
            <h3>Coding Session #1</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>5:00 PM - 7:00 PM</time>
          <div>
            <h3>Evening Fun & Social Hour 🎉</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>7:00 PM - 8:00 PM</time>
          <div>
            <h3>Dinner & Networking</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>8:00 PM - 12:00 AM</time>
          <div>
            <h3>Late-Night Coding 🌙</h3>
          </div>
        </div>
      </section>
      
      <section className="day">
        <h2 className="schedule_subtitle">Day 2 – The Finale</h2>
        
        <div className="event-card">
          <time>12:00 AM - 7:00 AM</time>
          <div>
            <h3>Quiet Zone & Rest Time 💤</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>7:00 AM - 8:00 AM</time>
          <div>
            <h3>Breakfast & Morning Warm-Up</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>8:00 AM - 10:00 AM</time>
          <div>
            <h3>Coding Session #2 & Project Wrap-Up</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>10:00 AM - 11:30 AM</time>
          <div>
            <h3>Presentation Prep & Practice</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>11:30 AM - 1:30 PM</time>
          <div>
            <h3>Project Presentations & Judging</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>1:30 PM - 3:00 PM</time>
          <div>
            <h3>Awards Ceremony & Closing 🏆</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleSection;
