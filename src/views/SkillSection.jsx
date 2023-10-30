import { Fragment, useContext } from "react";
import skills from "../components/SkillSection/skills.json"
import { ThemeContext } from "../contexts/Theme.context";

function SkillSection () {

  const {theme} = useContext(ThemeContext);

    return (
        <div className="body-section" id="skills_section">
            <div className="section" data-aos="zoom-in-right" data-aos-duration="750"
              data-aos-anchor-placement="top-center">
              <div className="container">
                <div className="columns section-div">
                  <div className="column is-one-quarter is-4">
                    <h2 className={"tittle-section text-color-"+theme}>Skills</h2>
                  </div>
                  <div className="column auto">
                    <hr className={"section-line-"+theme} />
                  </div>
                </div>
                <div className="section-content">
                  <div className="columns is-centered">
                    <div className="column is-5" id="skill_column1" style={{overflowX: "hidden"}}>
                      {
                        skills["skills-col-1"].map((skill)=>(
                          <Fragment key={skill.skillName}>
                            <p className={"text-color-"+theme+" skill-text"}>{skill.skillName}</p>
                            <hr className="skill-bar" style={{width: skill.percentage}} />
                          </Fragment>
                        ))
                      }
                    </div>
                    <div className="column is-5" style={{overflowX: "hidden"}}>
                    {
                        skills["skills-col-2"].map((skill)=>(
                          <Fragment key={skill.skillName}>
                            <p className={"text-color-"+theme+" skill-text"}>{skill.skillName}</p>
                            <hr className="skill-bar" style={{width: skill.percentage}} />
                          </Fragment>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default SkillSection;