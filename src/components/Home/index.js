import './index.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import { getAlcoholByCat } from '../../api/Alcohol'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const nameArray = ['k', 'u', 'n', 'k', 'h', 'u', 'n', 't', '4', '2']
  const nameArray = [' ', 'Z', 'i', 'y', 'i', 'n', ' ', 'Z', 'E', 'N', 'G', ' ', ',']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  // 将之前的text-animate类名转换为-hover，这样才能应用scss里的动画
  // 4000这个时间不能设置的太短，否则会在第一个弹跳入场动画加载完成之前就把类名换掉了，导致没有入场动画
  // 最后一个中括号漏加了也没报错，不知道怎么回事
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className={'container home-page'}>
      {/*动态动画文字*/}
      <div className={'text-zone'}>
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          {/*<img src={LogoTitle} alt={'my name&developer'} />*/}
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={26}
          />
        </h1>
        <h2>Welcome to discover my Whiskey collection</h2>
        <Link to="/bistrot" className={'flat-button'}>
          Discover
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
