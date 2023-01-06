import prisma from "lib/prisma";
import { procedure } from "server/trpc";
import { z } from "zod";
import { EventEmitter } from "events";
import { observable } from "@trpc/server/observable";
import { Prisma } from "@prisma/client";

const ee = new EventEmitter();

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
  .mutation(async ({ input }) => {
    const message = await prisma.message.create({
      data: {
        message: input.message,
        user: { connect: { email: input.email } },
      },
      select: {
        message: true,
        user: {
          select: {
            email: true,
          },
        },
      },
    });
    ee.emit("add", message);
  });

const onAdd = procedure.subscription(() => {
  return observable<
    Prisma.MessageGetPayload<{
      select: { message: true; user: { select: { email: true } } };
    }>
  >((emit) => {
    const onAdd = (
      d: Prisma.MessageGetPayload<{
        select: { message: true; user: { select: { email: true } } };
      }>
    ) => {
      emit.next(d);
    };

    ee.on("add", onAdd);

    return () => {
      ee.off("add", onAdd);
    };
  });
});

const messageProcedures = {
  getRecentMessages,
  addMessage,
  onAdd,
};

export default messageProcedures;
