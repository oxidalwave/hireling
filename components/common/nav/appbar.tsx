import {
  Avatar,
  Burger,
  Button,
  Group,
  Header,
  MediaQuery,
  Text,
} from "@mantine/core";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import icon from "public/hireling.png";

export function AppBar({ drawer, setDrawer }) {
  const { data: session } = useSession();

  const account = session ? (
    <Button onClick={() => signOut()}>Sign Out</Button>
  ) : (
    <Button onClick={() => signIn()}>Log In</Button>
  );

  return (
    <Header height={{ base: 50, md: 70 }} p="md">
      <Group position="apart">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={drawer}
              onClick={() => setDrawer((o) => !o)}
              size="sm"
              mr="xl"
            />
          </MediaQuery>
          <Group>
            <Avatar size="sm" radius="xl">
              <Image height={32} src={icon} alt="Site Icon" />
            </Avatar>
            <Text>Hireling</Text>
          </Group>
        </div>
        {account}
      </Group>
    </Header>
  );
}
