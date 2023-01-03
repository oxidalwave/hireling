import NextAuth from "next-auth";
import DiscordProvider, { DiscordProfile } from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "lib/prisma";
import { OAuthConfig } from "next-auth/providers";

const discord: OAuthConfig<DiscordProfile>[] =
  process.env.DISCORD_CLIENT_ID && process.env.DISCORD_CLIENT_SECRET
    ? [
        DiscordProvider({
          clientId: process.env.DISCORD_CLIENT_ID,
          clientSecret: process.env.DISCORD_CLIENT_SECRET,
        }),
      ]
    : [];

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    ...discord,
    // ...add more providers here
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
