import React from 'react';
import CountUp from 'react-countup';
import './About.css';
import slideImage from '../../assets/aboutus.jpg';
import storyImage from '../../assets/pics/Gallery9.jpg'; 
import missionIcon from '../../assets/missionIcon.png'; 
import visionIcon from '../../assets/vissionIcon.png'; 
import team from '../../assets/profile.jpg'

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="header" style={{ backgroundImage: `url(${slideImage})` }}>
        <div className="overlay">
        </div>
      </div>
      <div className="content">
        <section className="story-section">
          <div className="story-image">
            <img src={storyImage} alt="Story" />
          </div>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Founded with a commitment to revolutionize the real estate industry, The Properties and Builders has grown to become a trusted name in providing comprehensive property solutions. From buying and selling properties to construction and renovation, we are dedicated to delivering excellence and value to our clients.</p>
            <div className="sub-points">
              <div className="sub-point">
                <img src={missionIcon} alt="Mission Icon" />
                <div>
                  <h3>Our Mission</h3>
                  <p>To empower clients with innovative real estate solutions that drive growth, efficiency, and value.</p>
                </div>
              </div>
              <div className="sub-point">
                <img src={visionIcon} alt="Vision Icon" />
                <div>
                  <h3>Our Vision</h3>
                  <p>To be the leading provider of real estate services, transforming the industry and enhancing lives.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="statistics">
          <div className="stat">
            <CountUp start={0} end={150} duration={3} />+
            <h3>Clients</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={300} duration={3} />+
            <h3>Projects Delivered</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={10} duration={3} />+
            <h3>Years in Business</h3>
          </div>
          <div className="stat">
            <CountUp start={0} end={50} duration={3} />+
            <h3>Full-Time Experts</h3>
          </div>
        </section>
        <section className="team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src={team} alt="Team Member" />
              <h3>Team Member Name</h3>
              <p>Role: [Role]</p>
              <p>Background: [Background]</p>
            </div>
            <div className="team-member">
              <img src={team} alt="Team Member" />
              <h3>Team Member Name</h3>
              <p>Role: [Role]</p>
              <p>Background: [Background]</p>
            </div>
          </div>
        </section>
        <section className="approach-section">
          <div className="approach-content">
            <h2>Our Approach</h2>
            <blockquote>"Success is not the key to happiness. Happiness is the key to success."</blockquote>
            <div className="highlight">
              <p>We believe in providing exceptional service.</p>
              <p>We focus on innovative solutions.</p>
              <p>We strive for excellence in every project.</p>
            </div>
            <p>At The Properties and Builders, our approach is centered around understanding our clients' unique needs and delivering tailored solutions that drive success. We are committed to creating value through our expertise and dedication.</p>
          </div>
          <div className="approach-image">
            <img src={slideImage} alt="Approach" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
