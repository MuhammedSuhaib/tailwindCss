import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/*  main content goes here */}
        <Hero />
        <About />
        <Services />
        </main>
      <Footer />
    </div>
  );
}
