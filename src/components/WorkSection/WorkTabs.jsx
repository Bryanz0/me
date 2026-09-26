import { useState } from "react";
import { useTranslation } from "react-i18next";

function getInitials(companyName) {
  return companyName.split(/\s+/).map((word) => word.charAt(0)).join("").slice(0, 2).toUpperCase();
}

function getTechnologyNames(tools = []) {
  return tools.flatMap((tool) => {
    if (!Array.isArray(tool)) return [];

    return [tool[0], ...tool.slice(2).filter(Array.isArray).map((nestedTool) => nestedTool[0])]
      .filter((name) => typeof name === "string");
  });
}

function WorkTabs({ works }) {
  const { t } = useTranslation("global");
  const sortedWorks = works.slice().sort((a, b) => b.id - a.id);
  const [selectedId, setSelectedId] = useState(sortedWorks[0]?.id);
  const selectedWork = sortedWorks.find((work) => work.id === selectedId) ?? sortedWorks[0];

  if (!selectedWork) return null;

  const isCurrent = selectedWork.status === "current" || /currently|actualidad/i.test(selectedWork.time);
  const technologies = getTechnologyNames(selectedWork.tools);

  return (
    <div className="experience-layout">
      <nav className="experience-company-list" aria-label={t("experienceSection.companyListLabel")}>
        {sortedWorks.map((work) => {
          const isSelected = selectedId === work.id;

          return (
            <button
              key={work.id}
              type="button"
              className={isSelected ? "experience-company is-selected" : "experience-company"}
              onClick={() => setSelectedId(work.id)}
              aria-pressed={isSelected}
            >
              <span className="experience-company-logo" aria-hidden="true">
                {work.logo ? <img src={work.logo} alt="" /> : getInitials(work.businessName)}
              </span>
              <span className="experience-company-copy">
                <span className="experience-company-name">{work.businessName}</span>
                <span className="experience-company-time">{work.time}</span>
              </span>
              {isSelected && <i className="fa-solid fa-chevron-right experience-company-chevron" aria-hidden="true"></i>}
            </button>
          );
        })}
      </nav>

      <article className="experience-detail">
        {isCurrent && <p className="experience-status">{t("experienceSection.current")}</p>}
        <h3 className="experience-role">{selectedWork.charge}</h3>
        <p className="experience-company-heading">
          {selectedWork.companyUrl ? (
            <a href={selectedWork.companyUrl} target="_blank" rel="noopener noreferrer" title={t("experienceSection.companyWebsite", { company: selectedWork.businessName })}>
              {selectedWork.businessName} <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
            </a>
          ) : selectedWork.businessName}
        </p>
        <div className="experience-meta">
          <span><i className="fa-regular fa-calendar" aria-hidden="true"></i>{selectedWork.time}</span>
          {selectedWork.location && <span><i className="fa-solid fa-location-dot" aria-hidden="true"></i>{selectedWork.location}</span>}
        </div>
        <p className="experience-description">{selectedWork.tasks.join(" ")}</p>
        {technologies.length > 0 && (
          <div className="experience-technologies" aria-label={t("experienceSection.technologiesLabel")}>
            {technologies.map((technology) => <span key={technology} className="experience-chip">{technology}</span>)}
          </div>
        )}
      </article>
    </div>
  );
}

export default WorkTabs;
