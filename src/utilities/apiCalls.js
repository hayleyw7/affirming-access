import { cleanRestroomsData, cleanZipData } from './dataCleaning';

export const getRestrooms = (lat, long) => {
  const url = `https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=5&offset=0&lat=${lat}&lng=${long}`

  return fetch(url)
    .then(response => response.json())
    .then(data => cleanRestroomsData(data))
}

export const fetchZip = (zip) => {
  const url = `https://api.zippopotam.us/us/${zip}`

  return fetch(url)
    .then(response => response.json())
    .then(data => cleanZipData(data))
    // .then(data => {
    //   return data.places[0]
    // })
}

export const setErrorStatus = () => {
  return error => this.setState({errorKey: error})
}
