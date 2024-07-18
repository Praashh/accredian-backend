import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";


const authMiddleware = (req: Request, res: Response, next: () => void) => {
  const { token } = req.cookies;
  console.log(token);
  
  if (!token)
    return res.status(400).json({
      success: false,
      message: "Error You have to login First!",
    });

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not defined");
    }
    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    console.log(payload);
    
    req.body.userId = payload.id;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
};

export { authMiddleware };