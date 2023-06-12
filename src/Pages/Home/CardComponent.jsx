import React from "react";
import Reveal from "react-awesome-reveal";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const CardComponent = () => {
  return (
    <>
      <SectionTitle
        subTitle="Grade Programs"
        title="Our Program"
      ></SectionTitle>
      <Reveal cascade damping={0.1} direction="up" duration={500} delay={100}>
        <div className="grid gap-8 md:grid-cols-3 w-11/12 mx-auto mb-7">
          <div className="relative h-[80vh]">
            <div className="h-full">
              <img
                className="h-full object-cover rounded-lg"
                src="https://i.ibb.co/br2mJ4V/cheerful-girl-kid-enjoy-color-painting-with-creativity-ideas-present-messy-hand-home-609648-2261.jpg"
                alt=""
              />
            </div>
            <div className="absolute p-6 rounded-lg text-center text-white bg-opacity-50 bg-black hover:bg-opacity-100 w-full bottom-0 h-1/2">
              <h1 className="font-semibold mt-4 text-3xl">Preschool</h1>
              <p className="my-4">
                Preschool's art programs play a vital role in the development
                and growth of young children.
              </p>
              <button className="btn text-[#ff7703] no-underline  btn-link ">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[80vh]">
            <div className="h-full">
              <img
                className="h-full object-cover rounded-lg"
                src="https://i.ibb.co/64V4bMq/boys-hand-holding-brush-glass-water-259150-59558.jpg"
                alt=""
              />
            </div>
            <div className="absolute p-6 rounded-lg text-center text-white bg-opacity-50 bg-black hover:bg-opacity-100 w-full bottom-0 h-1/2">
              <h1 className="font-semibold mt-4 text-3xl">Schooler</h1>
              <p className="my-4">
                Schooler's Art Programs offer a comprehensive and engaging
                artistic learning experience for students of all ages.
              </p>
              <button className="btn text-[#ff7703] no-underline  btn-link ">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-[80vh]">
            <div className="h-full">
              <img
                className="h-full object-cover rounded-lg"
                src="https://i.ibb.co/VJKzynG/front-view-man-painting-paper-23-2148422181.jpg"
                alt=""
              />
            </div>
            <div className="absolute p-6 rounded-lg text-center text-white bg-opacity-50 bg-black hover:bg-opacity-100 w-full bottom-0 h-1/2">
              <h1 className="font-semibold mt-4 text-3xl">Teenager</h1>
              <p className="my-4">
                Our Teenager's Art Programs are specially designed to ignite
                creativity and artistic expression in teenagers.
              </p>
              <button className="btn text-[#ff7703] no-underline  btn-link ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </>
  );
};

export default CardComponent;
