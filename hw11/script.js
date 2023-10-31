class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    
    area() {
      return this.width * this.height;
    }
  
   
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
 
  const myRectangle = new Rectangle(10, 5);
  

  const area = myRectangle.area();
  const perimeter = myRectangle.perimeter();
  
  console.log(area);
  console.log(perimeter);
  