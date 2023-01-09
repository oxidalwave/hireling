import { useState } from "react";
import React from "react";

import { AppShell, Stack, Divider } from "@mantine/core";
import { ThemeIcon } from "@mantine/core";

import { Drawer } from "components/common/nav/drawer";
import Breadcrumb from "components/common/nav/breadcrumb";
import Sidebar from "./sidebar";
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
    <AppShell
      header={<AppBar drawer={drawer} setDrawer={setDrawer} />}
      navbar={<Drawer open={drawer} pages={pages} />}
      aside={<ChatPanel />}
    >
      <Stack>
        <Breadcrumb path={path} />
        <Divider />
        <div className="h-full">{children}</div>
      </Stack>
    </AppShell>
  );
}
