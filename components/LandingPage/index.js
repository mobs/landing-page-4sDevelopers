import React from "react";
import Form from "../Form";
import Card from "../Card";
import { IoMdCheckmarkCircle } from "react-icons/io";
import {
  amenities,
  companyAddress,
  companyName,
  highlights,
  locationAdvantages,
} from "@/utils/constants";
import ConnectButton from "../ConnectButton";
import FloorPlan from "../FloorPlan";

const LandingPage = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="md:flex lg:flex-row flex-col top-24 pb-8" id="home">
        <img src="/bg.jpg" className="absolute w-[100%] h-[850px]" />
        <div className="flex flex-col gap-2 lg:w-1/2 w-screen md:m-16 lg:mt-48 z-20 text-white justify-center">
          <p className="z-10 font-bold md:text-5xl text-2xl font-serif lg:block flex justify-center lg:mt-0 mt-4">
            {companyName}
          </p>
          <p className="z-10 font-bold md:text-3xl text-lg font-serif lg:block flex justify-center">
            {" "}
            At {companyAddress}{" "}
          </p>
          <div className="bg-white z-10 mt-8 md:text-2xl text-base font-semibold text-slate-700 p-4 rounded-bl-xl rounded-tr-xl w-3/4 lg:ml-0 ml-12">
            <p> Starting Price @Rs. 3.99 Cr* Onwards + PLC + GST </p>
            <p> Area - 3 BHK: 2200-2500 sq.ft. + Servant </p>
            <p> Area - 4 BHK: 3100-3400 sq.ft. + Servant </p> 
          </div>

          <div className="lg:hidden w-3/4 mt-16 z-10 block lg:ml-0 ml-12 ">
            <Form />
          </div>
        </div>

        <div className="lg:w-1/2 w-screen z-20 lg:mt-24 lg:block hidden">
          <div className="mt-16 lg:w-3/4 rounded-lg">
            <Form />
          </div>
        </div>
      </div>

      <div className="lg:mt-[18rem]" id="about us">
        <p className="font-serif text-center md:text-4xl text-2xl underline underline-offset-8 decoration-slate-500 text-slate-700 ">
          {" "}
          About {companyName}{" "}
        </p>
        <div className="flex md:ml-12 md:mr-12 ml-4 mr-4">
          <div className="mt-16 flex gap-24">
            <img
              src="https://tulipmonsellaa.com/wp-content/uploads/elementor/thumbs/5icon-qcyxz2jquavowjs0cnsukawlerupcxb7jn9y0b3sw0.png"
              className="-mt-4 h-32 w-32 md:block hidden"
            />
            <div className="flex flex-col gap-4 md:w-3/4 w-full text-lg">
              <p className="text-center text-sm">
                Welcome to the pinnacle of luxurious living in Gurgaon. 4S
                Developers introduces its flagship project in Sector 59, a
                testament to modern housing blended with indulgent living.
              </p>
              <p className="text-center text-sm">
                Our projects, nestled in the vibrant Millennium City, are the
                epitome of luxury and eco-friendly living, designed for those
                who seek an exclusive lifestyle.
              </p>
            </div>
            <img
              src="https://tulipmonsellaa.com/wp-content/uploads/elementor/thumbs/5icon-qcyxz2jquavowjs0cnsukawlerupcxb7jn9y0b3sw0.png"
              className="-mt-4 h-32 w-32 md:block hidden"
            />
          </div>
        </div>
      </div>

      <div
        id="highlights"
        className="bg-gray-200 flex md:flex-row flex-col justify-between lg:pl-24 lg:pr-24 pl-8 pr-8"
      >
        <div className="flex flex-col gap-8 lg:m-16 m-4 pt-8 ">
          <div
            className={`font-serif md:text-2xl text-lg font-bold underline underline-offset-8 decoration-slate-500 text-slate-700 `}
          >
            4S Developers Project Highlights
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              {highlights.map((item) => (
                <li className="flex gap-4">
                  <span className="text-2xl text-slate-700">
                    <IoMdCheckmarkCircle />
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:p-16 flex items-center justify-center">
          <img
            src="/all-photo.png"
            className="aspect-video w-[36rem] rounded-xl"
          />
        </div>
      </div>

      <div id="floor plan" className="flex md:flex-row flex-col items-center justify-center lg:pl-24 lg:pr-24 pl-8 pr-8">
        <FloorPlan />
      </div>

      {/* <div id="floor plan" className="flex flex-col">
        <div className="flex items-center justify-center">
          <img src="/4BHK.png" className="md:h-[40rem] md:w-[80%] w-[100%]" />
        </div>
      </div> */}

      <div
        className="flex flex-col md:m-16 m-4 gap-8 text-center"
        id="amenities"
      >
        <p className="flex flex-col gap-1 font-semibold md:text-3xl text-xl font-serif">
          {" "}
          <span className="text-slate-700">
            {" "}
            {companyName}: {companyAddress}{" "}
          </span>
          <span className="underline underline-offset-8 decoration-slate-500 text-slate-700 ">
            Exclusive Amenities
          </span>
        </p>
        <p className="md:ml-24 md:mr-24 ml-4 mr-4 md:text-xl text-base text-gray-700">
          An opulent way of life stems from a home that’s aesthetically pleasing
          and makes you feel welcomed. Our Project Tulip Monsella is located in
          Sec-53, Golf course road, Gurgaon amidst lush greenery and is crafted
          to offer residents a lifestyle that transcends ordinary. We offer a
          blend of modern apartments and penthouses that redefine elegance and
          comfort for our residents. Our array of plush amenities are here to
          cater to your refined taste.
        </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {amenities.map((item) => (
            <div className="">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      <div
        id="location"
        className="bg-gray-200 flex md:flex-row flex-col justify-between lg:pl-24 lg:pr-24 pl-8 pr-8"
      >
        <div className="flex flex-col gap-8 lg:m-16 m-6">
          <div className="text-2xl font-bold underline underline-offset-8 font-serif decoration-slate-500 text-slate-700 ">
            Location Advantages
          </div>

          <div>
            <ul className="flex flex-col gap-4">
              {locationAdvantages.map((item) => (
                <li className="flex gap-4">
                  <span className="text-2xl decoration-slate-500 text-slate-700 ">
                    <IoMdCheckmarkCircle />
                  </span>
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:p-16 flex items-center justify-center mb-4">
          <img
            src="/location.jpg"
            className="aspect-video w-[36rem] rounded-xl"
          />
        </div>
      </div>
      <div className="w-screen flex justify-center">
        <div className="mt-0 lg:w-1/2 rounded-lg">
          <Form />
        </div>
      </div>

      <div className="fixed bottom-0 md:hidden block z-40">
        <ConnectButton />
      </div>
    </div>
  );
};

export default LandingPage;
