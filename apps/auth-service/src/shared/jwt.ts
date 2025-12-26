import jwt, { JwtPayload, SignOptions } from 'jsonwebtoken';

import { HttpException } from '../../../../packages/shared-utils/src/http-exception';

export interface AuthPayload extends JwtPayload {
  userId: string;
  role: string;
}

const JWT_SECRET = process.env.JWT_SECRET || ('rahasiabang@2025' as string);
const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN) || (900 as number);

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

export const signToken = (payload: JwtPayload, expiresIn: number = JWT_EXPIRES_IN): string => {
  const options: SignOptions = { expiresIn };
  return jwt.sign(payload, JWT_SECRET, options);
};

export const verifyToken = (token: string): AuthPayload => {
  try {
    return jwt.verify(token, JWT_SECRET) as AuthPayload;
  } catch {
    throw new HttpException(401, 'Invalid or expired token');
  }
};
