"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface AOSProps {
  children: React.ReactNode;
}

const AOS: React.FC<AOSProps> = ({ children }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return <div>{children}</div>;
};

export default AOS;
