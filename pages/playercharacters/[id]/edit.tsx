import { Alert } from "@mantine/core";
import NewPlayerCharacter from "components/charactercreation/NewPlayerCharacter";
import { useRouter } from "next/router";

export default function NewPlayerCharacterPage({}) {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id === "string") {
    return <NewPlayerCharacter id={id} />
  } else {
    return <Alert color="red">ERROR: Could not parse ID</Alert>;
  }
}
