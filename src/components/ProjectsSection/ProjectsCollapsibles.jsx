import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme.context";

function ProjectsCollapsibles({ projects }) {

    const { theme } = useContext(ThemeContext);

    //handle collapsibles interactions

    // Initialize a state array to manage the state of each collapsible
    const [collapsibleStates, setCollapsibleStates] = useState(projects.map(() => false));

    // Function to toggle the state of a specific collapsible by index
    const toggle = (index) => {
        const newStates = [...collapsibleStates];
        newStates[index] = !newStates[index];
        setCollapsibleStates(newStates);
    };

    return (
        <>
            {projects.map((project, index) => (
                <div key={project.id} className={"is-fullwidth collapse-" + theme}>
                    <div className={"collapsible collapse-header-" + theme} onClick={() => toggle(index)}>
                        <p style={{ fontWeight: "bold" }}>
                            {project.projectName} - <span>{project.projectType}</span>
                        </p>
                        <p className="is-flex" style={{ alignItems: "center", right: "1.5rem", marginRight: "1rem", position: "absolute"}}>
                            <i className={ collapsibleStates[index] ? "fa-solid fa-angle-up" : "fa fa-angle-down"}></i>
                        </p>
                    </div>
                    {collapsibleStates[index] && (
                        <div className={"collapsible-content-" + theme + " is-flex"}>
                            <p>{project.projectDesc}</p>
                        </div>
                    )}
                </div>
            ))}
        </>
    );

}

export default ProjectsCollapsibles;