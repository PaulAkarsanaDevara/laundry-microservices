import { Router } from 'express';

import { container } from '../../shared/container';

const router = Router();
const controller = container.authController;

router.post('/register', controller.register);
router.post('/login', controller.login);
router.post('/verify', controller.verify);

export default router;
