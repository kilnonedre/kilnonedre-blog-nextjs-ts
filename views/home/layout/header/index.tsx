import React from 'react'
import styles from './headerStyle.module.scss'
import types from './headerType'
import { useRouter } from 'next/router'
import logo from '@/assets/images/logo/logo.jpg'
import { Dropdown, Progress, Text } from '@nextui-org/react'

const dropDownItemList: Array<types.ConfigDropDownItem> = [
  {
    key: 'information',
    name: '粗略信息',
    withDivider: false,
  },
  {
    key: 'personal',
    name: '个人中心',
    withDivider: false,
    icon: '',
  },
  {
    key: 'release',
    name: '发布管理',
    withDivider: false,
    icon: '',
  },
  {
    key: 'subscribe',
    name: '我的订阅',
    withDivider: false,
    icon: '',
  },
  {
    key: 'set',
    name: '网站设置',
    withDivider: false,
    icon: '',
  },
  {
    key: 'quit',
    name: '退出登录',
    withDivider: true,
    color: 'error',
    icon: '',
  },
]

const dataList = ['关注', '粉丝', '发帖']

const Header = () => {
  const router = useRouter()

  const toCoverPage = () => {
    router.push('/')
  }

  const switchChange = (key: string) => {
    console.log(key)
    switch (key) {
      case 'personal':
        router.push('/admin/login')
        break
      case 'release':
        break
      case 'subscribe':
        break
      case 'set':
        break
      case 'quit':
        router.push('/')
        break
    }
  }

  return (
    <header className={styles['header']}>
      <div className={styles['header-logo']} onClick={toCoverPage}>
        <img src={logo.src} alt="logo" />
      </div>
      <div className={styles['header-nav']}>
        <div className={styles['header-nav-icon']}></div>
        <div className={styles['header-nav-icon']}></div>
        <div className={styles['header-nav-divide']}></div>
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <div className={styles['header-nav-avatar']}></div>
          </Dropdown.Trigger>
          <Dropdown.Menu
            aria-label="Single selection actions"
            disabledKeys={['information']}
            color="secondary"
            items={dropDownItemList}
            disallowEmptySelection
            selectionMode="single"
            onSelectionChange={(keys: unknown) => {
              switchChange((keys as types.ConfigSwitchItem).currentKey)
            }}
          >
            {(item: any) => {
              if (item.key === 'information') {
                return (
                  <Dropdown.Item
                    key={item.key}
                    withDivider={item.withDivider}
                    color={item.color ? item.color : 'default'}
                    css={{
                      height: 'auto',
                    }}
                  >
                    <div className={styles['information']}>
                      <div className={styles['information-text']}>
                        <Text color="primary">梦涵芝诺</Text>
                        <Text size={12} color="primary">
                          注册会员
                        </Text>
                      </div>
                      <div className={styles['information-level']}>
                        <p className={styles['information-level-grade']}>lv0</p>
                        <Progress
                          color="primary"
                          size="xs"
                          value={68}
                          className={styles['information-level-progress']}
                        />
                        <p className={styles['information-level-grade']}>lv0</p>
                      </div>
                      <div className={styles['information-tip']}>
                        当前经验0，还需要111111经验升到lv1
                      </div>
                      <div className={styles['information-data']}>
                        {dataList.map(data => {
                          return (
                            <div
                              className={styles['information-data-single']}
                              key={data}
                            >
                              <p
                                className={
                                  styles['information-data-single-number']
                                }
                              >
                                0
                              </p>
                              <p
                                className={
                                  styles['information-data-single-subtype']
                                }
                              >
                                {data}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </Dropdown.Item>
                )
              } else {
                return (
                  <Dropdown.Item
                    key={item.key}
                    withDivider={item.withDivider}
                    color={item.color}
                  >
                    <div className={styles['tag']}>
                      <div className={styles['tag-icon']}>{item.icon}</div>
                      <div>{item.name}</div>
                      <div className={styles['tag-enter']}></div>
                    </div>
                  </Dropdown.Item>
                )
              }
            }}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header
