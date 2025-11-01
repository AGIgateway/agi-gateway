"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "components/ui/card"
import { Button } from "components/ui/button"
import { Progress } from "components/ui/progress"
import { Input } from "components/ui/input"
import { Textarea } from "components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "components/ui/select"
import { RadioGroup, RadioGroupItem } from "components/ui/radio-group"
import { Checkbox } from "components/ui/checkbox"
import { Field, FieldLabel, FieldDescription, FieldGroup } from "components/ui/field"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "components/ui/form"
import { CheckCircle2, ChevronLeft, ChevronRight, GraduationCap, User, Users, Target } from "lucide-react"

type StudentAssessmentFormValues = {
    // Step 1: Personal Information
    fullName: string
    dateOfBirth: string
    gender: string
    nationality: string
    contactNumber: string
    email: string
    preferredContact: string

    // Step 2: Guardian Information
    isUnder18: boolean
    guardianName?: string
    guardianRelationship?: string
    guardianContact?: string
    guardianEmail?: string
    guardianOccupation?: string

    // Step 3: Academic Background
    academicLevel: string
    currentInstitution: string
    fieldOfStudy: string
    currentGPA: string
    preferredDestination: string
    preferredCourse: string
    englishProficiency: string
    testScores?: string

    // Step 4: Goals & Motivation
    studyAbroadReason: string
    graduationYear: string
    careerAspirations: string
    financialAidRequired: boolean
    financialAidDetails?: string

    // Step 5: Consent
    accuracyConfirmed: boolean
    contactConsent: boolean
}

const steps = [
    { id: 1, title: "Personal Info", icon: User, description: "Tell us about yourself" },
    { id: 2, title: "Guardian Info", icon: Users, description: "Parent or guardian details" },
    { id: 3, title: "Academic", icon: GraduationCap, description: "Your education background" },
    { id: 4, title: "Goals", icon: Target, description: "Your aspirations" },
    { id: 5, title: "Confirm", icon: CheckCircle2, description: "Review and submit" },
]

