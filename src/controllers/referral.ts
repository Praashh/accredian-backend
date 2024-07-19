import { Request, Response } from "express";
import { z } from "zod";
import { referralSchema } from "../zodSchema/referralSchema";
import { prisma } from "../lib/prisma";

async function generateUniqueCode(): Promise<string> {
    while (true) {
        const code = Math.random().toString(36).substring(2, 8).toUpperCase();
        const existingReferral = await prisma.referral.findUnique({
            where: { referralCode: code },
        });
        if (!existingReferral) {
            return code;
        }
    }
}

export async function createReferral(req: Request, res: Response) {
    console.log("referral Body", req.body);
    
    const { success } = referralSchema.safeParse(req.body);
    console.log(success)
    if (success) {
        try {
            const referralCode = await generateUniqueCode();
            console.log("referralCode", referralCode);
            
            const newReferral = await prisma.referral.create({
                data: {
                    referrerId: req.body.referrerId,
                    name: req.body.name,
                    email: req.body.email,
                    userId: req.body.userId,
                    // courseId: req.body.courseId,
                    referralCode,
                    referredAt: new Date(),
                },
            });
            console.log("newReferral", newReferral);
            
            res.status(201).json({ newReferral: newReferral, msg: "newReferral created successfully" });

        } catch (error) {
            const zodError = error as z.ZodError;
            res.status(400).json({ error: error });
        }
    } else {
        res.status(400).json({ error: "Invalid input" });
    }

}