import "styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

import { ThemeIcon } from "@mantine/core";

import { MantineProvider } from "@mantine/core";
import {
  IconHammer,
  IconHome,
  IconMan,
  IconSword,
  IconTree,
  IconUser,
} from "@tabler/icons";
import { NotificationsProvider } from "@mantine/notifications";

import axios from "axios";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import Shell from "components/common/nav/shell";
import { trpc } from "../utils/trpc";

const queryClient = new QueryClient();

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { publicRuntimeConfig } = getConfig();
  axios.defaults.baseURL = `${process.env.NEXT_PUBLIC_URL}/api`; // TODO: Why isn't this working with the runtime config

  const router = useRouter();
  const path = router.asPath;

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
    /*{
      icon: (
        <ThemeIcon variant="outline" color="blue">
          <IconUser />
        </ThemeIcon>
      ),
      text: "Player Characters",
      href: "/playercharacters",
    },*/
  ];

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <NotificationsProvider>
            <Shell path={path} pages={pages}>
              <Component {...pageProps} />
            </Shell>
          </NotificationsProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </MantineProvider>
  );
}

export default trpc.withTRPC(App);
