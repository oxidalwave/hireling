import "styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";

import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";

import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import Shell from "components/common/nav/shell";
import { trpc } from "../utils/trpc";
import Head from "next/head";

const queryClient = new QueryClient();

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "dark" }}
    >
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <NotificationsProvider>
            <div>
              <Head>
                <title>Hireling</title>
                <meta
                  name="description"
                  content="Compendium for Pathfinder 2e"
                />
                <link rel="icon" href="public/favicon.ico" />
              </Head>

              <main>
                <Shell path={path}>
                  <Component {...pageProps} />
                </Shell>
              </main>

              <footer></footer>
            </div>
          </NotificationsProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </MantineProvider>
  );
}

export default trpc.withTRPC(App);
