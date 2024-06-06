const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/q1MgnLp/two-little-girl-painter-art-drawing-park.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-black">
              Develop Your Artistic Skills
            </h1>
            <p className="mb-5">
              Whether you are a beginner or have some experience, our Art &
              Craft School is the perfect place to enhance your artistic skills.
              From basic techniques to advanced concepts, our instructors will
              guide you every step of the way.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <button className="btn text-white hover:bg-[#ff7903c8] btn-primary bg-[#ff7703]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
