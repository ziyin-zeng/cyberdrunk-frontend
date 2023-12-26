import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className={'App'}>
      <Sidebar />
      {/*  接下来这些在页面上显示花体代码*/}
      <div className={'page'}>
        {/* <span className={'tags top-tags'}>&lt;body&gt;</span> */}
        {/*  自己加了稍微有点位移的异色代码*/}
        {/*<span className={'tags top-tags-alt'}>&lt;body&gt;</span>*/}

        {/*Outlet是什么？相当于是一个替身/占位符，App.js里的Route跳转到了哪一个路由，就渲染对应的组件*/}
        <Outlet />

        {/* <span className={'tags bottom-tags'}>
          &lt;/body&gt;
          <br />
          <span className={'bottom-tag-html'}>&lt;/html&gt;</span>
        </span> */}
        {/*<span className={'tags bottom-tags-alt'}>*/}
        {/*  &lt;/body&gt;*/}
        {/*  <br />*/}
        {/*  <span className={'bottom-tag-html-alt'}>&lt;/html&gt;</span>*/}
        {/*</span>*/}
      </div>
    </div>
  )
}

export default Layout
