// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
