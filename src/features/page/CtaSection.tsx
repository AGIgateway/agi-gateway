'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const CtaSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* Download Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                            variant="default"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md whitespace-nowrap min-w-[200px]"
                        >
                            DOWNLOAD BROCHURE
                        </Button>
                        <Button
                            variant="default"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md whitespace-nowrap min-w-[200px]"
                        >
                            DOWNLOAD PDF JLPT
                        </Button>
                    </div>

                    {/* Contact Form */}
                    <Card className="w-full max-w-lg mx-auto lg:mx-0 border border-gray-200 shadow-sm">
                        <CardContent className="p-6">
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Input
                                        type="text"
                                        placeholder="Your Name*"
                                        required
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Email Address*"
                                        required
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        placeholder="Your Message"
                                        rows={3}
                                        className="w-full"
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3"
                                >
                                    CONTACT US NOW
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                {/* Additional CTAs */}
                <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 text-center">
                    <a
                        href="#apply"
                        className="text-green-700 font-semibold hover:text-green-900 transition-colors text-lg underline decoration-dotted underline-offset-2"
                    >
                        YOU NEED APPLY NOW→
                    </a>
                    <a
                        href="#help"
                        className="text-emerald-700 font-semibold hover:text-emerald-900 transition-colors text-lg underline decoration-dotted underline-offset-2"
                    >
                        HELP? GET IN TOUCH →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;