import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faWhiskeyGlass } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faLinkedin,
  faWeibo,
  faWeixin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      {/*<img src={LogoS} alt={'logo'} />*/}
      {/*<img className="sub-logo" src={LogoSubtitle} alt={'slobodan'} />*/}
    </Link>
    <nav>
      <NavLink exact={'true'} activeclassname={'active'} to={'/'}>
        <FontAwesomeIcon icon={faHome} color={'#edcbb8'} />
      </NavLink>
      <NavLink
        exact={'true'}
        activeclassname={'active'}
        className={'bistrot-link'}
        to={'/bistrot'}
      >
        <FontAwesomeIcon icon={faWhiskeyGlass} color={'#edcbb8'} />
      </NavLink>
      {/* <NavLink
        exact={'true'}
        activeclassname={'active'}
        className={'contact-link'}
        to={'/contact'}
      >
        <FontAwesomeIcon icon={faEnvelope} color={'#edcbb8'} />
      </NavLink> */}
    </nav>
    <ul>
      <li>
        <a target={'_blank'} rel={'noreferrer'} href={'https://www.linkedin.com/in/ziyin-zeng-002626194/'}>
          <FontAwesomeIcon icon={faLinkedin} color={'#edcbb8'} />
        </a>
      </li>
      <li>
        <a target={'_blank'} rel={'noreferrer'} href={'https://github.com/ziyin-zeng'}>
          <FontAwesomeIcon icon={faGithub} color={'#edcbb8'} />
        </a>
      </li>
      <li>
        <a target={'_blank'} rel={'noreferrer'} href={'https://www.weibo.com'}>
          <FontAwesomeIcon icon={faWeibo} color={'#edcbb8'} />
        </a>
      </li>
      <li>
        <a target={'_blank'} rel={'noreferrer'} href={'https://www.wechat.com'}>
          <FontAwesomeIcon icon={faWeixin} color={'#edcbb8'} />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
