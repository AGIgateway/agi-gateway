// src/features/policy/TermsOfUsePage.tsx
import React from 'react';
import MainLayout from '@/app/layout/MainLayout';
import PageLayout from '@/features/layouts/PageLayout';

const TermsOfUsePage = () => {
    return (
        <PageLayout title="Terms of Use">
            <div className="prose prose-sm dark:prose-invert mx-auto max-w-3xl text-muted-foreground">
                <p className="text-center text-sm not-prose mb-8 text-foreground/70">
                    Last Updated: 01 October 2025
                </p>

                <p>
                    This website (<a href="https://agigateway.co.nz">https://agigateway.co.nz</a>) is owned and operated by AGI Gateway ("we", "our", or "us"). By accessing or using our website, you agree to be legally bound by these Terms of Use. If you do not agree with any part of these terms, you must not use our website.
                </p>

                <h2>1. Use of Our Website</h2>
                <p>
                    You may use our website for lawful purposes only, specifically to seek information about studying in New Zealand, education pathways, visa support, and related services. You agree not to:
                </p>
                <ul>
                    <li>Use the site in any way that violates applicable laws (including New Zealand law);</li>
                    <li>Attempt to gain unauthorised access to our systems or data;</li>
                    <li>Use automated means (e.g., bots, scrapers) to extract content without permission;</li>
                    <li>Post or transmit any defamatory, offensive, or illegal material.</li>
                </ul>

                <h2>2. Accuracy of Information</h2>
                <p>
                    While we strive to provide accurate and up-to-date information about courses, universities, visa requirements, and immigration pathways, we do not guarantee the completeness, reliability, or timeliness of the content on this site. Immigration and education policies are subject to change by New Zealand government authorities. Always consult official sources (e.g., Immigration New Zealand, NZQA) or a licensed immigration adviser for current requirements.
                </p>

                <h2>3. No Professional Advice</h2>
                <p>
                    The content on this website is for general informational purposes only and does not constitute professional immigration, legal, or educational advice. AGI Gateway is not liable for any decisions made based on the information provided herein. For personalised guidance, please book a consultation with our licensed advisers.
                </p>

                <h2>4. Intellectual Property</h2>
                <p>
                    All content on this website—including text, graphics, logos, images, and software—is the property of AGI Gateway or its licensors and is protected by New Zealand and international copyright laws. You may not reproduce, distribute, modify, or create derivative works without our prior written permission, except for personal, non-commercial use.
                </p>

                <h2>5. External Links</h2>
                <p>
                    Our website may contain links to third-party websites (e.g., university pages, Immigration New Zealand). These links are provided for convenience only. We do not endorse, control, or assume responsibility for the content, privacy policies, or practices of any external site. You access them at your own risk.
                </p>

                <h2>6. Limitation of Liability</h2>
                <p>
                    To the fullest extent permitted by New Zealand law, AGI Gateway shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on its content, including but not limited to errors, omissions, or unavailability of the site.
                </p>

                <h2>7. Privacy Policy</h2>
                <p>
                    Your use of our website is also governed by our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your personal information. By using this site, you consent to the practices described therein.
                </p>

                <h2>8. Changes to These Terms</h2>
                <p>
                    We may update these Terms of Use from time to time. The latest version will be posted on this page with an updated "Last Updated" date. Your continued use of the website after changes constitutes acceptance of the revised terms.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                    These Terms of Use are governed by and construed in accordance with the laws of New Zealand. Any disputes arising from your use of this website shall be subject to the exclusive jurisdiction of the courts of New Zealand.
                </p>

                <h2>10. Contact Us</h2>
                <p>
                    If you have any questions about these Terms of Use, please contact us at:
                </p>
                <address>
                    <strong>AGI Gateway</strong><br />
                    Christchurch, New Zealand<br />
                    Email: <a href="mailto:info@agigateway.co.nz">info@agigateway.co.nz</a>
                </address>
            </div>
        </PageLayout>
    );
};

export default TermsOfUsePage;