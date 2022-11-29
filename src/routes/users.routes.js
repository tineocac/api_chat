const { Router } = require("express");
const router = Router();
const { userRegister, getAllUsers } = require("../controllers");
const authenticate = require("../middlewares/auth.middlware");

/**
 * @openapi
 * /api/v1/users:
 *   post:
 *     summary: Register a new user into the app
 *     tags: [Users]
 *     requestBody:
 *       description: To register a new user you need a firstname, lastname, email, phone and password
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/register"
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Users"
 *
 */

router.post("/users", userRegister);
router.get("/users",authenticate,  getAllUsers);

module.exports = router;
