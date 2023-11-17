import React from "react";
import "./SkillCard.scss";
import { Progress } from "antd";

const SkillCard = () => {
  return (
    <div className="SkillCard">
      <div class="container">
        <div class="skill-box">
          <span class="title">HTML</span>

          <div class="skill-bar">
            <span class="skill-per html">
              <span class="tooltip">70%</span>
            </span>
          </div>
        </div>

        <div class="skill-box">
          <span class="title">SCSS</span>

          <div class="skill-bar">
            <span class="skill-per scss">
              <span class="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div class="skill-box">
          <span class="title">Boostrap</span>

          <div class="skill-bar">
            <span class="skill-per Boostrap">
              <span class="tooltip">50%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
