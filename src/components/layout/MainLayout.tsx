import { Layout, Menu } from "antd";
import { Outlet } from "react-router-dom";
import { adminSideBarItems } from "../../routes/admin.routes";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  //   const items = [
  //     UserOutlined,
  //     VideoCameraOutlined,
  //     UploadOutlined,
  //     UserOutlined,
  //   ].map((icon, index) => ({
  //     key: String(index + 1),
  //     icon: createElement(icon),
  //     label: `nav ${index + 1}`,
  //   }));

  // const items: MenuProps["items"] = [
  //   {
  //     key: "Dashboard",
  //     label: <NavLink to="/admin">Dashboard</NavLink>,
  //   },
  //   {
  //     key: "User Management",
  //     label: "User Management",
  //     children: [
  //       {
  //         key: "Create Admin",
  //         label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
  //       },
  //       {
  //         key: "Create Faculity",
  //         label: <NavLink to="/admin/create-faculity">Create Faculity</NavLink>,
  //       },
  //       {
  //         key: "Create Student",
  //         label: <NavLink to="/admin/create-student">Create Student</NavLink>,
  //       },
  //     ],
  //   },
  // ];

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSideBarItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
