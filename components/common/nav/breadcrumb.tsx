import { Breadcrumbs, Anchor } from "@mantine/core";
import Link from "next/link";

export default function Breadcrumb({ path }) {
  const pathParts = path
    .split("/")
    .filter((p) => p !== "")
    .reduce((p: { label: string; href: string }[], c: string) => {
      const lastItem = p.length === 0 ? { href: "" } : p[p.length - 1];
      return [...p, { label: c, href: lastItem.href.concat("/" + c) }];
    }, []);

  return (
    <Breadcrumbs>
      <Anchor component={Link} href={"/"}>
        Home
      </Anchor>

      {pathParts.map((pathPart, i) => (
        <Anchor key={`breadcrumb-${i}`} component={Link} href={pathPart.href}>
          {pathPart.label
            .split(" ")
            .map((w, i) => w[0].toUpperCase() + w.substring(1))}
        </Anchor>
      ))}
    </Breadcrumbs>
  );
}
