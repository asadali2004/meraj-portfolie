import React from "react";

const VideoResume = () => {
  return (
    <section id="video" className="py-20 bg-gradient-to-r from-lime-100 to-teal-100 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-800 mb-8">Video CV</h2>
        <div className="bg-white/30 backdrop-blur-2xl rounded-3xl shadow-xl p-8 border border-white/40 mx-auto max-w-3xl relative">
          <div className="relative w-full">
            <img
              src="/thumbnail.jpg" // Replace with your actual thumbnail image
              alt="Video Coming Soon"
              className="w-full rounded-2xl"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
              {/* <p className="text-white text-3xl font-semibold">Coming Soon...</p> */}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VideoResume;