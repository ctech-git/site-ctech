import React from "react";

const RoadmapItem = (props) => {
  return (
    <div className="bt-roadmap-item">
      <span className="roadmap-title">{props.item.title}</span>
      <div className="roadmap-content">
        <span className="dot" />
        <span>{props.item.description}</span>
      </div>
    </div>
  );
};

export default RoadmapItem;
