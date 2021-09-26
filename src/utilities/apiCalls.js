export const getRestrooms = (lat, long) => {
  const url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`

  return fetch(url)
    .then(response => response.json())
}

export const fetchZip = (zip) => {
  const url = `https://api.zippopotam.us/us/${zip}`

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.places[0]
    })
}


