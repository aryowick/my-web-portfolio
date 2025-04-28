'use client';
import React from 'react';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col scroll-smooth">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 border-b text-sm">
        <div className="flex space-x-6">
          <a href="#about" className="hover:text-green-500">About Me</a>
          <a href="#stack-tools" className="hover:text-green-500">Tech Stack & Tools</a>
          <a href="#project" className="hover:text-green-500">Projects</a>
          <a href="#contact" className="hover:text-green-500">Contact Me</a>
        </div>
        <div className="flex space-x-4">
          <a href="Resume_Murry Aryo Wicaksono (FED).pdf" target="_blank" rel="noopener noreferrer">
            <button className="border px-3 py-1 rounded hover:bg-green-500 hover:text-white transition">
              Resume
            </button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col justify-center items-center text-center relative h-screen">
        <h1 className="text-5xl font-semibold mb-4">Welcome to My Portfolio!</h1>
        <p className="text-lg text-white-600 mb-10">Scroll down to see</p>
        <a href="#about" className="absolute bottom-10 animate-bounce text-gray-700 hover:text-green-500 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>


      {/* About Section */}
      <section
       id="about"
       className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-50 px-6 md:px-20 py-24"
     >
       {/* Left Content */}
       <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
         <h2 className="text-4xl font-bold text-black mb-4 relative inline-block after:block after:w-16 after:border-t-2 after:border-green-400 after:mt-3 mx-auto md:mx-0">
           About Me
         </h2>
         <p className="text-gray-700 leading-relaxed text-base md:text-lg">
         Hi! I’m Murry Aryo Wicaksono, a multi-disciplinary designer and digital creative based in Indonesia.
         I have hands-on experience in UI/UX Design, Front-End Development, Graphic Design, and Copywriting, built through internships and collaborative projects.
         I believe that great design goes beyond aesthetics, it’s about delivering functional and user-centered solutions.
         I'm passionate about continuous learning, team collaboration, and crafting meaningful digital experiences.


           I'm currently open to new opportunities and collaborations in the tech and creative industry.

           <br /><br />
          
           <br /><br />
          
         </p>
       </div>
     
       {/* Right Image */}
       <div className="w-full md:w-1/3 flex justify-center">
         <img
           src="murryai.jpeg"
           alt="Murry Aryo"
           className="rounded-lg shadow-xl w-64 object-cover"
         />
       </div>
     </section>
      {/* Tech Stack & Tools Section */}
      <section
id="stack-tools"
className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-white"
>
<h2 className="text-3xl font-semibold text-center mb-12 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2 text-black">
  Tech Stacks & Tools
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-5xl relative">

  {/* Garis pemisah vertikal */}
  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l border-gray-300"></div>

  {/* Tech Stacks */}
  <div className="z-10">
      <h3 className="text-2xl font-semibold mb-6 text-left text-black">Tech Stacks</h3>
      <ul className="space-y-4 text-black text-left">
        {['HTML', 'CSS / Tailwind CSS', 'Bootstrap', 'React.js / Next.js', 'Git & GitHub'].map((tech, idx) => (
          <li key={idx} className="flex items-center space-x-3 group">
            <span className="w-3 h-3 rounded-full bg-green-500 transition-transform duration-300 group-hover:scale-125 group-hover:bg-green-600"></span>
            <span className="transition-colors duration-300 group-hover:text-green-700">{tech}</span>
          </li>
        ))}
      </ul>
    </div>

  {/* Tools */}
  <div className="z-10">
    <h3 className="text-2xl font-semibold mb-6 text-left text-black">Tools</h3>
    <div className="space-y-4 text-black">
      <div className="flex items-center space-x-4">
        <img src="vscode.png" alt="vscode" className="w-6 h-6" />
        <span>Visual Studio Code</span>
      </div>
      <div className="flex items-center space-x-4">
        <img src="framer.png" alt="framer" className="w-6 h-6" />
        <span>Framer</span>
      </div>
      <div className="flex items-center space-x-4">
        <img src="whimsical.png" alt="whimsical" className="w-6 h-6" />
        <span>Whimsical</span>
      </div>
      <div className="flex items-center space-x-4">
        <img src="figma.png" alt="figma" className="w-6 h-6" />
        <span>Figma</span>
      </div>
      <div className="flex items-center space-x-4">
        <img src="canva.png" alt="canva" className="w-6 h-6" />
        <span>Canva</span>
      </div>
      <div className="flex items-center space-x-4">
        <img src="maze.png" alt="maze" className="w-6 h-6" />
        <span>Maze</span>
      </div>
    </div>
  </div>
