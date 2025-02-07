import React from "react";
import "./Testimonial.css";
const testimonials = [
  {
    text: "The Properties and Builders made our home-buying experience seamless. Their professionalism and attention to detail ensured we found our dream home hassle-free. Highly recommended!",
    stars: 5,
    author: "Amit Khurana",
    position: "Homebuyer",
  },
  {
    text: "Exceptional service from The Properties and Builders! Their team guided us through every step of the property investment process, ensuring transparency and great returns. Trusted experts!",
    stars: 5,
    author: "Ritika Mehta",
    position: "Real Estate Investor",
  },
  {
    text: "From start to finish, The Properties and Builders provided outstanding construction services. Our custom-built villa was completed on time and exceeded our expectations. Great workmanship!",
    stars: 5,
    author: "Vikas Sharma",
    position: "Homeowner",
  },
  {
    text: "Choosing The Properties and Builders for our rental property management was the best decision. Their team ensures smooth tenant dealings and maintenance. Highly professional!",
    stars: 5,
    author: "Neha Arora",
    position: "Property Owner",
  },
];
const videos = [
  { id: "FJB_78eX7s8?si=b8n3JSaEUIT_6qU5", title: "Video 1" }, // Replace with actual YouTube video IDs
  { id: "eGDMIDtbaaw?si=wlHQs6NWiqlHFJMj", title: "Video 2" },
  { id: "YouLWHrdGHo?si=j5tJHC9qiN36Hyco", title: "Video 3" },
  { id: "Wb69mPgB6W0?si=OPqu8LGIDyw7qtc5", title: "Video 3" },
];
const Testimonials = () => {
  return (
    <div className="reviews" >
      <section
        className="testimonials-section"
        style={{
          borderTop: "1xp dashed gray",
        }}
      >
        <h2>Testimonials</h2>
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p>“{testimonial.text}”</p>
              <div className="stars">{"★".repeat(testimonial.stars)}</div>
              <div className="divider"></div>
              <div className="author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="video-section">
      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <div className="w-full">
              <iframe
                              title={`video-${index}`}
                              width="100%"
                              height="100%"
                              src={`https://www.youtube.com/embed/${video.id}`}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="video-iframe"
                            ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Testimonials;
