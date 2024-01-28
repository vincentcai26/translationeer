import "../styles/basics.scss";
import "../styles/original.scss";
import "../styles/newstyles.scss";
import "../styles/definition.scss";
import "../styles/homepage.scss";
import "../styles/maintenence.scss";

import Layout from "../components/root/Layout";
import PContext from "../services/context";
import { useEffect, useState} from "react";
import Maintenence from "../components/Maintenence"

import {languageMapping,allApis} from "../services/data";

export default function App({ Component, pageProps }) {
  const isMaintenence = false;

  const [apis, setApis] = useState([]); //these are the current apis for the selected language
  const languageOptions = Object.keys(languageMapping);
  const [language, setLanguage] = useState(null); //important to NOT initially set a language, so it will set the language WITH all the Apis
  const linebreakCode = "&$linebreak&";
  const batchSize = 10;
  const defaultName = "Untitled"
  const [textEnd, setTextEnd] = useState("50"); //this is actually set in line 82 of studioHeader
  const [isMobile, setIsMobile] = useState(false);
  const [isJustCreatedUser, setIsJustCreatedUser] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  //For <CustomHead/>
  const [title, setTitle] = useState("Translationeer");

  useEffect(() => {
    updateLanguage(languageOptions[0])
    if(window.outerWidth<576) setIsMobile(true);
  }, []);

  //NOTE: different from setLanguage, this gets all apis, doesn't just set state.
  const updateLanguage = (languageParam) => {
    //Step 1: set the language
    setLanguage(languageParam);

    //Step 2: update the apis list for this language
    var arr = languageMapping[languageParam].map((i) => allApis[i]); //array of api objects
    setApis(arr);
  };

  const updateMouseCoords = (e) => {
    setMouseX(e.pageX);
    setMouseY(e.pageY);
  };

  const contextValue = {
    allApis,
    apis,
    languageOptions,
    language,
    linebreakCode,
    textEnd,
    isMobile,
    isJustCreatedUser,
    title,
    setTitle,
    setApis,
    updateLanguage,
    setTextEnd,
    mouseX,
    mouseY,
    defaultName,
    batchSize,
    randomNum: (Math.random()*5+1).toFixed(0),
  };

  if(isMaintenence) return <Maintenence></Maintenence>

  return (
    <PContext.Provider value={contextValue}>
      <Layout>
        <div onMouseMove={updateMouseCoords}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </PContext.Provider>
  );
}
