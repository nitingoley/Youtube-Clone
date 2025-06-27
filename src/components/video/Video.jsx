import React from "react";
import { AiFillEye } from "react-icons/ai";
import moment from "moment";
import numeral from "numeral";
import "./_video.scss";

const Video = ({ video }) => {
  const {
    id,
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: { medium },
    },
    statistics,
    contentDetails,
  } = video;

  const views = statistics?.viewCount || 0;
  const duration = contentDetails?.duration || "PT0M0S";

  const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+M)?(\d+S)?/);
    const minutes = match?.[1]?.replace("M", "") || "0";
    const seconds = match?.[2]?.replace("S", "") || "00";
    return `${minutes}:${seconds.padStart(2, "0")}`;
  };

  return (
    <div className="video">
      <div className="video__top">
        <img src={medium.url} alt={title} />
        <span>{formatDuration(duration)}</span>
      </div>
      <div className="video__title">{title}</div>
      <div className="video__details">
        <span>
          <AiFillEye /> {numeral(views).format("0.a").toUpperCase()} views
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img
          src="https://via.placeholder.com/36"
          alt={channelTitle}
        />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
