import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import React from "react";

import { AppShell, Stack, Divider } from "@mantine/core";

import { Drawer } from "components/common/nav/drawer";
import Breadcrumb from "components/common/nav/breadcrumb";
import Sidebar from "./sidebar";
import { AppBar } from "./appbar";
export default function Shell({ children, pages, path }) {
  const [drawer, setDrawer] = useState(false);

  return (
    <AppShell
      header={<AppBar drawer={drawer} setDrawer={setDrawer} />}
      navbar={<Drawer open={drawer} pages={pages} />}
      aside={<Sidebar />}
    >
      <Stack>
        <Breadcrumb path={path} />
        <Divider />
        {children}
      </Stack>
    </AppShell>
  );
}
