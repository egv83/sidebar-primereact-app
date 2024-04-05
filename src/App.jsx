/* npm install antd --save */
import { Layout } from 'antd';
import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemButton';
import { useState } from 'react';

const{Header, Sider} = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Layout>
      <Sider className='sidebar' theme={darkTheme ? 'dark' : 'light'}>
        <Logo />
        <MenuList darkTheme={darkTheme}/>
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme}/>
      </Sider>
    </Layout>
  );
}

export default App
