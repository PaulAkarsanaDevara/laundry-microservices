import { app } from './app';

const PORT = process.env.APP_PORT || 3001;

(async () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
