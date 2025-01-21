"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, Folder, Info } from "lucide-react";

const navItem = [
  { title: "Home", url: "/", icon: Home },
  { title: "Topics", url: "/topics", icon: Folder },
  { title: "About", url: "/about", icon: Info },
];


const topics = [
  { title: "Globalisasyon", url: "/lesson1" },
  { title: "State", url: "/lesson2" },
  { title: "Pandaigdigang Ekonomiya ", url: "/lesson3" },
  { title: "Market Integration", url: "/lesson4" },
  { title: "SDG Goals", url: "/lesson5" },
];

export default function Header() {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 w-full z-50">
      {!isMobileOrTablet && (
        <div className="backdrop-blur-md px-16 py-5 flex justify-between items-center">
          <div className="flex items-center">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Your SVG content */}
            </svg>
            <h1 className="text-lg sm:text-xl md:text-2xl px-2 sm:px-6 text-white font-semibold uppercase">
              Contemporary World
            </h1>
          </div>
          <nav className="flex items-center gap-6">
            {navItem.map((item, index) =>
              item.title === "Topics" ? (
                <span
                  key={index}
                  onClick={openModal}
                  className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center gap-1"
                >
                  <item.icon size={20} />
                  <span>{item.title}</span>
                </span>
              ) : (
                <Link
                  key={index}
                  href={item.url}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <item.icon size={20} />
                  <span>{item.title}</span>
                </Link>
              )
            )}
          </nav>
        </div>
      )}

      {isMobileOrTablet && (
        <nav className="backdrop-blur-md py-2 fixed bottom-0 w-full flex justify-around shadow-lg border-t border-gray-700">
          {navItem.map((item, index) =>
            item.title === "Topics" ? (
              <span
                key={index}
                onClick={openModal}
                className="flex flex-col items-center text-gray-300 hover:text-cyan-400 cursor-pointer transition-colors"
              >
                <item.icon size={24} />
                <span className="text-xs mt-1">{item.title}</span>
              </span>
            ) : (
              <Link
                key={index}
                href={item.url}
                className="flex flex-col items-center text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <item.icon size={24} />
                <span className="text-xs mt-1">{item.title}</span>
              </Link>
            )
          )}
        </nav>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          <button
            onClick={closeModal}
            className="text-white text-xl absolute top-5 right-5 hover:text-cyan-400"
          >
            ✕
          </button>

          <div className="flex-grow flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white mb-6">Topics</h2>
            <div className="w-full flex flex-col max-w-2xl px-6 space-y-6">
              {topics.map((topic, index) => (
                <Link href={topic.url} key={index} onClick={closeModal}>
                  <p
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg text-white text-center shadow-md hover:bg-cyan-400 hover:text-black transition"
                  >
                    {topic.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
