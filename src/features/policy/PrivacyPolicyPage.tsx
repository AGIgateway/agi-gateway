// @/features/policy/PrivacyPolicyPage.tsx
import React from 'react';
import MainLayout from '@/app/layout/MainLayout';
import PageLayout from '@/features/layouts/PageLayout';

const PrivacyPolicyPage = () => {
    return (
        <PageLayout title="Privacy Policy">
            <div className="prose prose-sm dark:prose-invert mx-auto max-w-3xl text-muted-foreground">
                <p className="text-center text-sm not-prose mb-8 text-foreground/70">
                    Last Updated: 01 October 2025
                </p>

                <p>
                    At AGI Gateway, we value your privacy. We’re committed to protecting your personal information and being clear about how we use it. This Privacy Policy explains, in plain language, what information we collect, how we use it, and your rights. It’s written with students, parents, and partners in mind – so it’s easy to read and transparent.
                </p>

                <h2>1. Information We Collect</h2>
                <p>When you interact with us, we may collect the following details:</p>
                <ul>
                    <li>Personal details such as your name, email, phone number, date of birth, and nationality.</li>
                    <li>Academic information including your study history, transcripts, and English test results.</li>
                    <li>Visa and ID details like your passport number or visa information when needed for applications.</li>
                    <li>Financial details if required for application fees or tuition payments.</li>
                    <li>Website usage data such as cookies, IP address, and browsing activity to improve our services.</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information you provide to:</p>
                <ul>
                    <li>Help with course and institution selection.</li>
                    <li>Prepare and submit your applications to universities, colleges, and training providers.</li>
                    <li>Support you with visa and immigration processes where needed.</li>
                    <li>Keep you updated with important information and opportunities.</li>
                    <li>Meet our legal obligations in New Zealand.</li>
                    <li>Improve our website and services.</li>
                </ul>

                <h2>3. Sharing Your Information</h2>
                <p>We do not sell or misuse your personal data. We may share your information only with:</p>
                <ul>
                    <li>The universities, colleges, or training providers you apply to.</li>
                    <li>Immigration authorities or government agencies if required.</li>
                    <li>Trusted third-party service providers such as IT, website hosting, or payment processors – always under strict confidentiality.</li>
                </ul>

                <h2>4. Data Security & Retention</h2>
                <ul>
                    <li>Information is stored securely in password-protected systems and cloud servers.</li>
                    <li>Only authorised AGI Gateway staff have access.</li>
                    <li>Data is kept only for as long as necessary to provide services or meet legal requirements.</li>
                </ul>

                <h2>5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Ask for a copy of the personal information we hold about you.</li>
                    <li>Request corrections or updates if something is inaccurate.</li>
                    <li>Ask us to delete your information, where legally possible.</li>
                </ul>

                <h2>6. Cookies</h2>
                <p>
                    Our website uses cookies to improve your experience, analyse performance, and remember your preferences. You can turn off cookies in your browser settings, but some features of our site may not work as expected.
                </p>

                <h2>7. International Data Transfers</h2>
                <p>
                    Because we support students from different parts of the world, your information may be shared with institutions or authorities outside New Zealand. We make sure any such transfers are done securely and only for educational purposes.
                </p>

                <h2>8. Contact Us</h2>
                <p>If you have questions about this Privacy Policy or how we handle your information, please get in touch:</p>
                <address>
                    <strong>AGI Gateway</strong><br />
                    Christchurch, New Zealand<br />
                    Email: <a href="mailto:info@agigateway.co.nz">info@agigateway.co.nz</a>
                </address>

                <h2>9. Changes to this Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. The latest version will always be available on our website with the updated date.
                </p>
            </div>
        </PageLayout>
    );
};

export default PrivacyPolicyPage;