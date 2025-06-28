import request from "../../api";

import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionsType";

// Fetch popular videos (with optional pagination token)
export const getPopularVideos = (pageToken = "") => async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });

    const { data } = await request.get("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken, // for pagination
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};

// Fetch videos by category (keyword) with optional pageToken
export const getVideosByCategory = (keyword, pageToken = "") => async (dispatch) => {
  try {
    dispatch({ type: HOME_VIDEOS_REQUEST });

    const { data } = await request("/search", {
      params: {
        part: "snippet",
        q: keyword,
        maxResults: 20,
        type: "video",
        pageToken, // for pagination
      },
    });

    if (data.items.length === 0) {
      // No videos found - dispatch success with empty list
      return dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: [],
          nextPageToken: null,
          category: keyword,
        },
      });
    }

    const videoIds = data.items.map((item) => item.id.videoId).join(",");

    if (!videoIds) {
      // No valid video IDs found, dispatch empty results
      return dispatch({
        type: HOME_VIDEOS_SUCCESS,
        payload: {
          videos: [],
          nextPageToken: data.nextPageToken || null,
          category: keyword,
        },
      });
    }

    const { data: videoDetails } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id: videoIds,
      },
    });

    dispatch({
      type: HOME_VIDEOS_SUCCESS,
      payload: {
        videos: videoDetails.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    dispatch({
      type: HOME_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
