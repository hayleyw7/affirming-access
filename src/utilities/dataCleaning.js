var normalize = require('us-states-normalize');

export const cleanLocationData = (data) => {
    return {
      latitude: data.places[0].latitude,
      longitude: data.places[0].longitude
    }
}

export const cleanRestroomsData = (data) => {

  return data.map(restroom => {
    return {
      city: restroom.city.split(' ').join(''),
      state: normalize(restroom.state),
      unisex: restroom.unisex,
      distance: restroom.distance.toFixed(2),
      id: restroom.id,

      name: restroom.name
      
        // rm geographic info
        .split(', USA').join('').split(restroom.city).join('').split(restroom.zip).join('').split(restroom.state).join('').split(normalize(restroom.state)).join('')
        
        //format
        .split(',').join(''),

      street: restroom.street.toLowerCase()
      
        // direction
        .split('north ').join('N ').split('south ').join('S ').split('east ').join('E ').split('west ').join('W ')

        // type
        .split('treet').join('t').split('venue').join('ve').split(' road').join(' Rd').split('oulevard').join('lvd').split('rive').join('r').split('door').join('Dr').split('arkway').join('kwy')
        
        // format
        .split('and').join('&').split('.').join('')
    }
  })
}
