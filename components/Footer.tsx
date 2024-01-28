import Link from "next/link";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div>&copy; Translationeer 2022</div>
        <ul className="legal-list">
          <li>
            <Link href="/legal/privacypolicy">
              <a className="link">Privacy Policy</a>
            </Link>
          </li>
          {/* <li>
            <Link href="/legal/termsandconditions">
              <a className="link">Terms And Conditions</a>
            </Link>
          </li> */}
          <li>
            <Link href="/legal/disclaimers">
              <a className="link">Terms and Disclaimers</a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
