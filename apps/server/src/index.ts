import cors from 'cors';
import express from 'express';
import type { NextFunction, Request, Response } from 'express';

import { router } from './routes/index.ts';

const app = express();
const port = Number(process.env.PORT ?? 8082);

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use('/api', router);

app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: { message: `No endpoint matches ${req.method} ${req.originalUrl}.`, status: 404 },
  });
});

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);
  res.status(500).json({
    error: { message: 'Unexpected server error.', status: 500 },
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
