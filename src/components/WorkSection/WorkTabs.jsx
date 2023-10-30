import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme.context";

function WorkTabs ({works}){

  const {theme} = useContext(ThemeContext);

  //use translation

  //hook to handle tabs interactions
  const [tabState, setTabState] = useState(1);

  const toogleTab = (index) => {
        setTabState(index);
  }
  //console.log(works);


  //function to render if exists tool in the object work
  function renderTools(tools){
    if (tools !== undefined){
      return(
        <p> <button className={"icn_code-"+theme}><i className="fa-solid fa-code"></i></button>
          {
            tools.map((tool) => (
              <a key={tool[0]} style={{fontSize: "smaller"}} href={tool[1]}>{tool[0]} </a>
            ))
          }
        </p>
      )
    }
  }


  return(
      <div className="section-content">
        <div className="columns">
          <div className="column is-2">
            <div className="tabs my-tabs">
              {/* This tabs shoul be created dinamically*/}
              {
                works.map((work) => (
                  <div key={work.id} className={tabState === work.id ? "tab-"+theme+" active" : "tab-"+theme} 
                  onClick={()=> toogleTab(work.id)}>{work.bussinessName}</div>  
                ))
              }
            </div>
          </div>
          <div className={"column auto text-color-"+theme}>
            {
              works.map((work) => (
                <div key={work.id} className={tabState === work.id ? "tab-content active-content" : "tab-content"}>
                  <h2 className="text-code pad-bott">
                    {work.charge + " - "} <span className={"text-color-primary-"+theme}>{work.bussinessName}</span>
                  </h2>
                  <p className="text-code pad-bott">{work.time}</p>
                  <ul style={{paddingLeft: "1rem", paddingBottom: "1rem"}}>
                    {
                      work.tasks.map((task) => (
                        <li key={task} className="text-code"><i className={"fa-regular fa-circle-check text-color-primary-"+theme}></i> 
                        {" "+task}</li>
                      ))
                    }
                  </ul>
                    {renderTools(work.tools)}
                </div>
              ))
            }        
          </div>
        </div>
      </div>
  );
}

export default WorkTabs;