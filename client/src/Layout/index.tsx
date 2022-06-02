import * as React from 'react';
import Header from './Header'
import Slider from './Slider'
import './Layout.scss'

interface props {
    children?: React.ReactNode
}

const Layout = (props: props) => {
    const {children} = props
    return (
        <div id='Layout'>

            <Slider/>
            <div className='container'>
                <Header/>
                <div className='content'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout
