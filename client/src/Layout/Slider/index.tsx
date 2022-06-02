import {useState, useEffect} from 'react';
import { Menu } from 'antd'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Link, useLocation} from 'react-router-dom'
import './Slider.scss'

const Slider = (props: any) => {
    const [selectedKeys, setSelectKeys] = useState([''])
    type MenuItem = Required<MenuProps>['items'][number];
    const location = useLocation()

    useEffect(() => {
        const {pathname} = location
        const key = pathname.replace('/', '')
        setSelectKeys([key])
    }, [location])


    const items: MenuItem[] = [
        {
            label: (
                <Link to="/error">
                    错误监控
                </Link>
            ),
            key: 'error',
            icon: <MailOutlined />
        },  {
            label: (
                <Link to="/performance">
                    性能监控
                </Link>
            ),
            key: 'performance',
            icon: <AppstoreOutlined />
        }, {
            label: (
                <Link to="/behavior">
                    行为监控
                </Link>
            ),
            key: 'behavior',
            icon: <SettingOutlined />
        },
    ];

    return (
        <div id='Silder'>
            <div className='icon'>
                Monitor 993
            </div>
            <Menu
                theme='dark'
                style={{ width: 200 }}
                mode="inline"
                items={items}
                selectedKeys={selectedKeys}
            />
        </div>
    )
}

export default Slider
