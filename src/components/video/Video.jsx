import React from 'react'
import { AiFillAlert, AiFillEye } from "react-icons/ai"
import "./_video.scss";

const Video = () => {
  return (
    <div className='video'>
    <div className='video__top'>
      <img src="https://wallpapers.com/images/featured-full/john-cena-pictures-vcmrqyc1pdyq7tt0.jpg" alt="" />
      <span>05:53</span>
    </div>
    <div className='video__title'>
      Create a YouTube Clone with React JS and Firebase
    </div>
    <div className='video__details'>
      <span>
        <AiFillEye /> 5m Views.
      </span>
      <span>
        5 days ago
      </span>
    </div>
    <div className='video__channel'>
      <img src="https://imgs.search.brave.com/3Di2gRnMD591Ih5c5O8lgv8tQIQODGpq_v57e-tsJHs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/OTEyMjg1MC9waG90/by9pbmdsZXdvb2Qt/Y2FsaWZvcm5pYS1q/b2huLWNlbmEtZHVy/aW5nLXdyZXN0bGVt/YW5pYS1nb2VzLWhv/bGx5d29vZC1hdC1z/b2ZpLXN0YWRpdW0t/b24tYXByaWwtMDEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTNsT0ZPS3hGcFFZ/aUlXNnV1U1hVMndw/LUZsTktyZGZKSkpO/MGNvRE5xMWc9" alt="" />
      <p>Lalan Bhai</p>
    </div>

    </div>
  )
}

export default Video