import {z} from "zod";

enum referralStatus {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    COMPLETED = "COMPLETED",
    REJECTED = "REJECTED",
    EXPIRED = "EXPIRED",
}

export const referralSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    referrerId: z.string(),
    userId: z.string(),
    // courseId: z.string().optional(),
    referralCode: z.string().optional(), 
    status: z.nativeEnum(referralStatus).default(referralStatus.PENDING).optional(),
});
