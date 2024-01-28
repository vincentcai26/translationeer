import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import React from "react";
import { useRouter } from "next/router";
import PContext from "../../services/context";

export default function Legal() {
  return <div></div>
  const {query:{name}} = useRouter();
  const context = useContext(PContext);

  context.setTitle("Translationeer");

  var text = "";
    try{
      var mdfile = require(`../../components/legal/markdownfiles/${name}.md`);
      text = (mdfile.default);
    }catch(e){
      text = "";
      console.error(e);
    }

  return (
    <div>
      <div className="legal-container"><ReactMarkdown>{text}</ReactMarkdown></div>
    </div>
  );
}
