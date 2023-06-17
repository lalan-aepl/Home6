"use client";
import React from "react";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImportantDevicesOutlinedIcon from "@mui/icons-material/ImportantDevicesOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ContentPasteSearchOutlinedIcon from "@mui/icons-material/ContentPasteSearchOutlined";

const Services = () => {
  const iconstyle = {
    fontSize: "2rem",
  };

  return (
    <div>
      <section className="bg-lightSky text-black">
        <div className="mx-auto max-w-screen-2xl  lg:mt-16 md:mt-0 px-4 py-14 sm:py-22 sm:px-6 lg:py-16 lg:px-8">
          

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <PeopleOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg   font-bold text-black">
                Online Tutoring
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <AccessTimeOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg   font-bold text-black">
                24/7 Support
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <ImportantDevicesOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg   font-bold text-black">
                live sessions
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <ScienceOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                Lab work
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <DataUsageOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                project help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <VideoCameraFrontOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                video calling support
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <DriveFileRenameOutlineOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                writing help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>

            <a className="flex flex-col items-center text-center md:block md:text-left   p-8   shadow-pink-light transition hover:shadow-lg  ">
              <div className="rounded-full   bg-contact w-fit p-2 hover:text-lightSky hover:bg-btnColor transition hover:shadow-lg">
                <ContentPasteSearchOutlinedIcon style={iconstyle} className="text-normalWhite" />
              </div>

              <h2 className="mt-4 text-lg font-bold   text-black">
                homework help
              </h2>

              <p className="mt-1 text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </a>
          </div>

          {/* <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-black transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
