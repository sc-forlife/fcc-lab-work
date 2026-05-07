const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylist(playlistArray) {
  //check if array
  if (typeof playlistArray !== "object") return [];

  const flatArray = [];

  let arrayIndex = 0;
  playlistArray.forEach((mix) => {
    let trackIndex = 0;
    for (const track of mix) {
      flatArray.push({ ...track, source: [arrayIndex, trackIndex] });
      trackIndex++;
    }
    arrayIndex++;
  });

  return flatArray;
}

function scoreTracks(playlists) {
  const newArr = [];
  for (const track of playlists) {
    const scoreValue = track.votes * 10 - Math.abs(track.bpm - 120);
    newArr.push({
      ...track,
      score: scoreValue,
    });
  }
  return newArr;
}

// console.log(scoreTracks(flattenPlaylist(playlists)));
function idArrays(playlist) {
  const idArray = [];
  for (const obj of playlist) {
    idArray.push(obj.trackId);
  }

  return idArray;
}

export function dedupeTracks(scoreTracks) {
  const playlist = scoreTracks;
  //match trackId against duplicates

  const matchId = idArrays(scoreTracks);

  for (const track of scoreTracks) {
  }

  // playlistLoop: for (let index = 0; index < playlist.length; index++) {
  //   const trackId = playlist[index].trackId;
  //   for (let i = 0; i < playlist.length; i++) {
  //     if (i === index) {
  //       continue playlistLoop;
  //     }
  //     console.log(i, index, "i counter , index");
  //     if (trackId === playlist[i].trackId) {
  //       console.log(playlist[index], "to be deleted");
  //       playlist.splice(index, 1);
  //     }
  //   }
  // }

  return playlist;
}
