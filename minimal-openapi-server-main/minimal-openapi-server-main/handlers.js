export function handleTest(req, res) {
  return res.status(200).json({
    message: 'Greetings from API server',
    recipientName: req.body.name || 'Stranger',
  });
}
