import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { TopHeader } from './components/Header';
import { Login } from './components/Login';
import { SignUp } from './components/SignUp';
import { Home } from './components/Home';

import 'antd/dist/antd.css';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header style={{backgroundColor:'#fff'}}>
          <TopHeader/>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Switch>
              <Route path="/signin">
                <Login/>
              </Route>
              <Route path="/signup">
                <SignUp/>
              </Route>
              <Route exact path="/">
                <Home/>
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
