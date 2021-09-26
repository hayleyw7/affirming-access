var normalize = require('us-states-normalize');

export const cleanRestroomsData = (data) => {

  return data.map(restroom => {
    return {
      name: restroom.name,
      city: restroom.city.split(' ').join(''),
      state: normalize(restroom.state),
      unisex: restroom.unisex,
      distance: restroom.distance.toFixed(2),
      id: restroom.id,

      street: restroom.street.toLowerCase().split('north ').join('N ').split('south ').join('S ').split('east ').join('E ').split('west ').join('W ').split('treet').join('t').split('venue').join('ve').split(' road').join(' Rd').split('oulevard').join('lvd').split('rive').join('r').split('door').join('Dr').split('arkway').join('kwy').split('and').join('&').split('.').join('')
    }
  })
}

// export const cleanZipData = (data) => {
//   return data.movies.map(movie => {
//     return {
//       id: movie.id, 
//       poster_path: movie.poster_path, 
//       title: movie.title
//     }
//   })
// }
