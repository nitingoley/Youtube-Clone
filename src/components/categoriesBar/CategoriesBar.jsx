import React, { useState } from "react";
import "./_categoriesBar.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";

const keywords = [
  "All",
  "Film & Animation",
  "Autos & Vehicles",
  "Music",
  "Pets & Animals",
  "Sports",
  "Gaming",
  "Travel & Events",
  "People & Blogs",
  "Comedy",
  "Entertainment",
  "News & Politics",
  "Education",
  "Science & Technology",
  "Cooking & Food",
  "Fitness & Health",
  "Beauty & Fashion",
  "DIY & Crafts",
  "Business & Finance",
  "Documentary",
  "Kids & Family",
  "Anime & Cartoons",
  "Coding & Programming",
  "ASMR",
  "Reaction Videos",
  "Unboxing",
  "Motivation",
  "Tutorials & How-To",
  "Vlogs",
  "Memes",
  "Mystery & Paranormal",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          key={i}
          onClick={() => handleClick(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
