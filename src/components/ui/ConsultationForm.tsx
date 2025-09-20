// File: @/components/ConsultationForm.tsx
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
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
import { Label } from '@/components/ui/label';

// No Zod schema — we’re not validating anything right now

type ConsultationFormValues = {
    name: string;
    email: string;
    mobile: string;
    studyDestination: string;
    studyYear: string;
    studyIntake: string;
    consent: boolean;
};

export function ConsultationForm() {
    const form = useForm<ConsultationFormValues>({
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
        // Prepend +880 to mobile number before sending
        const formattedData = {
            ...data,
            mobile: '+880' + data.mobile,
        };

        console.log('Form submitted:', formattedData);
        alert('Thank you! Our counsellor will contact you soon.');
        form.reset(); // Optional: reset form after submit
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
                                            placeholder="Enter your mobile number (10 digits)"
                                            className="flex-1"
                                            {...field}
                                        />
                                    </FormControl>
                                </div>
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
                                        <SelectItem value="usa">United States</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="canada">Canada</SelectItem>
                                        <SelectItem value="australia">Australia</SelectItem>
                                        <SelectItem value="germany">Germany</SelectItem>
                                        <SelectItem value="japan">Japan</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
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
                                        <a href="/privacy" className="text-primary underline">
                                            Privacy Policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="/terms" className="text-primary underline">
                                            Terms & Conditions
                                        </a>
                                        *
                                    </FormLabel>
                                </div>
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit" className="w-full" size="lg">
                        Get Started for Free
                    </Button>
                </form>
            </Form>
        </div>
    );
}