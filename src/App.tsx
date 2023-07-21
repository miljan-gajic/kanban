import type { Component } from "solid-js";

import Styles from "./App.module.scss";

import BoardContent from "@/components/BoardContent/BoardContent";
import Content from "@/components/Content/Content";
import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarContent from "@/components/Sidebar/SidebarContent/SidebarContent";
import FooterShowHideAction from "@/components/Sidebar/SidebarFooter/FooterShowHideAction/FooterShowHideAction";
import FooterThemeToggle from "@/components/Sidebar/SidebarFooter/FooterThemeToggle/FooterThemeToggle";
import SidebarFooter from "@/components/Sidebar/SidebarFooter/SidebarFooter";
import SidebarLogo from "@/components/Sidebar/SidebarLogo/SidebarLogo";
import TopMenuBar from "@/components/TopMenuBar/TopMenuBar";

import boardsAndTasks from "@/assets/data/boardsAndTasks.json";

const boards = boardsAndTasks.map((board) => board.board);

const App: Component = () => {
  return (
    <div class={Styles.App}>
      <Sidebar>
        <SidebarLogo />
        <SidebarContent boards={boards} />
        <SidebarFooter>
          <FooterThemeToggle />
          <FooterShowHideAction />
        </SidebarFooter>
      </Sidebar>
      <Content>
        <TopMenuBar />
        <BoardContent />
      </Content>
    </div>
  );
};

export default App;
