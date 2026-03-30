"use client";

const Video = () => {
  return (
    <section className="bg-black h-screen">
      {/* Desktop video */}
      <video
        className="hidden md:block w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/ree_mainvideo.mp4" type="video/mp4" />
      </video>

      {/* Mobile/Tablet video */}
      <video
        className="block md:hidden w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/ree_mobileview.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Video;
