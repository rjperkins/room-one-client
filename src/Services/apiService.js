const apiService = {
  getDJs: async () => {
    const djs = await fetch('https://room-one-server.herokuapp.com/dj-list' || 'http://localhost:8080/dj-list')
      .then(res => res.json())
    return djs;
  },

  cloudinaryGetByTag: async () => {
    const djs = await fetch('https://room-one-server.herokuapp.com/galleryUrls' || 'http://localhost:8080/galleryUrls')
      .then(res => res.json())

    return djs;
  },

  cloudinaryGetTracksByDJTag: async (dj) => {
    const djs = await fetch(`https://room-one-server.herokuapp.com/track-previews/:${dj}` || `http://localhost:8080/track-previews/:${dj}`)
      .then(res => res.json())
    return djs;
  },

  getTrackIDs: async () => {
    const ids = await fetch('https://room-one-server.herokuapp.com/track-ids' || 'http://localhost:8080/track-ids')
      .then(res => res.json())
    return ids;
  },

  setTrackIDs: async (idObj) => {
    const ids = await fetch('https://room-one-server.herokuapp.com/track-ids' || 'http://localhost:8080/track-ids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include',
      body: JSON.stringify(idObj)
    })
      .then(res => res.json())
    return ids;
  }
};

export default apiService;