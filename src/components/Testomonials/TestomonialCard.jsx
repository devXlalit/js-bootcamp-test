import React from "react";

const TestomonialCard = ({ name, url }) => {
  return (
    <div className="rounded-lg overflow-hidden w-56 h-96">
      <video
        className="h-fit rounded-lg bg-zinc-900"
        src={url}
        controls
        autoPlay
        loop
      ></video>
      {/* <iframe
        className="h-36 w-36"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=cqoz9W4ogHCRNcBz"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe> */}
      <div
        className="text-white block animate__animated animate__fadeOutUpBig animate__infinite animate__slower text-sm text-left"
        style={{ animationDuration: "45s" }}
      >
        <div>😀🎈</div>
        <div>😇🤣</div>
        <div>😍🎉🎉</div>
        <div>🥇🤩😎</div>
        <div>🎈</div>
        <div>🥇🤩😎</div>
        <div>🎈</div>
        <div>😁✈️✅🤔</div>
        <div>😍🎉🎉</div>
        <div>🥇🤩😎</div>
        <div>n🎈</div>
        <div>🥇🤩😎</div>
        <div>🥇🤩😎🎉🎉</div>
        <div>🥇🤩😎🤩🤗🙂☺️</div>
      </div>
    </div>
  );
};

export default TestomonialCard;
