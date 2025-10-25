import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { consultationFormSchema } from "@/lib/schemas"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import type { z } from "zod"
import { Sparkles, Send } from "lucide-react"
import { cn } from "@/lib/utils"

type ConsultationFormValues = z.infer<typeof consultationFormSchema>

interface ConsultationFormProps {
    variant?: "light" | "dark" | "transparent"
    showHeader?: boolean
    className?: string
}

export function ConsultationForm({ variant = "light", showHeader = true, className }: ConsultationFormProps) {
    const form = useForm<ConsultationFormValues>({
        resolver: zodResolver(consultationFormSchema),
        defaultValues: {
            name: "",
            email: "",
            mobile: "",
            currentQualification: "",
            preferredCourse: "",
            message: "",
            studyYear: "",
            studyIntake: "",
            consent: false,
        },
    })

    function onSubmit(data: ConsultationFormValues) {
        const formattedData = {
            ...data,
            mobile: "+880" + data.mobile,
        }

        console.log("Form submitted:", formattedData)
        alert("Thank you! Our counsellor will contact you soon.")
        form.reset()
    }

    const containerStyles = {
        light: "bg-white rounded-2xl shadow-2xl border-2 border-emerald-100",
        dark: "bg-white/10 backdrop-blur-xl rounded-2xl border-2 border-white/20 shadow-2xl",
        transparent: "bg-transparent",
    }

    const labelStyles = {
        light: "text-foreground",
        dark: "text-white font-medium",
        transparent: "text-foreground",
    }

    const inputStyles = {
        light: "border-2 focus:border-emerald-500 bg-white",
        dark: "border-white/30 focus:border-lime-400 bg-white/10 text-white placeholder:text-white/60 backdrop-blur-sm",
        transparent: "border-2 focus:border-emerald-500 bg-white",
    }

    const selectStyles = {
        light: "border-2 focus:border-emerald-500 bg-white",
        dark: "border-white/30 focus:border-lime-400 bg-white/10 text-white backdrop-blur-sm",
        transparent: "border-2 focus:border-emerald-500 bg-white",
    }

    const textareaStyles = {
        light: "border-2 focus:border-emerald-500 bg-white",
        dark: "border-white/30 focus:border-lime-400 bg-white/10 text-white placeholder:text-white/60 backdrop-blur-sm",
        transparent: "border-2 focus:border-emerald-500 bg-white",
    }

    const checkboxContainerStyles = {
        light: "border-2 border-muted bg-muted/30",
        dark: "border-white/20 bg-white/5",
        transparent: "border-2 border-muted bg-muted/30",
    }

    const checkboxLabelStyles = {
        light: "text-sm",
        dark: "text-sm text-white/90",
        transparent: "text-sm",
    }

    const linkStyles = {
        light: "text-emerald-600 hover:text-emerald-700",
        dark: "text-lime-300 hover:text-lime-200",
        transparent: "text-emerald-600 hover:text-emerald-700",
    }

    return (
        <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
            {variant === "light" && (
                <>
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200 to-lime-200 rounded-full blur-3xl opacity-30" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-lime-200 to-emerald-200 rounded-full blur-3xl opacity-30" />
                </>
            )}

            <div className={cn("relative overflow-hidden", containerStyles[variant])}>
                {variant === "light" && <div className="h-2 bg-gradient-to-r from-lime-500 via-emerald-500 to-lime-500" />}

                <div className="p-8">
                    {showHeader && (
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center shadow-lg">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className={cn("text-2xl font-bold", variant === "dark" ? "text-white" : "text-foreground")}>
                                    Start Your Journey
                                </h3>
                                <p className={cn("text-sm", variant === "dark" ? "text-white/70" : "text-muted-foreground")}>
                                    Fill out the form below to get started
                                </p>
                            </div>
                        </div>
                    )}

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>Full Name *</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Enter your full name"
                                                className={cn("h-11 transition-colors", inputStyles[variant])}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>Email Address *</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Enter your email address"
                                                className={cn("h-11 transition-colors", inputStyles[variant])}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                    </FormItem>
                                )}
                            />

                            {/* Mobile Number */}
                            <FormField
                                control={form.control}
                                name="mobile"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>
                                            WhatsApp / Phone Number *
                                        </FormLabel>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={cn(
                                                    "px-3 h-11 flex items-center text-sm font-medium rounded-lg border-2",
                                                    variant === "dark"
                                                        ? "text-white/90 bg-white/10 border-white/30"
                                                        : "text-muted-foreground bg-muted border-muted",
                                                )}
                                            >
                                                +880
                                            </span>
                                            <FormControl>
                                                <Input
                                                    type="tel"
                                                    placeholder="1712345678"
                                                    className={cn("flex-1 h-11 transition-colors", inputStyles[variant])}
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="currentQualification"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>
                                            Current Qualification
                                        </FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <FormControl>
                                                <SelectTrigger className={cn("h-11 transition-colors", selectStyles[variant])}>
                                                    <SelectValue placeholder="Select your latest qualification" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="SSC">SSC</SelectItem>
                                                <SelectItem value="HSC">HSC</SelectItem>
                                                <SelectItem value="Bachelor">Bachelor's</SelectItem>
                                                <SelectItem value="Master">Master's</SelectItem>
                                                <SelectItem value="Diploma">Diploma</SelectItem>
                                                <SelectItem value="other">Other</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="preferredCourse"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>
                                            Preferred Course or Subject Area
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g., Computer Science, Business, Nursing"
                                                className={cn("h-11 transition-colors", inputStyles[variant])}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                    </FormItem>
                                )}
                            />


                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Study Year */}
                                <FormField
                                    control={form.control}
                                    name="studyYear"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>
                                                Intended Intake (Year) *
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className={cn("h-11 transition-colors", selectStyles[variant])}>
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
                                            <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                        </FormItem>
                                    )}
                                />

                                {/* Study Intake */}
                                <FormField
                                    control={form.control}
                                    name="studyIntake"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>
                                                Preferred Study Intake *
                                            </FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className={cn("h-11 transition-colors", selectStyles[variant])}>
                                                        <SelectValue placeholder="Select intake" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="fall">Fall (Aug - Dec)</SelectItem>
                                                    <SelectItem value="spring">Spring (Jan - May)</SelectItem>
                                                    <SelectItem value="summer">Summer (May - Aug)</SelectItem>
                                                    <SelectItem value="winter">Winter (Dec - Mar)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={cn("text-sm font-semibold", labelStyles[variant])}>
                                            Message / Question
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us about your goals, questions, or anything else we should know..."
                                                className={cn("min-h-[100px] transition-colors", textareaStyles[variant])}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className={variant === "dark" ? "text-red-300" : ""} />
                                    </FormItem>
                                )}
                            />

                            {/* Consent Checkbox */}
                            <FormField
                                control={form.control}
                                name="consent"
                                render={({ field }) => (
                                    <FormItem
                                        className={cn(
                                            "flex flex-row items-start space-x-3 space-y-0 rounded-lg border-2 p-4",
                                            checkboxContainerStyles[variant],
                                        )}
                                    >
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-0.5" />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className={checkboxLabelStyles[variant]}>
                                                By clicking you agree to our{" "}
                                                <a href="/privacy-policy" className={cn("underline font-medium", linkStyles[variant])}>
                                                    Privacy Policy
                                                </a>{" "}
                                                and{" "}
                                                <a href="/terms-of-use" className={cn("underline font-medium", linkStyles[variant])}>
                                                    Terms & Conditions
                                                </a>
                                                *
                                            </FormLabel>
                                        </div>
                                        <FormMessage className={cn("ml-8 mt-1", variant === "dark" ? "text-red-300" : "")} />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full h-12 bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base"
                                size="lg"
                                disabled={form.formState.isSubmitting}
                            >
                                {form.formState.isSubmitting ? (
                                    "Submitting..."
                                ) : (
                                    <>
                                        Submit & Get Free Consultation
                                        <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    )
}
