import logo from '../images/logo.svg'
import PageLinks from './PageLinks'
import SocialLinks from './SocialLinks'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        {/* Nav header */}
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Nav sections */}
        <PageLinks parentClass="nav-links" itemClass="nav-link"></PageLinks>

        {/* Nav icons */}
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon"></SocialLinks>
      </div>
    </nav>
  )
}

export default Navbar
