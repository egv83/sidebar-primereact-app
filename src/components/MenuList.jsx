import {HomeOutlined, AppstoreOutlined,AreaChartOutlined,
    PayCircleOutlined, SettingOutlined, BarsOutlined} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "antd";

const MenuList = ({darkTheme}) => {

    const navigate = useNavigate();
    
    const items = [
        {label: "Home", key:'home', target:'/', icon:<HomeOutlined />},
        {label: "News", key:'news', target:'/news', icon:<AppstoreOutlined />},
        {label: "Settings", key:'setting', target:'/setting', icon:<SettingOutlined />},
        {label: "Dashboard", key:'dashboard', target:'/dashboard', icon:<AreaChartOutlined />},
    ]

    
    const handleMenuClick = ({key}) => {
        const {target} = items.find(item => item.key === key) || {};
        console.log("KEY: "+key);
        console.log("TARGET: "+target);
        if(target){
            navigate(target);
        }

    };

    return (
        
        <Menu
        theme={darkTheme ? 'dark' : 'light'}
        mode="inline"
        className="menu-bar"
        items={items}
        onClick={handleMenuClick}
        >
            {items.map(item => (
                <Menu.Item key = {item.key} icon = {item.icon}>
                    <Link to={item.target}>{item.label}</Link>
                </Menu.Item>
            ))}
        </Menu>
        
        //primer menu de ejemplo
        // <Menu
        // theme={darkTheme ? 'dark' : 'light'}
        // mode="inline" 
        // className="menu-bar">

        //     <Menu.Item key="home" icon={<HomeOutlined />} onClick={}>
        //         Home
        //     </Menu.Item>
        //     <Menu.Item key="activity" icon={<AppstoreOutlined />}>
        //         Activity
        //     </Menu.Item>
        //     <Menu.SubMenu key="tasks" icon={<BarsOutlined />}>
        //         <Menu.Item key="task-1">Task 1</Menu.Item>
        //         <Menu.Item key="task-2">Task 2</Menu.Item>

        //         <Menu.SubMenu key="subtasks" title="Subtasks">
        //             <Menu.Item key="subTask-1">Subtask-1</Menu.Item>
        //             <Menu.Item key="subTask-2">Subtask-2</Menu.Item>
        //         </Menu.SubMenu>

        //     </Menu.SubMenu>
        //     <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        //         Progress
        //     </Menu.Item>
        //     <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        //         Payment
        //     </Menu.Item>
        //     <Menu.Item key="setting" icon={<SettingOutlined />}>
        //         Settings
        //     </Menu.Item>

        // </Menu>
    );
}

export default MenuList;