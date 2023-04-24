/* eslint-disable prettier/prettier */
import { isBase64 } from "@nestjs/class-validator";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request } from 'express';
import { HttpException } from "@nestjs/common";
import { decode } from "jsonwebtoken";

export function extractRequestToken(req: Request) {
  const header = req.get("authorization");

  if (header && header.startsWith("Bearer") && header.split(" ").length == 2) {
    return header.split(" ")[1];
  }

  return null;
}

export const Token = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    data;
    const req = ctx.switchToHttp().getRequest();
    const bearer = extractRequestToken(req);

    const x_header = req.get("X-Accounttesting");

    if (!bearer) return null;

    const decodedBearer: azureToken = decode(bearer) as unknown as azureToken;
    if (!x_header) return decodedBearer;
    // validates if userId is one of the developers
    // valAccountTestingUser(decodedBearer.userId);

    if (!isBase64(x_header)) {
        throw new HttpException('UNAUTHORIZED', 401);
    }
    const newOid: string = Buffer.from(x_header, "base64").toString("binary");

    req["olduserId"] = decodedBearer.userId;
    decodedBearer.userId = newOid;
    return decodedBearer;
  }
);

export type azureToken = {
    aud: string;
    exp: number;
    username: string;
    email: string;
    uti: string;
    ver: string;
    userId: string;
    idtyp?: string;
};

export type azureTokenHeader = {
  typ: string;
  alg: string;
  x5t: string;
  kid: string;
};
