import React from "react";
import { Image, Space } from "antd";
import me from "../../../Static/Image/12.webp";
import "./PrivateGarden.scss";
import BonsaiDemo from "./PrivateGardenComponents/xxx/BonsaiDemo";
import SkillCard from "./PrivateGardenComponents/SkillCard/SkillCard";
import ToolCard from "./PrivateGardenComponents/ToolCard/ToolCard";

export default function PrivateGarden() {
  return (
    <div id="PrivateGarden">
      <div className="PrivateGardenBox1"></div>
      <div className="PrivateGardenBox2">
        <div className="PrivateGardenBox4">
          <div className="PrivateGardenBox6">
            <div className="ContactDetails">
              <Image src={me} style={{ borderRadius: 20 }} />
            </div>
          </div>
          <div className="PrivateGardenBox7">
            <BonsaiDemo></BonsaiDemo>
          </div>
        </div>
        <div className="PrivateGardenBox5">
          <div className="PrivateGardenBox8">
            <div className="AboutMe">
              <h1>关于我</h1>
              <p style={{ lineHeight: 2 }}>
                我是来自江苏
                <span style={{ fontFamily: "beautiful" }}>常州</span>
                的某不知名程序{" "}
                <span
                  style={{
                    fontFamily: "beautiful",
                    fontSize: 24,
                    color: "#ff7777",
                  }}
                >
                  媛❤
                </span>
                ,
                <br />
                爱好切图但不仅仅只是切图,
                <br />
                向往成为一个富有
                <span style={{ fontFamily: "beautiful", color: "pink" }}>
                  创意
                </span>
                的有趣的
                <span
                  style={{
                    fontFamily: "beautiful",
                    textDecoration: "underline",
                  }}
                >
                  前端设计工程师
                </span>
                。
              </p>
            </div>
            <div className="Skill">
              <h1>我会什么？</h1>
              <div className="card">
                <div id="CommonTools">
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                  <ToolCard></ToolCard>
                </div>
                <div id="SkillCard">
                  <SkillCard></SkillCard>
                </div>
              </div>
            </div>
            <div className="Portfolio"></div>
          </div>
          <div className="PrivateGardenBox9"></div>
        </div>
      </div>
      <div className="PrivateGardenBox3"></div>
    </div>
  );
}
