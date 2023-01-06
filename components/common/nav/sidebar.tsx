import { Aside, MediaQuery } from "@mantine/core";
import ChatPanel from "components/chat/panel";

export default function Sidebar() {
  return (
    <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
      <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        <ChatPanel />
      </Aside>
    </MediaQuery>
  );
}
