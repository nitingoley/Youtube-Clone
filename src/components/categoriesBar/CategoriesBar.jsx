import React, { useState } from "react";
import "./_categoriesBar.scss";

const youtubeCategories = [
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

  const handleClick = (value) => {
    setActiveElement(value);
  };

  return (
    <div className="categoriesBar">
      {youtubeCategories.map((value, i) => (
        <span
          key={i}
          onClick={() => setActiveElement(value)}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
