import './index.scss'
import LogoZ from '../../../assets/images/logo-z.svg'

const Logo = () => {
  return (
    <div className={'logo-container'}>
      <img className="solid-logo" src={LogoZ} alt={'Z'} />
    </div>
  )
}

export default Logo
