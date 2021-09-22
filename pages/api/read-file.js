import Cors from 'cors';

const cors = Cors({
  methods: ['GET', 'HEAD'],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async (req, res) => {
  // Run the middleware
  await runMiddleware(req, res, cors);
  res.json({
    file: req.body.substring(
      req.body.indexOf('application/octet-stream\r\n\r\n') + 28,
      req.body.lastIndexOf('\r\n------')
    ),
  });
};
