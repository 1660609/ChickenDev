import React from 'react';
import {Link} from "react-router-dom";

import { Menu } from 'antd';


export const TopHeader = () => {
    return (
        <>
          <div className="logo" />
          <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/signin">Sign In</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/signup">Sign Up</Link>
            </Menu.Item>
          </Menu>
        </>
    )
}
