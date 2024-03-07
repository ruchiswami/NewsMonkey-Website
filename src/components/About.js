// About.js
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'About - NewsMonkey';
  }, []);

  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h2 className="display-4">About NewsMonkey</h2>
        <p className="lead">
          Welcome to NewsMonkey, your premier source for staying informed in today's fast-paced world. We're not just another news platform; we are your reliable companion in the world of news, delivering stories that matter across various categories.
        </p>
        <p>
          At NewsMonkey, we strive to provide you with accurate, unbiased, and timely information. Our dedicated team of journalists and contributors ensures that you receive top-notch coverage in areas such as business, entertainment, health, science, sports, and technology.
        </p>
        <p>
          Why choose NewsMonkey? We understand the importance of staying well-informed in a constantly evolving landscape. With a user-friendly interface and a commitment to delivering quality content, we aim to be your go-to destination for the latest updates. Explore our website and discover a world of knowledge at your fingertips.
        </p>
        <p className="font-italic">
          Join us on this journey of exploration, learning, and discovery. NewsMonkey - Your Window to the World.
        </p>
      </div>
    </div>
  );
};

export default About;


