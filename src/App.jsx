import { useState } from 'react'
import { Layout } from 'antd';
import Logo from './components/Logo';

const{Header, Sider} = Layout;

function App() {

  return (
    <Layout>
      <Sider className='sidebar'>
        <Logo />
      </Sider>
    </Layout>
  );
}

export default App
