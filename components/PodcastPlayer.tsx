import React from 'react';
import ReactPlayer from 'react-player';

type PodcastPlayerProps = {
  url: string;
};

const PodcastPlayer: React.FC<PodcastPlayerProps> = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
      />
    </div>
  );
};

export default PodcastPlayer;