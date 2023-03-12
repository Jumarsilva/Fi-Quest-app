import {
  AppstoreOutlined,
  ShopOutlined, UserOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("/home");


  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKey(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          //item.key
          navigate(item.key);
        }}
        defaultSelectedKeys={[selectedKey]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "Quiz",
            key: "/quiz",
            icon: <ShopOutlined />,
          },
          {
            label: "Colaboradores",
            key: "/colaboradores",
            icon: <UserOutlined />,
          },
        ]}
        ></Menu>
    </div>
  );
}
export default SideMenu;