</div>
</section>
    {/* Projects Section */}
<section
  id="project"
  className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-gray-50"
>
  <h2 className="text-3xl font-semibold text-center mb-12 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2 text-black">
    UI/UX Project
  </h2>

  <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">

    {/* WasteBag Project */}
    <div className="flex flex-col items-center text-center space-y-4 transition duration-500 ease-in-out transform hover:scale-105 opacity-0 animate-fadeInUp">
      <div className="w-full h-[250px]">
        <img
          src="/wastebag.png"
          alt="WasteBag project"
          className="w-full h-full object-contain rounded-lg shadow-md"
        />
      </div>
      <h3 className="text-xl font-bold text-black">WasteBag</h3>
      <p className="text-gray-700 text-sm leading-relaxed max-w-md">
        a mobile-based application that aims to help users specifically in manage and minimize household waste like plastic, cardboard, glass, cooking oil, aluminum, and wooden waste. This app provides easy waste management features.
      </p>
      <a
        href="https://www.figma.com/design/H13aqrhCeDxbAlPAEaecrO/BINAR_KELOMPOK_CH-6?node-id=9-5023&t=sT2grmo2urMKZUpz-1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:underline"
      >
        Figma
      </a>
    </div>

    {/* Skilley Project */}
    <div className="flex flex-col items-center text-center space-y-4 transition duration-500 ease-in-out transform hover:scale-105 opacity-0 animate-fadeInUp delay-150">
      <div className="w-full h-[250px]">
        <img
          src="/skilley.png"
          alt="Skilley project"
          className="w-full h-full object-contain rounded-lg shadow-md"
        />
      </div>
      <h3 className="text-xl font-bold text-black">Skilley</h3>
      <p className="text-gray-700 text-sm leading-relaxed max-w-md">
        a service provider platform that connects job seekers and job recruiters, both large and small scale industries.
      </p>
      <a
        href="https://www.figma.com/design/QHRb76e82dZNHWEuy1X7Sz/Skilley?node-id=0-1&t=LBPSlZJ8sI7bjYPy-1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-500 hover:underline"
      >
        Figma
      </a>
    </div>

  </div>
</section>
{/* Front End Projects Section */}
<section
  id="frontend-projects"
  className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-gray-50"
>
  <h2 className="text-3xl font-semibold text-center mb-12 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2 text-black">
    Front End Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">

    {/* D’House Project */}
    <div className="flex flex-col items-center text-center space-y-4 transition duration-500 ease-in-out transform hover:scale-105 opacity-0 animate-fadeInUp">
      <img
        src="room booking app.png"
        alt="D’House Of Learning Room Booking"
        className="w-full rounded-lg shadow-md"
      />
      <h3 className="text-xl font-bold text-black">D’House Of Learning Room Booking</h3>
      <p className="text-gray-700 text-sm leading-relaxed max-w-md">
        a web application that allows users to reserve and manage bookings for various types of rooms or spaces. These apps are commonly used in a variety of settings, including meeting room, conference centers, coworking spaces, and classrooms.
      </p>
    </div>

    {/* Smart Banking Project */}
    <div className="flex flex-col items-center text-center space-y-4 transition duration-500 ease-in-out transform hover:scale-105 opacity-0 animate-fadeInUp delay-150">
      <img
        src="smart banking app.png"
        alt="Smart Banking App"
        className="w-full rounded-lg shadow-md"
      />
      <h3 className="text-xl font-bold text-black">Smart Banking App</h3>
      <p className="text-gray-700 text-sm leading-relaxed max-w-md">
        a mobile or web application that offers modern and innovative financial services to customers. These apps leverage technology to provide a more convenient, user-friendly, and efficient banking experience.
      </p>
    </div>

  </div>
