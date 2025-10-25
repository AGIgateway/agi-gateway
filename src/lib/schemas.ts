// src/lib/schemas.ts (or wherever you keep schemas)
import { z } from 'zod';

// export const consultationFormSchema = z.object({
//     name: z.string().min(1, 'Name is required'),
//     email: z.string().email('Invalid email address'),
//     mobile: z
//         .string()
//         .regex(/^\d+$/, 'Mobile number must contain only digits'),
//     studyDestination: z.string().min(1, 'Please select a study destination'),
//     studyYear: z.string().min(1, 'Please select a study year'),
//     studyIntake: z.string().min(1, 'Please select a study intake'),
//     consent: z.boolean().refine((val) => val === true, {
//         message: 'You must agree to the Privacy Policy and Terms & Conditions',
//     }),
// });


export const consultationFormSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    mobile: z
        .string()
        .min(10, 'Mobile number must be at least 10 digits')
        .max(10, 'Mobile number must be exactly 10 digits')
        .regex(/^\d+$/, 'Mobile number must contain only digits'),
    currentQualification: z.string().min(1, 'Please select your current qualification'),
    preferredCourse: z.string().min(1, 'Please enter your preferred course or subject area'),
    studyYear: z.string().min(1, 'Please select your intended intake year'),
    studyIntake: z.string().min(1, 'Please select your preferred intake'),
    message: z.string().min(10, 'Please provide a message or question (at least 10 characters)'),
    consent: z.boolean().refine((val) => val === true, {
        message: 'You must agree to the Privacy Policy and Terms & Conditions',
    }),
});