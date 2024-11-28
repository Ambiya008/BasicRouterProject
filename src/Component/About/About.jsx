import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Welcome to <span className="font-semibold text-blue-500">TechSoloist</span>! 
        Our mission is to empower individuals to take control of their health and wellness 
        through intuitive tools and personalized insights. Whether you're tracking fitness, 
        sleep, or overall wellness, we’re here to support you on your journey.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Our Mission</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        We strive to provide a seamless, data-driven platform that helps users achieve their wellness goals. 
        Our focus is on offering actionable health insights and progress tracking tailored to individual needs.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Our Vision</h2>
      <p className="text-gray-600 text-base leading-relaxed">
        Our vision is a world where technology bridges the gap between health and wellness, 
        making it accessible and effective for everyone.
      </p>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
