export default (req, res) => {
  res.json({
    file: req.body.substring(
      req.body.indexOf('application/octet-stream\r\n\r\n') + 28,
      req.body.lastIndexOf('\r\n------')
    ),
  });
};
