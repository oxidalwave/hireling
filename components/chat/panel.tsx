import {
  ActionIcon,
  Box,
  Group,
  LoadingOverlay,
  ScrollArea,
  Stack,
  TextInput,
} from "@mantine/core";
import { IconSend } from "@tabler/icons";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { trpc } from "utils/trpc";

export default function ChatPanel({}) {
  const [message, setMessage] = useState<string>("");
  const { data, refetch } = trpc.getRecentMessages.useQuery({ count: 10 });
  const { mutate } = trpc.addMessage.useMutation();
  const { data: session } = useSession();

  if (!data) {
    return (
      <Stack>
        <Box sx={{ maxHeight: "calc(100vh - 160px)" }}>
          <LoadingOverlay visible={true} overlayBlur={2} />
        </Box>
      </Stack>
    );
  }

  const postMessage = () => {
    mutate(
      { message, email: session?.user?.email ?? "" },
      { onSuccess: () => refetch() }
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      postMessage();
      setMessage('')
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="grow pb-2 overflow-y-auto">
        <Stack justify="start">
          {data.map(({ user, message }, i) =>
            user.email === session?.user?.email ? (
              <div key={i} className="bg-sky-900 rounded-xl rounded-br-sm p-2">
                <div className="text-sky-200">{user.email}</div>
                <div className="text-white">{message}</div>
              </div>
            ) : (
              <div key={i} className="bg-sky-700 rounded-xl rounded-tl-sm p-2">
                <div className="text-sky-200">{user.email}</div>
                <div className="text-white">{message}</div>
              </div>
            )
          )}
        </Stack>
      </div>
      <div className="pt-2">
        <div className="flex">
          <div className="grow">
            <TextInput
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
              disabled={!session}
            />
          </div>
          <div className="pt-1 pl-2">
            <ActionIcon onClick={postMessage} disabled={!session}>
              <IconSend size={20} />
            </ActionIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
