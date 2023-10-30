
function ConstructCity(name, population, area, mayorsName, mainStreet) {
    this.name = name;         
    this.population = population;  
    this.area = area; 
    this.mainStreet = mainStreet;
    this.mayorsName = mayorsName;         
  }
  
 
  const kyiv = new ConstructCity("Kyiv", 2900000, 839, "Khreschatyk", "Vitali Klitschko");
  const odessa = new ConstructCity("Odessa", 993120, 237, "Deribasivska Street", "Gennadiy Trukhanov");
  
  
  console.log(kyiv);
  console.log(odessa);
  
