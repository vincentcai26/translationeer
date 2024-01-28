import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>&copy; Translationeer 2024</div>
        <ul className="legal-list">
          {/* <li>
            <Link href="/legal/privacypolicy" className="link">Privacy Policy
            </Link>
          </li> */}
          {/* <li>
            <Link href="/legal/termsandconditions">
              <a className="link">Terms And Conditions</a>
            </Link>
          </li> */}
          {/* <li>
            <Link href="/legal/disclaimers" className="link">Terms and Disclaimers
            </Link>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
