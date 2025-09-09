import express from 'express';
import { login, register } from '../controllers/user.js';

import { isAuthenticated } from '../middleware/isAuthenticated.js';


const router = express.Router();


router.route('/register').post(register);


router.route("/login").post(isAuthenticated, login);


export default router;