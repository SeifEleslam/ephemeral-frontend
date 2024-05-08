import Image from "next/image";
import Hero from "./components/hero";
import Features from "./components/features";
import FeaturesBlocks from "./components/features-blocks";
import Testimonials from "./components/testimonials";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#111827",
          color: "white",
        }}
      >
        <h1 className="text-3xl">About Us</h1>
        <p className="text-lg">
          We are developers who seeks to provide a high quality secured way for
          communicating
        </p>
        <p></p>
      </div>
      <Features />
      {/* <FeaturesBlocks /> */}
      <div className="my-12"></div>
      <Newsletter />
    </>
  );
}
