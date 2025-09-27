'use client';

import React from 'react';

const InfoSection: React.FC = () => {
    return (
        <section className="py-16 px-4 bg-background">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-foreground mb-8">JLPT</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-justify">
                    The Japanese-Language Proficiency Test or JLPT, is a standardized criterion-referenced test to evaluate and certify Japanese language proficiency for non-native speakers, covering language knowledge, reading ability, and listening ability. The test is held twice a year in Japan and selected countries (on the first Sunday of July and December), and once a year in other regions (either on the first Sunday of December or July depending on region). The JLPT is conducted by the Japan Foundation for tests overseas (with cooperation of local host institutions), and Japan Educational Exchanges and Services for tests in Japan.
                </p>
            </div>
        </section>
    );
};

export default InfoSection;