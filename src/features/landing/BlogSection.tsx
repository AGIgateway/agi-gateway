import React from 'react';

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
      title: 'Creating Streamlined Safeguarding Processes with OneRen'
    },
    {
      id: '2',
      image: '/images/img_image_19.png',
      title: 'What are your safeguarding responsibilities and how can you manage them?'
    },
    {
      id: '3',
      image: '/images/img_image_20.png',
      title: 'Revamping the Membership Model with Triathlon Australia'
    }
  ];

  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[56px]">
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px]">
          {/* Section Header */}
          <div className="flex flex-col gap-2 items-center px-4 sm:px-8 lg:px-[164px]">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight text-center text-global-3">
              Caring Is Moto
            </h2>
            <p className="text-sm sm:text-base font-normal leading-6 text-center text-global-4 w-full lg:w-[62%]">
              AGI Gateway blog is the best place to read about the latest university and study insights, trends and more.
            </p>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-[24px] px-0 lg:px-[144px]">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col items-center w-full lg:w-[368px]">
                {/* Blog Image */}
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-[200px] sm:h-[240px] lg:h-[286px] object-cover rounded-lg"
                />
                
                {/* Blog Content Card */}
                <div className="flex flex-col gap-3 sm:gap-4 lg:gap-[16px] items-center bg-global-6 rounded-lg shadow-[0px_8px_16px_#abbed166] p-4 sm:p-5 lg:p-[16px] -mt-12 sm:mt-16 lg:-mt-[96px] mx-4 sm:mx-6 lg:mx-[24px] w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] lg:w-[calc(100%-3rem)]">
                  <h3 className="text-lg sm:text-xl font-semibold leading-7 text-center text-global-4">
                    {post.title}
                  </h3>
                  <div className="flex gap-2 items-center py-2 lg:py-[8px]">
                    <span className="text-lg sm:text-xl font-semibold leading-tight text-global-1">
                      Readmore
                    </span>
                    <img 
                      src="/images/img_24_arrows_directions_right.svg" 
                      alt="Arrow right" 
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-[24px] lg:h-[24px]"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;