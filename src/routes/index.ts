import express from 'express';
const router = express.Router();
import { Request, Response, NextFunction } from 'express';

/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  return res.render('index', { title: 'Express' });
});

export default router;
