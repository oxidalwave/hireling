import React from "react";
import Link from "next/link";

import { Navbar, Stack, Group, UnstyledButton, Text } from "@mantine/core";
export const Drawer = ({ open, pages }) => {
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!open}
      width={{ sm: 200, lg: 300 }}
    >
      <Stack>
        {pages.map(
          (
            p: {
              icon: JSX.Element;
              text: string;
              href: string;
            },
            i
          ) => (
            <div key={`page-${i}`}>
              <UnstyledButton
                sx={(theme) => ({
                  display: "block",
                  width: "100%",
                  padding: theme.spacing.xs,
                  borderRadius: theme.radius.sm,
                  color:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[0]
                      : theme.black,

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[6]
                        : theme.colors.gray[0],
                  },
                })}
                component={Link}
                href={p.href}
              >
                <Group>
                  <>{p.icon}</>
                  <Text>{p.text}</Text>
                </Group>
              </UnstyledButton>
            </div>
          )
        )}
      </Stack>
    </Navbar>
  );
};
