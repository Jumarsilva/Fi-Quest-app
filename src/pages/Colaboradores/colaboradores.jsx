import { Avatar, Space, Table, Typography } from "antd";
import AppFooter from "../../components/AppFooter/AppFooter";
import AppHeader from "../../components/AppHeader/AppHeader";
import SideMenu from "../../components/SideMenu/SideMenu";

import './colaboradores.css'

function Colaboradores() {

    return (
        <div className="AppContent">
            <AppHeader />
            <div className="SideMenuAndPageContent">
                <SideMenu />
                <div className="PageContent">
                     <Space size={20} direction="vertical">
                    <Typography.Title level={4}>Colaboradores</Typography.Title>
                    <Table


                        columns={[
                            {
                                title: "Foto",
                                dataIndex: "image",
                                render: (link) => {
                                    return <Avatar src={link} />;
                                },
                            },
                            {
                                title: "Primeiro nome",
                                dataIndex: "firstName",
                            },
                            {
                                title: "Sobrenome",
                                dataIndex: "lastName",
                            },
                            {
                                title: "E-mail",
                                dataIndex: "email",
                            },
                            {
                                title: "Sigla",
                                dataIndex: "sigla",
                            },
                            {
                                title: "Equipe",
                                dataIndex: "equipe",
                            },

                        ]}

                        pagination={{
                            pageSize: 5,
                        }}
                    ></Table>
                </Space>
                </div>
               
            </div>
            <AppFooter />
        </div>

    );
}
export default Colaboradores;