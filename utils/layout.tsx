import HomeHeader from '@/views/home/layout/header'
import HomeFooter from '@/views/home/layout/footer'
import AdminHeader from '@/views/admin/layout/header'
import AdminSideBar from '@/views/admin/layout/sideBar'
import { Row } from '@nextui-org/react'
import { ReactNode } from 'react'

/**
 * @author kilnonedre <1600513615@qq.com>
 * @description 前台页面布局函数
 * @param { any } component
 */
export const homeLayout = (component: any) => {
  component.getLayout = (page: ReactNode) => {
    return (
      <>
        <HomeHeader />
        {page}
        <HomeFooter />
      </>
    )
  }
}

/**
 * @author kilnonedre <1600513615@qq.com>
 * @description 后台页面布局函数
 * @param { any } component
 */
export const adminLayout = (component: any) => {
  component.getLayout = (page: ReactNode) => {
    return (
      <>
        <AdminHeader />
        <Row>
          <AdminSideBar />
          {page}
        </Row>
      </>
    )
  }
}
