function createCityObject(properties) {
    
    if (properties.length < 5) {
      return 'Insufficient data to create a city object';
    }
  
   
    const city = {
      name: properties[0],
      area: properties[1],
      population: properties[2],
      mainStreet: properties[3],
      mayorsName: properties[4]
    };
  
    return city;
  }
  
  const cityProperties = ['Odessa', '237 km²', 993120, 'Deribasivska Street', 'Ch.rt'];
  const cityObject = createCityObject(cityProperties);
  
  console.log(cityObject);
  