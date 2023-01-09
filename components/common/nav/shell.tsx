import { useState } from "react";
import React from "react";

import { ThemeIcon } from "@mantine/core";

import { Drawer } from "components/common/nav/drawer";
import Breadcrumb from "components/common/nav/breadcrumb";
import { AppBar } from "./appbar";
import {
  IconHammer,
  IconHome,
  IconMan,
  IconSword,
  IconTree,
  IconUser,
} from "@tabler/icons";
import { useSession } from "next-auth/react";
import ChatPanel from "components/chat/panel";
export default function Shell({ children, path }) {
  const { data: session } = useSession();

  const [drawer, setDrawer] = useState(false);

  const pages = [
    {
      icon: (
        <ThemeIcon variant="outline" color="blue">
          <IconHome />
        </ThemeIcon>
      ),
      text: "Home",
      href: "/",
    },
    {
      icon: (
        <ThemeIcon variant="outline" color="blue">
          <IconTree />
        </ThemeIcon>
      ),
      text: "Ancestries",
      href: "/ancestries",
    },
    {
      icon: (
        <ThemeIcon variant="outline" color="blue">
          <IconHammer />
        </ThemeIcon>
      ),
      text: "Backgrounds",
      href: "/backgrounds",
    },
    {
      icon: (
        <ThemeIcon variant="outline" color="blue">
          <IconSword />
        </ThemeIcon>
      ),
      text: "Equipment",
      href: "/equipment",
    },
    {
      icon: (
        <ThemeIcon variant="outline" color="blue">
          <IconMan />
        </ThemeIcon>
      ),
      text: "Player Classes",
      href: "/playerclasses",
    },
    ...(session?.user?.email === "ironoxide42@gmail.com"
      ? [
          {
            icon: (
              <ThemeIcon variant="outline" color="blue">
                <IconUser />
              </ThemeIcon>
            ),
            text: "Player Characters",
            href: "/playercharacters",
          },
        ]
      : []),
  ];

  const footerPages = [
    ...(session?.user?.email === "ironoxide42@gmail.com"
      ? [
          {
            icon: (
              <ThemeIcon variant="outline" color="blue">
                <IconUser />
              </ThemeIcon>
            ),
            text: session.user.email,
            href: "/",
          },
        ]
      : []),
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="h-16 sticky">
        <AppBar drawer={drawer} setDrawer={setDrawer} />
      </div>
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="hidden lg:block w-64">
          <Drawer pages={pages} />
        </div>
        <div className="h-full grow flex flex-col overflow-y-auto p-4">
          <div className="pb-4">
            <Breadcrumb path={path} />
          </div>
          <div className="h-full">{children}</div>
        </div>
        <div className="h-full">
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}
