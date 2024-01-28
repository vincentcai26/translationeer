import Link from 'next/link';
import { replaceChars } from '../../services/replaceChars';

export default function InnerDefinition({cssSelector,name,word,url}){
    const customURL = url.replace("{{keyword}}",replaceChars(word));
    return <Link href={customURL}><a target="_blank" className={`definition-link ${cssSelector}}`}>{name}</a></Link>
}