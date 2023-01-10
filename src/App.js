import './App.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import {Layout, Menu} from 'antd';
import Worker from "./Worker";
import WorkerReport from "./components/WorkerReport";
import {HomeFilled, LoginOutlined} from "@ant-design/icons";
import React, {useState} from 'react';
import logoSite from './images/logo_ranchovega.png';

const {Header, Footer, Sider} = Layout;

function App() {
    const navigate = useNavigate();
    const [change, setChange] = useState("");
    return (
        <>

            <div>
                <Layout>
                    <Sider
                        breakpoint="lg"
                        collapsedWidth="0"
                        theme="light"
                        onBreakpoint={(broken) => {
                            console.log(broken);
                        }}
                        onCollapse={(collapsed, type) => {
                            console.log(collapsed, type);
                        }}>

                        <div className="logo">
                            <img src={logoSite} style={{}}></img> 
                             </div>
                        <div style={{marginBlock: 64}}>


                        </div>


                        <Menu
                            mode="inline"
                            onClick={({key}) => {
                                navigate(key);
                            }}
                            items={[
                            {
                                label: "Home",
                                key: "/",
                                icon: <HomeFilled></HomeFilled>,
                            },
                            {
                                label: "Management",
                                key: "management",
                                children: [
                                    {
                                        label: "Worker",
                                        key: "/worker",
                                    },
                                    {
                                        label: "Customer",
                                        key: "/customer",
                                    }
                                ]
                            },
                            {
                                label: "Reports",
                                key: "reports",
                                children: [
                                    {
                                        label: "Worker",
                                        key: "/reportWorker",
                                    }
                                ]
                            },
                            {
                                label: "Sign-out",
                                key: "signout",
                                danger: true,
                                icon: <LoginOutlined></LoginOutlined>,
                            }
                        ]}/>

                    </Sider>
                    <Layout>
                        <Header style={{backgroundColor:"#f4f5f5"}}>Header</Header>
                        <Content
                        >

                        </Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </>
    );
}

function Content() {
    return <div className="content-home">
        <Routes>
            <Route path="/" key="/" element={""}> </Route>
            <Route path="/worker" key="/worker"  element={<Worker/>}> </Route>
            <Route path="/reportWorker" key="/reportWorker"  element={<WorkerReport/>}> </Route>
            <Route path="signout" key="signout" element={<div>signout</div>}> </Route>
        </Routes>
    </div>;
}

export default App;



