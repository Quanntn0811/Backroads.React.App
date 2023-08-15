import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <footer className="section footer">
      {/* Nav section */}
      <PageLinks parentClass="footer-links" itemClass="footer-link"></PageLinks>

      {/* Nav icons */}
      <SocialLinks
        parentClass="footer-icons"
        itemClass="footer-icon"
      ></SocialLinks>

      {/* copy rights */}
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
