let BASE_URL = 'https://www.googleapis.com/drive/v3/files?key=AIzaSyBr7Ijb4LPA2KsP5VQZvLQxebqSyZwOwBk&q='
const folderID = '1qnFuCMb8EpMEhvJ9uKuRVfJe6pT9H3pD';

const fetchRequest = (url) => {
  return fetch(`${url}`)
    .then(res => res.status <= 400 ? res : Promise.reject(res))
    .then(res => {
      const result = res.json()
      return result

    })
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`)
    });
};

export default {
  getPlaylist: () => {
    return fetch(`${BASE_URL}'${folderID}'%20in%20parents`)
      .then(res => res.status <= 400 ? res : Promise.reject(res))
      .then(res => {
        const result = res.json()
        return result

      })
      .catch((err) => {
        console.log(`${err.message} while fetching `)
      });
  },

  getMixCloudTracksbyArtist: (artist) => {
    BASE_URL = '';
    // soundcloud -> `https://soundcloud.com/dj_altitude/dj-altitude-dark-vs-liquid-drum-and-bass-mix-01`
    //`https://api.mixcloud.com/search/?q=${artist};type=cloudcast`
    return fetch(`https://api.mixcloud.com/search/?q=${artist};type=cloudcast`)
      .then(res => res.status <= 400 ? res : Promise.reject(res))
      .then(res => {
        const result = res.json()
        return result

      })
      .catch((err) => {
        console.log(`${err.message} while fetching /$`)
      });
  }
};