</section>

<section
  id="driver-webapp"
  className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-white"
>
  <h2 className="text-3xl font-semibold text-center mb-12 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2 text-black opacity-0 animate-fadeInUp">
    Front End Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">

    {/* Left Side */}
    <div className="flex flex-col items-start space-y-4 opacity-0 animate-fadeInUp delay-100 group">
      <img
        src="homepage.png"
        alt="Candidate Driver Web App"
        className="w-full rounded-lg shadow-md transform transition-transform duration-500 group-hover:scale-105"
      />
      <h3 className="text-xl font-bold text-black">Candidate Driver Web App</h3>
      <p className="text-gray-700 text-sm leading-relaxed max-w-md">
        The Candidate Driver Web App is designed to enhance the efficiency and effectiveness of the recruitment process for both candidates and recruiters, making it easier to match the right drivers with the right job opportunities.
      </p>
      <a
        href="https://www.figma.com/design/XgQOXMTc4fRqeV1VMakIfv/Web-User-for-Driver-Candidate?node-id=1-28&t=NF90VsBSRVyxyeHC-1"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-600 underline hover:text-blue-800 transition-colors duration-300"
      >
        Figma
      </a>
    </div>

    {/* Right Side */}
    <div className="flex flex-col items-start space-y-4 opacity-0 animate-fadeInUp delay-200 group">
      <img
        src="appform.png"
        alt="Candidate Driver Form"
        className="w-full rounded-lg shadow-md transform transition-transform duration-500 group-hover:scale-105"
      />
      <p className="text-gray-700 text-sm leading-relaxed max-w-md">
        A specialized online platform prototype designed to streamline the process of recruiting drivers. It serves as a comprehensive tool for potential drivers to find, apply for, and track job opportunities, while also allowing recruiters to manage applications efficiently.
      </p>
    </div>

  </div>
</section>
<section id="showcase" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">Front End Projects</h2>
    <hr className="w-48 mx-auto mb-8 border-t-2 border-gray-300" />

    {/* Project Title */}
    <h3 className="text-xl font-semibold text-black mb-8">
      Elemes.id – Landing Page Website
    </h3>

    {/* Image */}
    <div className="flex justify-center mb-8">
      <img
        src="/elemes.png" // <- pastikan ini ada di folder public
        alt="Elemes.id Landing Page"
        className="rounded-lg shadow-lg w-full max-w-4xl"
      />
    </div>

    {/* Description */}
    <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
      This landing page was developed using <strong>React.js</strong> and <strong>Next.js</strong> as part of a web development practice project focused on creating a modern and clean interface.
      <br /><br />
      The design prioritizes a smooth user experience (UX) with clear navigation and attractive visuals, such as a hero section featuring a CTA (Call to Action) and a food illustration.
    </p>

    {/* Figma Link */}
    <a
      href="https://www.figma.com/design/4IRXjXUjDpD5sXwV9Whw9r/Elemes-Landing-Page?node-id=0-1&t=ByRreSgJDF67lLut-1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-green-600 hover:text-green-800 mt-6 inline-block font-medium transition-colors duration-200"
    >
      Figma
    </a>
  </div>
