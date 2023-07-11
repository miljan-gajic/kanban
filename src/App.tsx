import type { Component } from "solid-js";

import Styles from "./App.module.scss";

import Sidebar from "@/components/Sidebar/Sidebar";
import SidebarContent from "@/components/Sidebar/SidebarContent/SidebarContent";
import FooterShowHideAction from "@/components/Sidebar/SidebarFooter/FooterShowHideAction/FooterShowHideAction";
import FooterThemeToggle from "@/components/Sidebar/SidebarFooter/FooterThemeToggle/FooterThemeToggle";
import SidebarFooter from "@/components/Sidebar/SidebarFooter/SidebarFooter";
import SidebarLogo from "@/components/Sidebar/SidebarLogo/SidebarLogo";

const tempItems = [
  {
    label: "Platform Launch",
  },
  {
    label: "Marketing Plan",
  },
  {
    label: "Roadmap",
  },
];

const App: Component = () => {
  return (
    <div class={Styles.App}>
      <Sidebar>
        <SidebarLogo />
        <SidebarContent boards={tempItems} />
        <SidebarFooter>
          <FooterThemeToggle />
          <FooterShowHideAction />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default App;
