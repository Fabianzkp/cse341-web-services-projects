const router = require("express").Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Welcome page
 *     responses:
 *       200:
 *         description: Returns a welcome message based on authentication status
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 */
router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`Welcome, ${req.user.username || 'User'}! <a href="/auth/logout">Logout</a>`);
  } else {
    res.send('Welcome to my CSE341 - WEB SERVICES PERSONAL PROJECT API! <a href="/auth/github">Login with GitHub</a>');
  }
});

module.exports = router;