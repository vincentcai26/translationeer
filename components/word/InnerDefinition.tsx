import Link from 'next/link';
import { replaceChars } from '../../services/replaceChars';

export default function InnerDefinition({cssSelector,name,word,url}){
    const customURL = url.replace("{{keyword}}",replaceChars(word));
    return <a href={customURL} target="_blank" className={`definition-link ${cssSelector}}`}>{name}</a>
}