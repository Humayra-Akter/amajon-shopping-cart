import React from "react";
import img1 from "../../images/services/event.png";
import img2 from "../../images/services/project.png";
import img6 from "../../images/services/donor.png";
import img4 from "../../images/services/volunteer.png";
import img5 from "../../images/services/staff.png";
import img3 from "../../images/services/region.png";

const Services = () => {
  const services = [
    {
      id: 1,
      img: img1,
      title: "Events",
      details:
        "Join our exciting events and make a difference in your community.",
    },
    {
      id: 2,
      img: img2,
      title: "Projects",
      details: "Get involved in impactful projects that bring positive change.",
    },
    {
      id: 3,
      img: img3,
      title: "Donor",
      details: "Become a donor and support our mission to help those in need.",
    },
    {
      id: 4,
      img: img4,
      title: "Volunteer",
      details: "Volunteer with us and contribute to meaningful causes.",
    },
    {
      id: 5,
      img: img5,
      title: "Staff",
      details: "Join our dedicated team and work towards making a difference.",
    },
    {
      id: 6,
      img: img6,
      title: "Region",
      details: "Explore our regional offices and see where we operate.",
    },
  ];

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-[#daa520] font-bold mb-7">Our Services</h1>
        <p className="text-[#251f0f] font-bold mb-7 mx-96">
          Whether you have questions, need assistance, or want to plan your next
          adventure.
          <p>
            Our friendly team is ready to assist, ensuring a seamless and
            personalized experience.
          </p>
          Get in touch today and let the journey begin!!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-[#fbf5e5] shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={service.img}
              alt={service.title}
              className="h-12 object-cover shadow-2xl mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold text-[#251f0f] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
