"use client"

import React from "react"
import { Link } from "react-router-dom"
import { ChevronRight, ArrowRight, Download } from "lucide-react"
import type { ServicePageData } from "@/types/service.types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"

export default function ServicePageTemplate({
    heroTitle,
    heroBackgroundImage,
    breadcrumbPath,
    serviceTitle,
    serviceDescription,
    formServiceOptions,
    formDefaultService,
    onFormSubmit,
    abroadStudyLinks,
    brochureUrl,
    helpCtaImage,
    helpCtaTitle,
    helpCtaSubtitle,
    helpCtaButtonText,
    helpCtaButtonHref,
}: ServicePageData) {
    const form = useForm({
        defaultValues: {
            service: formDefaultService,
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    const handleSubmit = (data: any) => {
        if (onFormSubmit) {
            onFormSubmit(data)
        } else {
            console.log("Form submitted:", data)
            alert("Thank you! We will contact you soon.")
            form.reset()
        }
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section
                className="relative h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackgroundImage})`,
                }}
            >
                <div className="text-center text-white z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">{heroTitle}</h1>
                    <nav className="flex items-center justify-center gap-2 text-sm md:text-base">
                        {breadcrumbPath.map((item, index) => (
                            <React.Fragment key={item.href}>
                                <Link to={item.href} className="hover:underline transition-all">
                                    {item.label}
                                </Link>
                                {index < breadcrumbPath.length - 1 && <ChevronRight className="w-4 h-4" />}
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - 2/3 width */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Service Description */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">{serviceTitle}</h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                {serviceDescription.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Application Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">APPLY NOW</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Service Select */}
                                            <FormField
                                                control={form.control}
                                                name="service"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Service</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select service" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                {formServiceOptions.map((option) => (
                                                                    <SelectItem key={option} value={option}>
                                                                        {option}
                                                                    </SelectItem>
                                                                ))}
                                                            </SelectContent>
                                                        </Select>
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Name Input */}
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Your Name*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your name" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {/* Email Input */}
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email Address*</FormLabel>
                                                        <FormControl>
                                                            <Input type="email" placeholder="Enter your email" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />

                                            {/* Phone Input */}
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input type="tel" placeholder="Enter your phone" {...field} />
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        {/* Message Textarea */}
                                        <FormField
                                            control={form.control}
                                            name="message"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Your Message</FormLabel>
                                                    <FormControl>
                                                        <Textarea placeholder="Enter your message" className="min-h-[120px]" {...field} />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />

                                        {/* Submit Button */}
                                        <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto">
                                            APPLY NOW
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Column - 1/3 width */}
                    <div className="space-y-6">
                        {/* Abroad Study Links */}
                        {abroadStudyLinks && abroadStudyLinks.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>ABROAD STUDY</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        {abroadStudyLinks.map((link) => (
                                            <Link
                                                key={link.country}
                                                to={link.href}
                                                className="flex items-center justify-between p-3 rounded-md hover:bg-accent transition-colors group"
                                            >
                                                <span className="font-medium">{link.country}</span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Download Brochure */}
                        {brochureUrl && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>DOWNLOAD BROCHURE</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild variant="primary" size="lg" className="w-full">
                                        <a href={brochureUrl} download>
                                            <Download className="mr-2 w-4 h-4" />
                                            DOWNLOAD PDF
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>
                        )}

                        {/* Help CTA Card */}
                        <Card
                            className="relative overflow-hidden bg-cover bg-center min-h-[300px] flex items-center justify-center"
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${helpCtaImage})`,
                            }}
                        >
                            <CardContent className="text-center text-white p-8">
                                <p className="text-sm uppercase tracking-wide mb-2">{helpCtaSubtitle}</p>
                                <h3 className="text-3xl font-bold mb-6">{helpCtaTitle}</h3>
                                <Button asChild variant="outline" size="lg" className="bg-white text-foreground hover:bg-white/90">
                                    <Link to={helpCtaButtonHref}>
                                        {helpCtaButtonText}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
