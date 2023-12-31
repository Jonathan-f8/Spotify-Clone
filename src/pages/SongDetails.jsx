import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="flex flex-col">
      {/*<DetailsHeader artistId={artistId} songData = {songData} />*/}

      <div className="mb-10">
        <h2 className="font-bold text-3xl text-white">Lyrics</h2>
      </div>
    </div>
  );
};

export default SongDetails;
