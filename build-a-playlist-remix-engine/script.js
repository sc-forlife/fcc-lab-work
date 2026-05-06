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

function dedupeTracks(playlist) {}
