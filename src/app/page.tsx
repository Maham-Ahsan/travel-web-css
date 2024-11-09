'use client';

import Hero from "@/components/Hero";
import Explore from "@/components/Explore";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
       <Explore /> 
      <About />
      <Contact />
    </main>
  );
}
