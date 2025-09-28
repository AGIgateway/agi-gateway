import React from 'react';
import { Separator } from '@/components/ui/separator';
import HeroSection from '@/components/ui/hero';

const TermsOfUsePage: React.FC = () => {
    return (
        <div>
            <HeroSection title="Terms of Use" />

            <div className="w-full py-12 sm:py-16 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="mt-3 text-sm text-muted-foreground py-4">
                        Last Updated: 01-10-2025
                    </p>

                    <section className="space-y-8">
                        <PolicySection title="Introduction">
                            <p className="text-muted-foreground leading-relaxed">
                                This website is owned and operated by AGI Gateway and will be referred to as "We", "our" and "us" in this Terms of Use policy. By using this site, you agree to the Terms of Use Policy of this website, which is set out on this web page.
                            </p>
                        </PolicySection>

                        <PolicySection title="Using Our Website">
                            <p className="text-muted-foreground leading-relaxed">
                                When using this website you agree to be legally bound by these terms and conditions as they may be modified and posted to our website from time to time. Without prejudice to the above, by using or accessing our website, you agree to be legally bound by these terms and conditions of use as they apply to your use of or access to our website. If you do not wish to be bound by these terms and conditions then you may not use our website. You must ensure that the personal information you provide is accurate and complete and that all ordering or registration details (where applicable) contain your correct name, address, and other requested details. For more information about how we deal with your personal information, please read our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                            </p>
                        </PolicySection>

                        <PolicySection title="Applicability of Online Materials">
                            <p className="text-muted-foreground leading-relaxed">
                                Unless otherwise specified, the materials published on our website are presented solely for your private, personal and non-commercial use. We have used our reasonable endeavours to ensure that our website complies with New Zealand law. However, we make no representations that the materials on our website are appropriate or available for use in locations outside of New Zealand. We make no warranties, express or implied, that making the services available in any particular jurisdiction outside of New Zealand is permitted under any applicable non-New Zealand laws or regulations. Accordingly, if making our services or any part thereof available in your jurisdiction or to you (by reason of nationality, residence or otherwise) is prohibited, those services are not offered to you. You accept that if you are resident outside of New Zealand, you must satisfy yourself that you are lawfully able to engage with our services. We accept no liability, to the extent permitted by applicable law, for any costs, losses or damages resulting from or related to the use or attempted use of our services by persons in jurisdictions outside of New Zealand.
                            </p>
                        </PolicySection>

                        <PolicySection title="Copyright & Monitoring">
                            <p className="text-muted-foreground leading-relaxed">
                                The contents of our website are protected by international copyright laws and other intellectual property rights. We, or other third-party licensors, are the owner of these rights. All product and company names and logos mentioned on our website are the trademarks, service marks, or trading names of their respective owners, including us. You may download material from our website for the sole purpose of using it as an information resource for our education and immigration services. However, you may not modify, copy, reproduce, republish, upload, post, transmit or distribute, by any means or in any manner, any material or information on or downloaded from our website including, but not limited to text, graphics, video, messages, code and/or software without our prior written consent, except where expressly invited to do so (e.g., to complete a self-assessment form or inquiry).
                            </p>
                        </PolicySection>

                        <PolicySection title="Linked Sites">
                            <p className="text-muted-foreground leading-relaxed">
                                We make no representations whatsoever about any other websites which you may access through our website or which may link to our website. When you access any other website you understand that it is independent of us and that we have no control over the content or availability of that website. In addition, a link to any other site does not mean that we endorse or accept any responsibility for the content, or the use of, such a website and shall not be liable for any loss or damage caused or alleged to be caused by or in connection with use of or reliance on any content, goods or services available on or through any other web or resource. Any concerns regarding any external link should be directed to its website administrator or webmaster.
                            </p>
                        </PolicySection>

                        <PolicySection title="Availability of Our Website">
                            <p className="text-muted-foreground leading-relaxed">
                                We will try to make our website available but cannot guarantee that our website will operate continuously or without interruptions or be error-free and can accept no liability for its unavailability. You must not attempt to interfere with the proper working of our website and, in particular, you must not attempt to circumvent security, tamper with, hack into, or otherwise disrupt any computer system, server, website, router, or any other internet-connected device. We reserve the right to alter, suspend or discontinue any aspect of our website or the content or services available through it, including your access to it. Unless explicitly stated, any new features including new content and/or the release of new tools or resources shall be subject to these terms and conditions. We are committed to safeguarding the privacy of our users. We take your privacy very seriously and it is important to us that you can use and enjoy our website without having to compromise your privacy in any way. For more information, please see our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
                            </p>
                        </PolicySection>
                    </section>
                </div>
            </div>
        </div>
    );
};

// Reusable section component (same as in PrivacyPolicyPage)
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

export default TermsOfUsePage;