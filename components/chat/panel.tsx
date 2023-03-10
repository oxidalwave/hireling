import { ActionIcon, LoadingOverlay, TextInput } from "@mantine/core";
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
      <div className="h-full">
        <LoadingOverlay visible={true} overlayBlur={2} />
      </div>
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
      setMessage("");
    }
  };

  return (
    <div className="hidden lg:block w-64 h-full">
      <div className="flex flex-col h-full justify-between">
        <div className="pb-2 overflow-y-auto">
          <div className="flex flex-col justify-start">
            {data.map(({ user, message }, i) =>
              user.email === session?.user?.email ? (
                <div
                  key={i}
                  className="bg-sky-900 rounded-xl rounded-br-sm p-2 m-2 ml-0"
                >
                  <div className="text-sky-200">{user.email}</div>
                  <div className="text-white">{message}</div>
                </div>
              ) : (
                <div
                  key={i}
                  className="bg-sky-700 rounded-xl rounded-tl-sm p-2 m-2"
                >
                  <div className="text-sky-200">{user.email}</div>
                  <div className="text-white">{message}</div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="p-2">
          <TextInput
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
            onKeyDown={handleKeyDown}
            disabled={!session}
          />
        </div>
      </div>
    </div>
  );
}
