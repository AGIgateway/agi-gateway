// src/components/ConsultationForm.tsx


// Quick Enquiry Form
// 	•	Full Name
// 	•	Email Address
// 	•	WhatsApp / Phone Number
// 	•	Current Qualification
// 	•	Preferred Course or Subject Area
// 	•	Intended Intake (Month/Year)
// 	•	Message / Question

// [Submit & Get Free Consultation →]
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { consultationFormSchema } from '@/lib/schemas';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, // 👈 don't forget this!
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { z } from 'zod';

// Infer types from Zod schema (no need to manually define!)
type ConsultationFormValues = z.infer<typeof consultationFormSchema>;

export function ConsultationForm() {
    const form = useForm<ConsultationFormValues>({
        resolver: zodResolver(consultationFormSchema), // 👈 attach resolver
        defaultValues: {
            name: '',
            email: '',
            mobile: '',
            studyDestination: '',
            studyYear: '',
            studyIntake: '',
            consent: false,
        },
    });

    function onSubmit(data: ConsultationFormValues) {
        const formattedData = {
            ...data,
            mobile: '+880' + data.mobile,
        };

        console.log('Form submitted:', formattedData);
        alert('Thank you! Our counsellor will contact you soon.');
        form.reset();
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your full name" {...field} />
                                </FormControl>
                                <FormMessage /> {/* 👈 show error */}
                            </FormItem>
                        )}
                    />

                    {/* Email */}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Enter your email address" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Mobile Number */}
                    <FormField
                        control={form.control}
                        name="mobile"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Mobile Number</FormLabel>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-muted-foreground">+880</span>
                                    <FormControl>
                                        <Input
                                            type="tel"
                                            placeholder="10-digit number (e.g., 1712345678)"
                                            className="flex-1"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Study Destination */}
                    <FormField
                        control={form.control}
                        name="studyDestination"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Study Destination</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a country" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="newzealand">New Zealand</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="canada">Canada</SelectItem>
                                        <SelectItem value="australia">Australia</SelectItem>
                                        <SelectItem value="germany">Germany</SelectItem>
                                        <SelectItem value="japan">Japan</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Study Year */}
                    <FormField
                        control={form.control}
                        name="studyYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Study Year</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select year" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="2025">2025</SelectItem>
                                        <SelectItem value="2026">2026</SelectItem>
                                        <SelectItem value="2027">2027</SelectItem>
                                        <SelectItem value="2028">2028</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Study Intake */}
                    <FormField
                        control={form.control}
                        name="studyIntake"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preferred Study Intake</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select intake" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="fall">Fall (August - December)</SelectItem>
                                        <SelectItem value="spring">Spring (January - May)</SelectItem>
                                        <SelectItem value="summer">Summer (May - August)</SelectItem>
                                        <SelectItem value="winter">Winter (December - March)</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Consent Checkbox */}
                    <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>
                                        By clicking you agree to our{' '}
                                        <a href="/privacy-policy" className="text-primary underline">
                                            Privacy Policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="/terms-of-use" className="text-primary underline">
                                            Terms & Conditions
                                        </a>
                                        *
                                    </FormLabel>
                                </div>
                                <FormMessage className="ml-8 mt-1" /> {/* adjust position if needed */}
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        size="lg"
                        disabled={form.formState.isSubmitting}
                    >
                        {form.formState.isSubmitting ? 'Submitting...' : 'Get Started for Free'}
                    </Button>
                </form>
            </Form>

        </div>
    );
}


