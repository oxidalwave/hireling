import { NextApiRequest, NextApiResponse } from "next";

function query<T>(
  req: NextApiRequest,
  res: NextApiResponse,
  key: string,
  pipe: (s: string) => T
): T | undefined {
  const value: string | string[] | undefined = req.query[key];
  if (typeof value === "string") {
    return pipe(value);
  } else if (typeof value === "undefined") {
    return undefined;
  } else {
    throw new Error(`Invalid format for Query Parameter: ${value}`);
  }
}

function queryArray<T = string>(
  req: NextApiRequest,
  res: NextApiResponse,
  key: string,
  pipe: (s: string) => T
): T[] {
  const value: string | string[] | undefined = req.query[key];
  if (typeof value === "string") {
    throw new Error("Invalid Query format");
  } else if (typeof value === "undefined") {
    return [];
  } else {
    return value.map(pipe);
  }
}

export const queryString = (
  req: NextApiRequest,
  res: NextApiResponse,
  key: string
) => query<string>(req, res, key, (s: string) => s);

export const queryNumber = (
  req: NextApiRequest,
  res: NextApiResponse,
  key: string
) => query<number>(req, res, key, (s: string) => Number(s));

export const queryArrayNumbers = (
  req: NextApiRequest,
  res: NextApiResponse,
  key: string
) => queryArray<number>(req, res, key, (s: string) => Number(s));

export const queryArrayStrings = (
  req: NextApiRequest,
  res: NextApiResponse,
  key: string
) => queryArray<string>(req, res, key, (s: string) => s);
