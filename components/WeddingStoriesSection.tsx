import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WeddingStoriesSectionProps {
  navigateTo: (page: string) => void;
}

const WeddingStoriesSection: React.FC<WeddingStoriesSectionProps> = ({ navigateTo }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  // Video data with YouTube video IDs
  const leftVideo = { videoId: 'yNHXmQb8VMM', thumbnail: 'https://img.youtube.com/vi/yNHXmQb8VMM/maxresdefault.jpg', title: 'Love In Second Innings.', description: 'Second marriage, for many, is still a taboo. And this story illustrates why it\'s not. It\'s not a treatise on how the past doesn\'t come in the way of love and respect. It\'s a triumph over stereotypes and archaic customs. It\'s a story of how love can be made beautiful. That tears can be turned into a whirlwind of Deepak and Nisha\'s fear turned into the excitement of exploring the unknown: that the end is a new beginning.' };
  const rightVideo = { videoId: 'NSC73lrIHlk', thumbnail: 'https://img.youtube.com/vi/NSC73lrIHlk/maxresdefault.jpg', title: 'Twenty Years in the Making', description: 'This one is special, very special. Hiba and Akbar\'s story took us all the way from Hiba\'s childhood till their reception in Bhopal and on the way we discovered an innovative way of filming a wedding. We knew from start that no matter how hard we try we could not fit their story in a 5 minute film, we tried for a year now and this hard we try now we can ever fit which is not in 5 minute film, but we India Pakistan story which is not India or Pak. For us much more than that. a wedding, an about wedding than us it is which for much all.' };

  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  const handlePlay = (videoId: string) => {
    setPlayingVideo(videoId);
  };

  return (
    <section
      ref={sectionRef}
      className={`bg-light-cream dark:bg-dark-bg py-16 md:py-24 overflow-hidden relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
      style={{ paddingBottom: 'calc(6vw + var(--sqs-site-gutter, 4vw))' }}
    >
      {/* Section Divider */}
      <div
        className="absolute bottom-0 left-0 w-full h-[6vw] z-[5]"
        style={{
          clipPath: 'url(#section-divider-wedding-stories)',
        }}
      >
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
          <clipPath id="section-divider-wedding-stories" clipPathUnits="objectBoundingBox">
            <path d="M1.897,0.913 L1.897,0.913 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087 L-0.897,-1 L1.897,-1 z" />
          </clipPath>
        </svg>
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1 1" preserveAspectRatio="none">
          <path
            className="fill-none stroke-none"
            d="M-100,0.5 L-100,1.5 M1.897,0.913 L1.897,0.913 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087 l0,0 l-0.75,0.087 l-0.25,-0.087"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-24 items-start">
          {/* Left Div - First Video Thumbnail */}
          <div className="relative z-10 py-8">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              {playingVideo === leftVideo.videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${leftVideo.videoId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video"
                ></iframe>
              ) : (
                <>
                  <img
                    src={leftVideo.thumbnail}
                    alt="Love In Second Innings Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300"
                    onClick={() => handlePlay(leftVideo.videoId)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            <h3 className="mt-4 font-serif text-xl md:text-2xl font-medium text-stone-800 dark:text-dark-text/80 text-center lg:text-left">
              {leftVideo.title}
            </h3>
            <p className="mt-2 text-light-text/80 dark:text-dark-text/80 leading-relaxed text-sm md:text-base text-center lg:text-left">
              {leftVideo.description}
            </p>
          </div>

          {/* Right Div - Second Video Thumbnail */}
          <div className="lg:-ml-16 relative lg:pt-16 py-8">
            <div className="relative aspect-video overflow-hidden rounded-lg shadow-lg group cursor-pointer">
              {playingVideo === rightVideo.videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${rightVideo.videoId}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-video"
                ></iframe>
              ) : (
                <>
                  <img
                    src={rightVideo.thumbnail}
                    alt="Twenty Years in the Making Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all duration-300"
                    onClick={() => handlePlay(rightVideo.videoId)}
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            <h3 className="mt-4 font-serif text-xl md:text-2xl font-medium text-stone-800 dark:text-dark-text/80 text-center lg:text-left">
              {rightVideo.title}
            </h3>
            <p className="mt-2 text-light-text/80 dark:text-dark-text/80 leading-relaxed text-sm md:text-base text-center lg:text-left">
              {rightVideo.description}
            </p>
          </div>
        </div>

        {/* Bottom Content: Button and Paragraph */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigateTo('blog')}
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-light text-base tracking-wider rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mb-8"
          >
            <span className="relative z-10">Watch All Our Award Winning Films</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-amber-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <p className="text-light-text/80 dark:text-dark-text/80 leading-relaxed text-center max-w-3xl mx-auto text-sm md:text-base">
            We at Arif Photography celebrate the wild ones, the rule breakers, the travellers, the new age modern couple who are not afraid to experiment. We believe ultimate goal of a wedding photographer is to justify the vibe of the wedding and the personalities of the couple. And this approach has helped us experience weddings in two bedroom apartments to weddings spread over 2 continents.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-10 right-10 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-stone-300/20 rounded-full blur-xl"></div>
        <div className="fixed bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-stone-200/30 to-amber-200/30 rounded-full blur-lg"></div>
      </div>
    </section>
  );
};

export default WeddingStoriesSection;