</section>
<section id="showcase" className="py-20 bg-gray-50">
  <div className="container mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-4">UI/UX Projects</h2>
    <hr className="w-48 mx-auto mb-8 border-t-2 border-gray-300" />

    {/* Project Title */}
    <h3 className="text-xl font-semibold text-black mb-8">
      LineCash - Mobile Banking App
    </h3>

    {/* Image */}
    <div className="flex justify-center mb-8">
      <img
        src="/linecash mockup.png" // <- pastikan ini ada di folder public
        alt="Elemes.id Landing Page"
        className="rounded-lg shadow-lg w-full max-w-4xl"
      />
    </div>

    {/* Description */}
    <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-base md:text-lg">
    LineCash is a modern mobile banking app prototype built to deliver secure, intuitive, and user-friendly financial services to users. Designed with a clean UI and thoughtful user flow, LineCash allows users to easily manage their accounts, transfer funds, and monitor transactions all in one app.
    The design focuses on enhancing trust, clarity, and efficiency, vital for digital financial services.<br /><br />
      
    </p>

    {/* Figma Link */}
    <a
      href="https://www.figma.com/design/KkK9qsMNonsYzfsjuQWhaT/LineCash-Mobile?t=K9B3uTw2i7LB1NT7-0"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-green-600 hover:text-green-800 mt-6 inline-block font-medium transition-colors duration-200"
    >
      Figma
    </a>
  </div>
