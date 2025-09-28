import React from 'react';
import { Separator } from '@/components/ui/separator';
import HeroSection from '@/components/ui/hero';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div>
            <HeroSection
                title="Privacy Policy"
            // subtitle="Study, Work, and Build Your Future"
            // ctaText="Book Free Consultation"
            // onCtaClick={() => scrollToForm()}
            />
            <div className="w-full py-12 sm:py-16 bg-background"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <p className="mt-3 text-sm text-muted-foreground py-4">
                    Last Updated: 01-10-2025
                </p>


                {/* Intro */}
                <section className="space-y-8">
                    <PolicySection title="Introduction">
                        <p className="text-muted-foreground leading-relaxed">
                            At AGI Gateway, we value your privacy. We’re committed to protecting your personal information and being clear about how we use it. This Privacy Policy explains, in plain language, what information we collect, how we use it, and your rights. It’s written with students, parents, and partners in mind – so it’s easy to read and transparent.
                        </p>
                    </PolicySection>
                </section>

                {/* Policy Sections */}
                <section className="space-y-8">
                    <PolicySection title="1. Information We Collect">
                        <p className="text-muted-foreground mb-3">
                            When you interact with us, we may collect the following details:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Personal details such as your name, email, phone number, date of birth, and nationality.</li>
                            <li>Academic information including your study history, transcripts, and English test results.</li>
                            <li>Visa and ID details like your passport number or visa information when needed for applications.</li>
                            <li>Financial details if required for application fees or tuition payments.</li>
                            <li>Website usage data such as cookies, IP address, and browsing activity to improve our services.</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="2. How We Use Your Information">
                        <p className="text-muted-foreground mb-3">
                            We use the information you provide to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Help with course and institution selection.</li>
                            <li>Prepare and submit your applications to universities, colleges, and training providers.</li>
                            <li>Support you with visa and immigration processes where needed.</li>
                            <li>Keep you updated with important information and opportunities.</li>
                            <li>Meet our legal obligations in New Zealand.</li>
                            <li>Improve our website and services.</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="3. Sharing Your Information">
                        <p className="text-muted-foreground mb-3">
                            We do not sell or misuse your personal data. We may share your information only with:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>The universities, colleges, or training providers you apply to.</li>
                            <li>Immigration authorities or government agencies if required.</li>
                            <li>Trusted third-party service providers such as IT, website hosting, or payment processors – always under strict confidentiality.</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="4. Data Security & Retention">
                        <p className="text-muted-foreground mb-3">
                            We take your privacy seriously:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Information is stored securely in password-protected systems and cloud servers.</li>
                            <li>Only authorised AGI Gateway staff have access.</li>
                            <li>Data is kept only for as long as necessary to provide services or meet legal requirements.</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="5. Your Rights">
                        <p className="text-muted-foreground mb-3">
                            You have the right to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Ask for a copy of the personal information we hold about you.</li>
                            <li>Request corrections or updates if something is inaccurate.</li>
                            <li>Ask us to delete your information, where legally possible.</li>
                        </ul>
                    </PolicySection>

                    <PolicySection title="6. Cookies">
                        <p className="text-muted-foreground">
                            Our website uses cookies to improve your experience, analyse performance, and remember your preferences. You can turn off cookies in your browser settings, but some features of our site may not work as expected.
                        </p>
                    </PolicySection>

                    <PolicySection title="7. International Data Transfers">
                        <p className="text-muted-foreground">
                            Because we support students from different parts of the world, your information may be shared with institutions or authorities outside New Zealand. We make sure any such transfers are done securely and only for educational purposes.
                        </p>
                    </PolicySection>

                    <PolicySection title="8. Contact Us">
                        <p className="text-muted-foreground mb-4">
                            If you have questions about this Privacy Policy or how we handle your information, please get in touch:
                        </p>
                        <address className="not-italic text-foreground space-y-1">
                            <p className="font-medium">AGI Gateway</p>
                            <p>Christchurch, New Zealand</p>
                            <p>
                                Email:{' '}
                                <a
                                    href="mailto:privacy@agigateway.co.nz"
                                    className="text-primary font-medium hover:underline"
                                >
                                    privacy@agigateway.co.nz
                                </a>
                            </p>
                        </address>
                    </PolicySection>

                    <PolicySection title="9. Changes to this Policy">
                        <p className="text-muted-foreground">
                            We may update this Privacy Policy from time to time. The latest version will always be available on our website with the updated date.
                        </p>
                    </PolicySection>
                </section>
            </div>
        </div>
    );
};

// Reusable section component
const PolicySection: React.FC<{ title: string; children: React.ReactNode }> = ({
    title,
    children,
}) => (
    <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
        {children}
        <Separator className="my-6" />
    </section>
);

export default PrivacyPolicyPage;