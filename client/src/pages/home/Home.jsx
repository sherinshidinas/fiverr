import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/Slide/Slide";
import { cards } from "../../Data";
import { projects } from "../../Data";
import CatCard from "../../components/catCard/CatCard";
import BestPart from "../../components/bestPart/BestPart";
import FiverBusiness from "../../components/fiverBusiness/FiverBusiness";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show in one frame
    slidesToScroll: 4,
  };
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide settings={settings}>
        {cards.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>
      <BestPart/>
      <FiverBusiness/>

      <Slide settings={settings}>
        {projects.map((project) => (
          <ProjectCard item={project} key={project.id} />
        ))}
      </Slide>  

      

     

      
    </div>
  );
}

export default Home;
