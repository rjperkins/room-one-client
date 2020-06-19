const apiService = {
  getDJs: async () => {
    const djs = await fetch('http://localhost:8080/dj-list')
      .then(res => res.json())
    return djs;
  },

  cloudinaryGetByTag: async () => {
    const djs = await fetch('http://localhost:8080/galleryUrls')
      .then(res => res.json())
    return djs;
  },

  cloudinaryGetTracksByDJTag: async (dj) => {
    const djs = await fetch(`http://localhost:8080/track-previews/:${dj}`)
      .then(res => res.json())
    return djs;
  },

  getTrackIDs: async () => {
    const ids = await fetch('http://localhost:8080/track-ids')
      .then(res => res.json())
    return ids;
  },

  setTrackIDs: async (idObj) => {
    const ids = await fetch('http://localhost:8080/track-ids', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // credentials: 'include',
      body: JSON.stringify(idObj)
    })
      .then(res => res.json())
    console.log(ids);

    return ids;
  }
};

export default apiService;