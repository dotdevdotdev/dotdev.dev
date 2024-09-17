import React from "react";
import YouTube from "react-youtube";

const Videos = () => {
  const featuredVideoId = "your-video-id-here";

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Featured Videos</h1>
        <div className="aspect-w-16 aspect-h-9">
          <YouTube videoId={featuredVideoId} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Videos;
