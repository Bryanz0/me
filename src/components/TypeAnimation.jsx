import React, { useEffect, useState } from 'react';
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";


function TypeAnimationDelay() {
  const [renderComponent, setRenderComponent] = useState(false);
  const { t } = useTranslation("global");
  const professions = t("presentation.professions", { returnObjects: true });

  //using a delay to allow the animation fadein was complete before start the type animation
  useEffect(() => {
    const delay = 2000;

    // Set a timeout to render the component after the delay
    const timer = setTimeout(() => {
      setRenderComponent(true);
    }, delay);

    // Clear the timeout when the component unmounts to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);

  if (!renderComponent) {
    //  indicator during the delay
    return <span>|</span>;
  }

  // Once the delay is over, render your desired component
  return (
    <span>
        <TypeAnimation 
        sequence={[professions[0], 2000, professions[1], 2000]}
        speed={10}
        repeat={Infinity} />
    </span>
  );
}

export default TypeAnimationDelay;
