import { Image, Typography } from "antd";

import logo from '../../assets/img/logofi.png'


function AppHeader() {

  return (
    <div className="AppHeader">
      <Image
        width={40}
        src={logo}
      ></Image>
      <Typography.Title>Fi Quest Dashboard</Typography.Title>
    </div>
  );
}
export default AppHeader;