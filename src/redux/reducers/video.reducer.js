import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
} from "../actionsType";

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: "All",
  error: null,
};

export const homeVideosReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case HOME_VIDEOS_SUCCESS: {
      const isSameCategory = state.activeCategory === payload.category;

      const mergedVideos = isSameCategory
        ? [
            ...state.videos,
            ...payload.videos.filter(
              (newVid) =>
                !state.videos.some(
                  (existing) =>
                    (existing.id?.videoId || existing.id) ===
                    (newVid.id?.videoId || newVid.id)
                )
            ),
          ]
        : payload.videos;

      return {
        ...state,
        videos: mergedVideos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    }

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
