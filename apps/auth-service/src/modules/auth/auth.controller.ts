import {Request, Response } from 'express';
import { AuthService } from './auth.service';
import { verifyToken } from '../../shared/jwt';

export class AuthController {
  constructor(private service: AuthService) {}

  register = async(req: Request, res: Response) => {
    const user = await this.service.register(req.body);
    res.status(201).json({
      status: true,
      message: "User register success",
      data: user
    })
  }

  login = async(req: Request, res: Response) => {
    const {email, password } = req.body;
    const result = await this.service.login(email, password);
    res.json(result);
  }

  verify = async (req: Request, res: Response) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Token required!' });
    }

    const token = authHeader.replace('Bearer ', '');
    const payload = verifyToken(token);

    res.json({
      valid: true,
      user: payload,
    });
  };

}