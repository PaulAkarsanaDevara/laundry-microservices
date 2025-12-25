import { AuthRepository } from "../modules/auth/auth.repository";
import { AuthService } from "../modules/auth/auth.service";
import { AuthController } from "../modules/auth/auth.controller";

const authRepo = new AuthRepository();
const authService = new AuthService(authRepo);
const authController = new AuthController(authService);

export const container = {
  authController
}


