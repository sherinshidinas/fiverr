import React from "react";
import "./ProjectCard.scss";
import { Link } from "react-router-dom";

function ProjectCard({ item }) {
  return (
    <Link className="link">
      <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="texts">
            <span>{item.username}</span>
            <h2>{item.cat}</h2>
          </div>
          
        </div>
       
      </div>
    </Link>
  );
}

export default ProjectCard;
