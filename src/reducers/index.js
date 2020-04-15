import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Top 100 songs of the 1990s", duration: "14:50" },
    { title: "365", duration: "4:23" },
    { title: "I Don't Care", duration: "4:44" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
