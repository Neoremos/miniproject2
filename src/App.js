import React from "react";
import "./App.css";
import AboutCard from "./components/about/AboutCard";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/footer/Footer";
import Head from "./components/heading/Head";
import Hero from "./components/home/Hero";
import Price from "./components/pricing/Price";
import ProjectCard from "./components/projects/ProjectCard";
import ServiceCard from "./components/services/ServiceCard";
import Team from "./components/teams/Team";
import Test from "./components/testimonial/Test";
// import Contact from './components/contact/Contact'
// import Header from './components/heading/Header'
// import { BrowserRouter as Router, Routes ,Route  } from 'react-router-dom'
// import Head from './components/heading/Head'
// import Home from './components/home/Home'
// import About from './components/about/About'
// import ServiceHome from './components/services/ServiceHome'
// import ProjectHome from './components/projects/ProjectHome'
// import Head from './components/heading/Head'
// import Home from './components/home/Home'

const App = () => {
  return (
    <div>
      <Head />
      <Hero />
      <AboutCard />
      <ServiceCard />
      <ProjectCard />
      <Price />
      <Team />
      <Test />
      <Contact/>
      <Footer />
      
    </div>
  );
};

export default App;
