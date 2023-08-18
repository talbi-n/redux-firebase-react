import React from 'react';
import { useParams } from 'react-router-dom';
export default function ProjectDetails(props) {
  console.log(props);
  const { id } = useParams();
  return (
    <div className="container project-details section ">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Ninja created</p>
          <p className="grey-text">3 september 22023 </p>
        </div>
        <div className="grey card-action lighten-4 grey-text">
          <div>Posted by ninja</div>
          <div>23 sep 2023</div>
        </div>
      </div>
    </div>
  );
}
