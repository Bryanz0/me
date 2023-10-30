import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'
import './css/bulma.min.css'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'

//getting trasnlations
import global_eng from "./translations/ENG/global.json"
import global_spa from "./translations/SPA/global.json"

// i18next init
i18next.init({
  interpolation: {escapeValue: false},
  lng: 'ENG',
  resources:{
    SPA:{
      global: global_spa
    },
    ENG: {
      global: global_eng
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
