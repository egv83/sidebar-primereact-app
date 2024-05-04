/* npm install antd --save */
import { useState } from 'react';
import {Button, Layout, theme, Breadcrumb } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemButton';
import AppRouter from './components/AppRouter';

// import { Route, Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import News from './pages/News';
import Setting from './pages/Setting';
import { BrowserRouter } from 'react-router-dom';


const{Header, Sider, Content} = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout>
      
        <Sider className='sidebar'
        collapsed = {collapsed}
        collapsible
        trigger={null}
        theme = {darkTheme ? 'dark' : 'light'}>
          <Logo />
          <MenuList darkTheme={darkTheme}/>
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
          <Header style={{padding: 0, background:
            colorBgContainer}}>
            <Button type='text' 
            className='toggle'
            onClick={() => setCollapsed(!collapsed)}
            icon={collapsed ? 
            <MenuUnfoldOutlined /> : <MenuFoldOutlined />  }/>
          </Header>
        
          <Content>
            <AppRouter />
          </Content>
          
        </Layout>
        
      </Layout>
    </BrowserRouter>  
  );
}

export default App;
