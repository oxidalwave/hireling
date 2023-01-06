import prisma from "lib/prisma";
import { procedure } from "server/trpc";
import { z } from "zod";
import { EventEmitter } from "events";
import { observable } from "@trpc/server/observable";

const ee = new EventEmitter();

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
    async ({ input }) => {
      const message = await prisma.message.create({
        data: {
          message: input.message,
          user: { connect: { email: input.email } },
        },
      });
      ee.emit('add', message)
    }
  );

  const onAdd = procedure
    .subscription(() => {
      return observable<ChatMessage>((emit) => {
        const onAdd = (d: ChatMessage) => {
          emit.next(d);
        }

        ee.on('add', onAdd);

        return () => {
          ee.off('add', onAdd);
        }
      })
    })

const messageProcedures = {
  getRecentMessages,
  addMessage,
  onAdd
};

export default messageProcedures;
