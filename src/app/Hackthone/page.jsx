"use client"
import React from 'react';
import '../styles/Hackthone.css';
import Link from 'next/link';

const hackathons = [
  {
    name: "Hack4Future 2025",
    date: "20th September 2025",
    duration: "24 hours",
    mode: "Online",
  },
  {
    name: "CodeSprint Express",
    date: "15th October 2025",
    duration: "48 hours",
    mode: "Hybrid",
  },
  {
    name: "InnovateX",
    date: "10th November 2025",
    duration: "36 hours",
    mode: "Online",
  },
  {
    name: "NextGen Coders",
    date: "22nd November 2025",
    duration: "24 hours",
    mode: "Offline",
  },
  {
    name: "TechNova Challenge",
    date: "5th December 2025",
    duration: "48 hours",
    mode: "Hybrid",
  },
  {
    name: "CodeQuest 2025",
    date: "12th December 2025",
    duration: "36 hours",
    mode: "Online",
  },
  {
    name: "ByteBattle",
    date: "20th December 2025",
    duration: "24 hours",
    mode: "Offline",
  },
  {
    name: "HackNation",
    date: "5th January 2026",
    duration: "72 hours",
    mode: "Online",
  },
  {
    name: "AlgoArena",
    date: "10th January 2026",
    duration: "36 hours",
    mode: "Hybrid",
  },
  {
    name: "Code Fusion",
    date: "18th January 2026",
    duration: "48 hours",
    mode: "Offline",
  },
  {
    name: "BugSmashers",
    date: "25th January 2026",
    duration: "24 hours",
    mode: "Online",
  },
  {
    name: "DevStorm",
    date: "2nd February 2026",
    duration: "48 hours",
    mode: "Hybrid",
  },
  {
    name: "CyberHack 2026",
    date: "9th February 2026",
    duration: "36 hours",
    mode: "Online",
  },
  {
    name: "AIthon",
    date: "16th February 2026",
    duration: "48 hours",
    mode: "Offline",
  },
  {
    name: "SmartCity Hack",
    date: "23rd February 2026",
    duration: "72 hours",
    mode: "Online",
  },
  {
    name: "Hackfinity",
    date: "2nd March 2026",
    duration: "24 hours",
    mode: "Hybrid",
  },
  {
    name: "ReactRush",
    date: "10th March 2026",
    duration: "36 hours",
    mode: "Offline",
  },
  {
    name: "FullStack Frenzy",
    date: "17th March 2026",
    duration: "48 hours",
    mode: "Online",
  },
  {
    name: "DataDive",
    date: "24th March 2026",
    duration: "24 hours",
    mode: "Online",
  },
  {
    name: "HackTheChain",
    date: "30th March 2026",
    duration: "48 hours",
    mode: "Hybrid",
  },
];

const HackathonPage = () => {
  return (
    <section className="hackathon-page">
      <div className="container">
        <h1 className="hackathon-heading">Upcoming Hackathons</h1>

        <p className="hackathon-intro">
          Participate in exciting hackathons hosted by Future Coding. Improve your skills,
          collaborate with others, and win rewards and certificates!
        </p>

        <div className="hackathon-list">
          {hackathons.map((hackathon, index) => (
            <div key={index} className="hackathon-card">
              <h3>{hackathon.name}</h3>
              <p>Date: {hackathon.date}</p>
              <p>Duration: {hackathon.duration}</p>
              <p>Mode: {hackathon.mode}</p>
              <Link href="/register">
                <button className="register-btn">Register Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonPage;
