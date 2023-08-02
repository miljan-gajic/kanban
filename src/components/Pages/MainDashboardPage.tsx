import { Component } from "solid-js";
import BoardContent from "../BoardContent/BoardContent";
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";
import SidebarContent from "../Sidebar/SidebarContent/SidebarContent";
import FooterShowHideAction from "../Sidebar/SidebarFooter/FooterShowHideAction/FooterShowHideAction";
import FooterThemeToggle from "../Sidebar/SidebarFooter/FooterThemeToggle/FooterThemeToggle";
import SidebarFooter from "../Sidebar/SidebarFooter/SidebarFooter";
import SidebarLogo from "../Sidebar/SidebarLogo/SidebarLogo";
import TopMenuBar from "../TopMenuBar/TopMenuBar";

const MainDashboard: Component = () => {
  return (
    <>
      <Sidebar>
        <SidebarLogo />
        <SidebarContent />
        <SidebarFooter>
          <FooterThemeToggle />
          <FooterShowHideAction />
        </SidebarFooter>
      </Sidebar>
      <Content>
        <TopMenuBar />
        <BoardContent />
      </Content>
    </>
  );
};

export default MainDashboard;
