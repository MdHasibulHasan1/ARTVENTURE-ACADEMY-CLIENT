import { Reveal } from "react-awesome-reveal";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const JoinOurClass = () => {
  const skillsData = [
    { title: "Teaching Ability", percentage: 90 },
    { title: "Student Satisfaction", percentage: 80 },
  ];

  return (
    <div className="grid lg:grid-cols-2 w-11/12 mx-auto box-border items-center pb-7 my-7">
      <div className="my-16">
        <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="">
            <div className="flex flex-col gap-4">
              <Reveal cascade damping={0.1} direction="up" duration={500}>
                <p className="text-sm tracking-[4px] uppercase">
                  Join Our Class
                </p>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Learn The Art From The Core & Become Mastery
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec.
                </p>
              </Reveal>
            </div>
            <div className="w-full flex flex-col my-3 gap-2">
              {skillsData.map((skill, index) => (
                <Reveal
                  key={index}
                  cascade
                  damping={0.1}
                  direction="up"
                  duration={500}
                  delay={index * 100}
                >
                  <div className="overflow-x-hidden my-2">
                    <p className="text-sm uppercase font-medium">
                      {skill.title}
                    </p>
                    <div
                      style={{ width: `${skill.percentage}%` }}
                      className={`h-2 bg-opacity-50 bg-[#ff7703] from-blue-600 rounded-md relative`}
                    >
                      <div
                        className={`h-full bg-[#ff7703] rounded-md`}
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <span className="absolute -top-7 right-0">
                          {skill.percentage}%
                        </span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
        <button className="btn text-white hover:bg-[#ff7903c8] btn-primary bg-[#ff7703]">
          Learn More
        </button>
      </div>
      <div className="flex gap-3 items-center relative">
        <div className="w-7/12">
          <img
            className="p-2 w-full rounded-xl object-cover h-full"
            src="https://i.ibb.co/b6td7GR/brushes-mug-23-2148023634.jpg"
          />
        </div>
        <div className="absolute right-0 -top-10 w-5/12 h-full">
          <div className="h-3/5 w-full ml-auto">
            <img
              className="h-full object-cover w-full py-2 rounded-xl"
              src="https://i.ibb.co/VBNTX0D/close-up-kids-painting-as-team-23-2149027421.jpg"
            />
          </div>
          <div className="h-1/2 w-full ml-auto">
            <img
              className="h-full object-cover w-full px-2 rounded-xl"
              src="https://i.ibb.co/T8Lfq4n/master-decorating-tea-glass-with-acrylic-114579-12112.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurClass;
