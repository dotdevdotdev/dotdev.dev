import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const channelId = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // First, get the channel's upload playlist ID
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
        );
        if (!channelResponse.ok) {
          throw new Error("Failed to fetch channel data");
        }
        const channelData = await channelResponse.json();
        if (!channelData.items || channelData.items.length === 0) {
          throw new Error("Channel not found");
        }
        const uploadPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;
        if (!uploadPlaylistId) {
          throw new Error("Upload playlist not found");
        }

        // Then, use the upload playlist ID to fetch the videos
        const videosResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadPlaylistId}&maxResults=10&key=${apiKey}`
        );
        if (!videosResponse.ok) {
          throw new Error("Failed to fetch videos");
        }
        const videosData = await videosResponse.json();
        setVideos(videosData.items);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [channelId, apiKey]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  if (loading) {
    return <div className="text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-white">Error: {error}</div>;
  }

  return (
    <section className="flex-grow pt-16 bg-black">
      <div className="flex-grow h-full container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Recent Videos</h1>
        {videos.length > 0 ? (
          <Slider {...settings} className="full-height-slider">
            {videos.map((video) => (
              <div
                key={video.snippet.resourceId.videoId}
                className="flex-grow h-full aspect-w-16 aspect-h-9"
              >
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              </div>
            ))}
          </Slider>
        ) : (
          <div className="text-white">No videos found.</div>
        )}
      </div>
    </section>
  );
};

export default Videos;
