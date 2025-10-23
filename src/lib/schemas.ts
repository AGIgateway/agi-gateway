// src/lib/schemas.ts (or wherever you keep schemas)
import { z } from 'zod';

export const consultationFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    mobile: z
        .string()
        .regex(/^\d+$/, 'Mobile number must contain only digits'),
    studyDestination: z.string().min(1, 'Please select a study destination'),
    studyYear: z.string().min(1, 'Please select a study year'),
    studyIntake: z.string().min(1, 'Please select a study intake'),
    consent: z.boolean().refine((val) => val === true, {
        message: 'You must agree to the Privacy Policy and Terms & Conditions',
    }),
});