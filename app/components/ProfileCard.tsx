"use client";

import Image from "next/image";
import profileImage from "../../public/images/itamar.jpg";

import { LuMail, LuPhone, LuLinkedin } from "react-icons/lu";


export default function ProfileCard() {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-80 relative">
        {/* Profile Image */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src={profileImage}
            alt="Profile"
            width={300}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* Name */}
        <h2 className="mt-6 text-2xl font-bold text-center text-gray-800">
          Itamar Kamar
        </h2>

        {/* Flame Icon */}
        <div className="flex justify-center items-center mt-4">
          <div className="flex items-center justify-center bg-pink-100 rounded-full w-12 h-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A5.217 5.217 0 0118 9.055c0 2.89-2.34 5.212-5.218 5.212-2.887 0-5.218-2.338-5.218-5.212 0-1.225.432-2.347 1.15-3.241m-.57-.799C5.752 6.198 3.75 8.793 3.75 12c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-3.207-2.001-5.802-4.662-6.827"
              />
            </svg>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-center text-gray-600">
          Fullstack Developer of 13 years who has developed both enterprise solutions and built startups from the ground up. 
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center space-x-6 mt-6">
          {/* Replace these icons with your preferred SVGs or DaisyUI icons */}
          <a href="https://www.linkedin.com/in/itamar-kamar/" className="text-primary rounded p-2 hover:bg-gray-200">
            <LuLinkedin className="w-6 h-6" />
          </a>
          <a href="tel:+17472049957" className="text-primary rounded p-2 hover:bg-gray-200">
            <LuPhone className="w-6 h-6" />
          </a>
          <a href="mailto:itamarkamar@gmail.com" className="text-primary rounded p-2 hover:bg-gray-200">
            <LuMail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}