</section>
<section id="family-flyer" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    
    {/* Judul Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2">
        Graphic Design Projects
      </h2>
    </div>

    {/* Konten Gambar + Deskripsi */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      
      {/* Gambar Showcase */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/perwilgab.png" // Pastikan nama file sesuai
          alt="Family Fellowship Flyer"
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Deskripsi */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-black mb-4">
          Family Fellowship Flyer
        </h3>
        <p className="text-gray-700 mb-4">
          The design aims to communicate warmth, togetherness, and hope, using a soft beige and brown color 
          scheme with a family-themed illustration to emphasize unity despite imperfections. 
          The layout presents essential information clearly, such as the theme, speaker date, and venue, 
          making it easy to understand at a glance.
        </p>

        {/* Objective */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Objective:</h4>
        <p className="text-gray-700">
          To promote a spiritual community gathering in an uplifting and approachable way, 
          while encouraging reflection and family participation.
        </p>
      </div>

    </div>
  </div>
</section>

<section id="laundry-service" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    
    {/* Judul Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2">
        Graphic Design Projects
      </h2>
    </div>

    {/* Konten Gambar + Deskripsi */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      
      {/* Gambar Showcase */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="7wash.png" // Ganti dengan nama file gambar poster kamu
          alt="Laundry Service Poster"
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Deskripsi */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-2xl font-semibold text-black mb-4">
          Laundry Service Promo Design – 7Wash Laundry
        </h3>
        <p className="text-gray-700 mb-4">
          This promotional poster was created for 7Wash Laundry, a local laundry service. 
          The main goal was to clearly highlight the wide range of services offered – from regular washing 
          to specialized cleaning for leather, shoes, carpets, and bags – while maintaining a clean, modern, 
          and professional design aesthetic.
        </p>
        <p className="text-gray-700 mb-4">
          The color palette of navy blue and yellow was carefully chosen to convey freshness, cleanliness, 
          and trust. Supporting visuals, such as close-up shots of laundry processes, help build context 
          and connect with potential customers. The design also emphasizes the convenience of their 
          Pick Up & Delivery service.
        </p>

        {/* Objective */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Objective:</h4>
        <p className="text-gray-700">
          To attract local customers and build brand recognition through eye-catching, 
          easy-to-understand promotional material.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="suzu-laundry" className="py-20 bg-white">
  <div className="container mx-auto px-6">
    
    {/* Judul Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2">
        Copywriting Projects
      </h2>
    </div>

    {/* Konten Gambar + Deskripsi */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      
      {/* Gambar Showcase */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="suzu laundry.png" // Pastikan nama file sesuai
          alt="Suzu Laundry Flyer"
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Deskripsi */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        
        <h3 className="text-2xl font-semibold text-black mb-4">
          Brand: Suzu Laundry
        </h3>
        <p className="text-gray-700 mb-4">
          The design aims to communicate warmth, togetherness, and hope, using a soft beige and brown color 
          scheme with a family-themed illustration to emphasize unity despite imperfections. 
          The layout presents essential information clearly, such as the theme, speaker date, and venue, 
          making it easy to understand at a glance.
        </p>

        {/* Project Overview */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Project Overview:</h4>
        <p className="text-gray-700 mb-4">
          This promotional flyer was created to highlight Suzu Laundry's signature feature Same Day Service. 
          It's designed to appeal to busy urban customers who want clean and fresh laundry without the wait.
        </p>

        {/* Objective */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Objective:</h4>
        <p className="text-gray-700 mb-4">
          To boost brand visibility and attract potential customers by delivering a clear, 
          compelling message through strong visual storytelling.
        </p>

        {/* Creative Process */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Creative Process:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Copywriting: Wrote engaging and persuasive text using a friendly, relatable tone that connects with the target audience.</li>
          <li>Brand Voice & Tone: Combined bold blue visuals with clean, professional typography to create a trustworthy and modern impression.</li>
          <li>Visual Hierarchy: Emphasized the key message “Same Day Service” along with three main benefits: Fast, Practical, and Maximum Results.</li>
          <li>Call to Action: Included WhatsApp and Instagram contact details for easy service access and customer engagement.</li>
        </ul>

      </div>

    </div>
  </div>
</section>
<section id="global7-property" className="py-20 bg-white">
  <div className="container mx-auto px-6">

    {/* Judul Section */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-800 relative inline-block after:block after:w-24 after:border-t after:border-gray-400 after:mt-2">
        Copywriting Projects
      </h2>
    </div>

    {/* Konten Gambar + Deskripsi */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      
      {/* Gambar Showcase */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/global7.png" // Pastikan file sesuai
          alt="Global7 Property Flyer"
          className="max-w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Deskripsi */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        
        <h3 className="text-2xl font-semibold text-black mb-4">
          Brand: Global7 Property
        </h3>

        {/* Project Overview */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Project Overview:</h4>
        <p className="text-gray-700 mb-4">
          This flyer was designed to promote Global7 Property's all-in-one real estate service: buying, selling, and renting. 
          The goal was to build trust and show how easy it is to get property deals done with their help.
        </p>

        {/* Objective */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Objective:</h4>
        <p className="text-gray-700 mb-4">
          To attract potential buyers, sellers, and tenants by delivering a clean, professional flyer 
          that communicates speed, trust, and convenience.
        </p>

        {/* Creative Process */}
        <h4 className="text-xl font-bold text-black mt-8 mb-2">Creative Process:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Copywriting: Used a conversational tone with a clear headline and tagline: “We’ll find the best place to you” to build emotional connection and confidence.</li>
          <li>Visual Design: Showcased a modern, elegant house to reflect the premium services provided.</li>
          <li>Personal Touch: Added the agent’s photo to increase trust and invite direct consultation.</li>
          <li>Contact CTA: Highlighted multiple contact options (WhatsApp, Instagram, Website) for easy client reach.</li>
        </ul>

      </div>

    </div>
  </div>
</section>

<section id="contact" className="py-20 bg-white text-center">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>
    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
      Let’s connect and create something impactful together.
 Whether you need a UI/UX designer, a front end developer, a visual storyteller, or a copy magician.
 I’m ready!

    </p>
    
    {/* ICONS */}
    <div className="flex justify-center space-x-6 mb-6">
  <a href="https://github.com/aryowick" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-500 text-2xl">
    <FaGithub />
  </a>
  <a href="https://www.linkedin.com/in/murry-aryo-wicaksono-3a5872158/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-500 text-2xl">
    <FaLinkedin />
  </a>
  <a href="https://dribbble.com/murryaryo" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-green-500 text-2xl">
    <FaDribbble />
  </a>
</div>

    {/* EMAIL */}
    <div className="text-gray-800 mb-6">
      <a href="mailto:mrrlb89@gmail.com" className="flex items-center justify-center space-x-2 hover:text-green-500">
        <span>✉️</span>
        <span>mrrlb89@gmail.com</span>
      </a>
    </div>

    {/* Footer */}
    <p className="text-gray-500 text-sm">Murry Aryo Wicaksono - 2025</p>
  </div>
</section>
  </main>
  );
}

