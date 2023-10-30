import { useEffect, useState } from 'react'
import './css/App.css'
import { ThemeContext } from './contexts/Theme.context'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './views/partials/Header';
import Animations from './components/Animations';
import Presentation from './views/Presentation';
import WorkSection from './views/WorkSection';
import SkillSection from './views/SkillSection';
import ProjectsSection from './views/ProjectsSection';
import ContactSection from './views/ContactSection';
import Footer from './views/partials/Footer';
import ToUpButton from './views/partials/ToUpButton';


function App() {
  

  //Detect the browser's default mode
  const isBrowserModeDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  // Get the default theme in the localStorage
  const getDefaultTheme = () =>{
    const localStorageTheme = localStorage.getItem('theme');
    const browserDefaultTheme = isBrowserModeDark() ? 'dark' : 'light'
    return localStorageTheme || browserDefaultTheme;
  } 

  const [theme, setTheme] = useState(getDefaultTheme);

  //aos animations init
  useEffect(()=>{
    AOS.init();
  })

  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <HelmetProvider>
        <div className={'bg-body-'+theme}>
          <Helmet>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/gsap.min.js" type="text/javascript" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.8.0/ScrollTrigger.min.js" type="text/javascript" />
          </Helmet>
          <Header />
          <main>
            <ToUpButton />
            <Presentation />
            <WorkSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
            <Animations />
          </main>
        </div>
      </HelmetProvider>
    </ThemeContext.Provider>
  )
}

export default App
