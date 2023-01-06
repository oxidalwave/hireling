import prisma from "lib/prisma";
import { procedure } from "server/trpc";
import { z } from "zod";

interface ChatMessage {
  user: string;
  message: string;
}

const getRecentMessages = procedure
  .input(
    z.object({
      count: z.number(),
    })
  )
  .query(
    async ({ input }) =>
      await prisma.message.findMany({
        orderBy: { id: "asc" },
        take: input.count,
        select: {
          message: true,
          user: {
            select: {
              email: true,
            },
          },
        },
      })
  );

const addMessage = procedure
  .input(
    z.object({
      email: z.string(),
      message: z.string(),
    })
  )
  .mutation(
    async ({ input }) =>
      await prisma.message.create({
        data: {
          message: input.message,
          user: { connect: { email: input.email } },
        },
      })
  );

const messageProcedures = {
  getRecentMessages,
  addMessage,
};

export default messageProcedures;