export default function StudentAssessmentPage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const form = useForm<StudentAssessmentFormValues>({
        defaultValues: {
            fullName: "",
            dateOfBirth: "",
            gender: "",
            nationality: "",
            contactNumber: "",
            email: "",
            preferredContact: "email",
            isUnder18: false,
            academicLevel: "",
            currentInstitution: "",
            fieldOfStudy: "",
            currentGPA: "",
            preferredDestination: "",
            preferredCourse: "",
            englishProficiency: "",
            studyAbroadReason: "",
            graduationYear: "",
            careerAspirations: "",
            financialAidRequired: false,
            accuracyConfirmed: false,
            contactConsent: false,
        },
    })

    const isUnder18 = form.watch("isUnder18")
    const financialAidRequired = form.watch("financialAidRequired")

    const progress = (currentStep / steps.length) * 100

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const onSubmit = async (data: StudentAssessmentFormValues) => {
        try {
            const response = await fetch("http://localhost:3001/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    type: "assessment",
                    data: data,
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to submit assessment")
            }

            setIsSubmitted(true)
            window.scrollTo({ top: 0, behavior: "smooth" })
        } catch (error) {
            console.error("Error submitting assessment:", error)
            alert(
                "Sorry, there was an error submitting your assessment. Please try again or contact us directly at info@agigateway.co.nz",
            )
        }
    }

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-background py-12 px-4">
                <div className="container max-w-2xl mx-auto">
                    <Card className="text-center">
                        <CardContent className="pt-12 pb-12">
                            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold mb-3">Assessment Submitted Successfully!</h2>
                            <p className="text-muted-foreground mb-8">
                                Thank you for completing the self-assessment. Our team will review your information and contact you
                                within 24-48 hours with personalized guidance.
                            </p>
                            <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="container max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-3">Student Self-Assessment</h1>
                    <p className="text-muted-foreground text-lg">Ready to Study in New Zealand? Tell Us Your Story</p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between mb-3">
                        <span className="text-sm font-medium">
                            Step {currentStep} of {steps.length}
                        </span>
                        <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                </div>

                {/* Step Indicators */}
                <div className="flex justify-between mb-8 overflow-x-auto pb-2">
                    {steps.map((step) => {
                        const StepIcon = step.icon
                        const isActive = currentStep === step.id
                        const isCompleted = currentStep > step.id

                        return (
                            <div key={step.id} className="flex flex-col items-center min-w-20 mt-4 flex-1">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all ${isCompleted
                                        ? "bg-primary text-primary-foreground"
                                        : isActive
                                            ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                                            : "bg-muted text-muted-foreground"
                                        }`}
                                >
                                    <StepIcon className="w-5 h-5" />
                                </div>
                                <span
                                    className={`text-xs font-medium text-center ${isActive ? "text-foreground" : "text-muted-foreground"}`}
                                >
                                    {step.title}
                                </span>
                            </div>
                        )
                    })}
                </div>

                {/* Form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">{steps[currentStep - 1].title}</CardTitle>
                                <CardDescription>{steps[currentStep - 1].description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <FieldGroup>
                                    {/* Step 1: Personal Information */}
                                    {currentStep === 1 && (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="fullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Full Name *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your full name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="dateOfBirth"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Date of Birth *</FormLabel>
                                                        <FormControl>
                                                            <Input type="date" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="gender"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Gender *</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup onValueChange={field.onChange} value={field.value}>
                                                                <div className="flex gap-6">
                                                                    <Field orientation="horizontal">
                                                                        <RadioGroupItem value="male" id="male" />
                                                                        <FieldLabel htmlFor="male">Male</FieldLabel>
                                                                    </Field>
                                                                    <Field orientation="horizontal">
                                                                        <RadioGroupItem value="female" id="female" />
                                                                        <FieldLabel htmlFor="female">Female</FieldLabel>
                                                                    </Field>
                                                                    <Field orientation="horizontal">
                                                                        <RadioGroupItem value="other" id="other" />
                                                                        <FieldLabel htmlFor="other">Other</FieldLabel>
                                                                    </Field>
                                                                </div>
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="nationality"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Nationality *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your nationality" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="contactNumber"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Contact Number *</FormLabel>
                                                        <FormControl>
                                                            <Input type="tel" placeholder="+880 1234567890" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email Address *</FormLabel>
                                                        <FormControl>
                                                            <Input type="email" placeholder="your.email@example.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="preferredContact"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Preferred Contact Method *</FormLabel>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select contact method" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="email">Email</SelectItem>
                                                                <SelectItem value="phone">Phone</SelectItem>
                                                                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}

                                    {/* Step 2: Guardian Information */}
                                    {currentStep === 2 && (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="isUnder18"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                                                            <FormControl>
                                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                            </FormControl>
                                                            <div>
                                                                <FormLabel className="font-medium">I am under 18 years old</FormLabel>
                                                                <FieldDescription>
                                                                    Check this if you need to provide guardian information
                                                                </FieldDescription>
                                                            </div>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {isUnder18 && (
                                                <>
                                                    <FormField
                                                        control={form.control}
                                                        name="guardianName"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Guardian Full Name *</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter guardian's full name" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="guardianRelationship"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Relationship to Student *</FormLabel>
                                                                <Select onValueChange={field.onChange} value={field.value}>
                                                                    <FormControl>
                                                                        <SelectTrigger>
                                                                            <SelectValue placeholder="Select relationship" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="father">Father</SelectItem>
                                                                        <SelectItem value="mother">Mother</SelectItem>
                                                                        <SelectItem value="guardian">Legal Guardian</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="guardianContact"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Guardian Contact Number *</FormLabel>
                                                                <FormControl>
                                                                    <Input type="tel" placeholder="+880 1234567890" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="guardianEmail"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Guardian Email Address *</FormLabel>
                                                                <FormControl>
                                                                    <Input type="email" placeholder="guardian@example.com" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="guardianOccupation"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Guardian Occupation (Optional)</FormLabel>
                                                                <FormControl>
                                                                    <Input placeholder="Enter occupation" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </>
                                            )}

                                            {!isUnder18 && (
                                                <div className="text-center py-12">
                                                    <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                                                    <p className="text-muted-foreground">
                                                        Guardian information is not required for students 18 years or older.
                                                    </p>
                                                    <p className="text-sm text-muted-foreground mt-2">
                                                        Click "Next" to continue to the next step.
                                                    </p>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* Step 3: Academic Background */}
                                    {currentStep === 3 && (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="academicLevel"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Current Academic Level *</FormLabel>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select your current level" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="high-school">High School</SelectItem>
                                                                <SelectItem value="undergraduate">Undergraduate</SelectItem>
                                                                <SelectItem value="postgraduate">Postgraduate</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="currentInstitution"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Current School / College / University *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter institution name" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="fieldOfStudy"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Field of Study / Major *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g., Computer Science, Business, Engineering" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="currentGPA"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Current GPA / Grades *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g., 3.8/4.0 or 85%" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="preferredDestination"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Preferred Study Destination *</FormLabel>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select destination" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="new-zealand">New Zealand</SelectItem>
                                                                <SelectItem value="australia">Australia</SelectItem>
                                                                <SelectItem value="uk">United Kingdom</SelectItem>
                                                                <SelectItem value="usa">United States</SelectItem>
                                                                <SelectItem value="canada">Canada</SelectItem>
                                                                <SelectItem value="other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="preferredCourse"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Preferred Course / Program *</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g., Master's in Data Science" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="englishProficiency"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>English Proficiency Test *</FormLabel>
                                                        <Select onValueChange={field.onChange} value={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select test type" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="ielts">IELTS</SelectItem>
                                                                <SelectItem value="pte">PTE</SelectItem>
                                                                <SelectItem value="toefl">TOEFL</SelectItem>
                                                                <SelectItem value="none">None (Not taken yet)</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="testScores"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Test Scores (if any)</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="e.g., IELTS 7.5, PTE 65" {...field} />
                                                        </FormControl>
                                                        <FieldDescription>Leave blank if you haven't taken the test yet</FieldDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}

                                    {/* Step 4: Goals & Motivation */}
                                    {currentStep === 4 && (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="studyAbroadReason"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Why do you want to study abroad? *</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Share your motivation and goals for studying abroad..."
                                                                className="min-h-32"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FieldDescription>
                                                            Tell us what drives you to pursue international education
                                                        </FieldDescription>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="graduationYear"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Desired Graduation Year / Study Timeline *</FormLabel>
                                                        <Select onValueChange={field.onChange} value={field.value}>
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
                                                                <SelectItem value="2029">2029</SelectItem>
                                                                <SelectItem value="2030">2030</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="careerAspirations"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Career Aspirations *</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Describe your career goals and how studying abroad will help you achieve them..."
                                                                className="min-h-32"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="financialAidRequired"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                                                            <FormControl>
                                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                                            </FormControl>
                                                            <div>
                                                                <FormLabel className="font-medium">I require scholarships or financial aid</FormLabel>
                                                                <FieldDescription>
                                                                    Check this if you need assistance with funding your education
                                                                </FieldDescription>
                                                            </div>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            {financialAidRequired && (
                                                <FormField
                                                    control={form.control}
                                                    name="financialAidDetails"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Financial Aid Details</FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    placeholder="Please provide details about your financial aid requirements..."
                                                                    className="min-h-24"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            )}
                                        </>
                                    )}

                                    {/* Step 5: Consent & Confirmation */}
                                    {currentStep === 5 && (
                                        <>
                                            <div className="bg-muted/50 p-6 rounded-lg mb-6">
                                                <h3 className="font-semibold mb-3">Review Your Information</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Please review all the information you've provided before submitting. You can go back to any
                                                    step to make changes.
                                                </p>
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="accuracyConfirmed"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <div className="flex items-start gap-3 p-4 border rounded-lg">
                                                            <FormControl>
                                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                                                            </FormControl>
                                                            <div>
                                                                <FormLabel className="font-medium">
                                                                    I confirm that all information provided is accurate *
                                                                </FormLabel>
                                                                <FieldDescription className="mt-1">
                                                                    By checking this box, you certify that all information submitted is true and complete
                                                                    to the best of your knowledge.
                                                                </FieldDescription>
                                                            </div>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="contactConsent"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <div className="flex items-start gap-3 p-4 border rounded-lg">
                                                            <FormControl>
                                                                <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-1" />
                                                            </FormControl>
                                                            <div>
                                                                <FormLabel className="font-medium">I consent to AGI Gateway contacting me *</FormLabel>
                                                                <FieldDescription className="mt-1">
                                                                    By checking this box, you agree to receive guidance, updates, and information from AGI
                                                                    Gateway regarding your study abroad journey.
                                                                </FieldDescription>
                                                            </div>
                                                        </div>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                                                <p className="text-sm text-muted-foreground">
                                                    By submitting this form, you agree to our{" "}
                                                    <a href="/privacy-policy" className="text-primary underline">
                                                        Privacy Policy
                                                    </a>{" "}
                                                    and{" "}
                                                    <a href="/terms-of-use" className="text-primary underline">
                                                        Terms of Service
                                                    </a>
                                                    .
                                                </p>
                                            </div>
                                        </>
                                    )}
                                </FieldGroup>
                            </CardContent>
                        </Card>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-8">
                            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                Previous
                            </Button>

                            {currentStep < steps.length ? (
                                <Button type="button" onClick={nextStep}>
                                    Next
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button type="submit">
                                    Submit Assessment
                                    <CheckCircle2 className="w-4 h-4 ml-2" />
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
