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

export function dedupeTracks(scoreTracks) {
  const playlist = scoreTracks;

  let matchId = [];

  let nonDuplicates = [];

  nonDuplicates = playlist.filter((track) => {
    if (!matchId.includes(track.trackId)) {
      matchId.push(track.trackId);
      return true;
    }
  });

  return nonDuplicates;
}

function artistQuota(currentPlaylist, name) {
  let count = 0;

  if (currentPlaylist.length === 0) return count;

  for (const track of currentPlaylist) {
    if (track.artist === name) {
      count++;
    }
  }
  return count;
}

export function enforceArtistQuota(dedupeTracks, limit) {
  const playlist = dedupeTracks;
  let cleanedPlaylist = [];
  for (const track of playlist) {
    if (limit > artistQuota(cleanedPlaylist, track.artist)) {
      cleanedPlaylist.push(track);
    }
  }

  return cleanedPlaylist;
}
