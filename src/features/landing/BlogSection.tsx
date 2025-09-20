'use client';

import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogPost {
  id: string;
  image: string;
  title: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      image: '/images/img_image_18.png',
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      id: '2',
      image: '/images/img_image_19.png',
      title: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      id: '3',
      image: '/images/img_image_20.png',
      title: 'Revamping the Membership Model with Triathlon Australia',
    },
  ];

  const memoizedPosts = React.useMemo(() => blogPosts, []);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6 text-center px-4 sm:px-8 lg:px-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-global-3">
            Caring Is Our Moto
          </h2>
          <p className="text-sm sm:text-base font-normal leading-6 text-global-4 w-full lg:w-3/5 mx-auto">
            AGI Gateway blog is the best place to read about the latest university and study
            insights, trends and more.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-6 lg:gap-8 px-0 lg:px-0">
          {memoizedPosts.map((post) => (
            <div key={post.id} className="flex flex-col items-center w-full max-w-xs lg:max-w-md">
              {/* Blog Image */}
              <img
                src={post.image || '/placeholder.svg'}
                alt={post.title}
                className="w-full h-50 sm:h-60 lg:h-72 object-cover rounded-lg"
                loading="lazy"
              />

              {/* Blog Content Card */}
              <Card className="flex flex-col gap-3 sm:gap-4 lg:gap-6 items-center bg-global-6 border-none shadow-lg p-4 sm:p-5 lg:p-6 -mt-12 sm:mt-16 lg:-mt-24 mx-4 sm:mx-6 lg:mx-8 w-full max-w-xs lg:max-w-md">
                <CardContent className="p-0 flex flex-col gap-3 sm:gap-4 lg:gap-6 items-center">
                  <CardTitle className="text-lg sm:text-xl font-semibold leading-7 text-center text-global-4">
                    {post.title}
                  </CardTitle>
                  {/* Readmore Button */}
                  <Button
                    variant="ghost"
                    className="flex gap-2 items-center py-2 lg:py-2 h-auto p-0 hover:bg-transparent"
                  >
                    <span className="text-lg sm:text-xl font-semibold leading-tight text-global-1">
                      Readmore
                    </span>
                    <img
                      src="/images/img_24_arrows_directions_right.svg"
                      alt="Arrow right"
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-6"
                    />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
