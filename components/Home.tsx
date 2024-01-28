import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useContext } from "react";
import PContext from "../services/context";

export default function Home() {
  const {setTitle} = useContext(PContext);
  const templates = [
    { title: "Blank Workspace", subtitle: "", imageURL: "", id: "blank" },
    {
      title: "The Aeneid",
      subtitle: "Random Excerpt",
      imageURL: "aeneid.jpg",
      id: "aeneid",
    },
    {
      title: "Catullus",
      subtitle: "Random Poem",
      imageURL: "catullus.jpg",
      id: "catullus",
    },
    {
      title: "Gallic Wars",
      subtitle: "Random Excerpt",
      imageURL: "gallicwars.jpg",
      id: "gallicwars",
    },
    {
      title: "Metamorphoses",
      subtitle: "Random Excerpt",
      imageURL: "metamorphoses.jpg",
      id: "metamorphoses",
    },
  ];

  const router = useRouter();

  const gotoWorkspace = (id) => {
    router.push(`/workspace/${id}`);
  };

  setTitle("Translationeer")

  return (
    <div id="home-container">
      <div id="home-main">
      <section id="templates-section">
          <h3>Translate Better</h3>
          <p className="section-description">
            Open a Translationeer workspace, with or without a premade template to begin translating!
          </p>
          <ul className="horiz-blocks row">
            {templates.map((t) => {
              return (
                <li className="small-block" key={t.id}>
                  <button
                    onClick={() => gotoWorkspace(t.id)}
                    className="block-image center"
                    style={{ backgroundImage: `url("/images/${t.imageURL}")` }}
                  >{t.id=="blank"&&<FontAwesomeIcon className="sib" icon={faPlus}></FontAwesomeIcon>}</button>
                  <label>{t.title}</label>
                  <p>{t.subtitle}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <div id="first-row">
          <section id="first-section">
            <h3>What is Translationeer?</h3>
            <p className="section-description">
              Translationeer is an online platform that makes translating easier and more efficient! It is free and open source.
            </p>
            <ul className="horiz-blocks row">
              <li className="large-block">
                <div className="block-image  clickdefinition"></div>
                <label>Click for Definition Link</label>
              </li>
              <li className="large-block">
                <div className="block-image structure"></div>
                <label>Organize and Break Up Text</label>
              </li>
              <li className="large-block">
                <div className="block-image sidebyside"></div>
                <label>Side-by-Side Translation</label>
              </li>
            </ul>
          </section>
          
        </div>
        
        <section id="contribute-section">
          <div>
            <h4>Translationeer is Open Source</h4>
            <p>Translationeer is free and open source, made to help people write translations. If you find this online tool to be helpful, consider helping out. Issues, pull requests, and contributions welcome.</p>
            <a target="_blank" href="https://github.com/Translationeer/Translationeer" rel="noreferrer" className="github-button">
              <div className="github-icon"></div>
              <p>
                GitHub Source Code
              </p>
            </a>
            {/* <p>Translationeer is written and maintained by Vincent Cai. His GitHub handle is "vincentcaitech"</p> */}
          </div>
        </section>
      </div>
    </div>
  );
}
