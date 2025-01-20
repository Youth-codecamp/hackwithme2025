import React from 'react';
import './ScheduleSection.css';

const ScheduleSection = () => {
  return (
    <div className="schedule-container" id="schedule">
      <h1>Hack With Me – 24-Hour Hackathon Schedule 🕛</h1>
      
      <section className="day">
        <h2 className="schedule_subtitle">Day 1 – Kickoff & Coding</h2>
        
        <div className="event-card">
          <time>9:00 AM - 10:00 AM</time>
          <div>
            <h3>Registration & Breakfast</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>10:00 AM - 10:30 AM</time>
          <div>
            <h3>Opening Ceremony & Welcome</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>10:30 AM - 11:00 AM</time>
          <div>
            <h3>Team Formation & Icebreakers</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>11:00 AM - 12:30 PM</time>
          <div>
            <h3>Lightning Talks & Inspiration 🌟</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>12:30 PM - 1:30 PM</time>
          <div>
            <h3>Lunch Break</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>1:30 PM - 5:30 PM</time>
          <div>
            <h3>Hacking Begins: Coding Session #1</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>5:30 PM - 6:00 PM</time>
          <div>
            <h3>Relaxation Break & Social Hour 🎉</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>6:00 PM - 8:00 PM</time>
          <div>
            <h3>Coding Session #2</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>8:00 PM - 9:00 PM</time>
          <div>
            <h3>End of Day 1 & Tickets Return</h3>
          </div>
        </div>
        
      </section>
      
      <section className="day">
        <h2 className="schedule_subtitle">Day 2 – The Finale</h2>
        
        <div className="event-card">
          <time>9:00 AM - 10:00 AM</time>
          <div>
            <h3>Breakfast & Check-In</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>10:00 AM - 1:00 PM</time>
          <div>
            <h3>Hacking Continues: Coding Session #3</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>1:00 PM - 2:00 PM</time>
          <div>
            <h3>Lunch Break</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>2:00 PM - 6:30 PM</time>
          <div>
            <h3>Project Presentations</h3>
          </div>
        </div>
        
        <div className="event-card">
          <time>6:30 PM - 8:00 PM</time>
          <div>
            <h3>Judging & Award Ceremony🏆</h3>
          </div>
        </div>

        <div className="event-card">
          <time>8:00 PM - 9:00 PM</time>
          <div>
            <h3>Closing & Tickets Return</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleSection;
