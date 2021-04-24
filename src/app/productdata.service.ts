import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  productCollection: [{"name":"Wireless Phone Chargers","status":"Active","price":10,"description":"Wireless phone chargers are the next big thing in smartphone accessories. Why? People are fed up with regular charging devices. They all come with a wire.","id":1},{"name":"Peel-Off Mask","status":"Active","price":40,"description":"As you’ve probably noticed, the pandemic has made its impact on the majority of trending products. This stay-at-home routine has catalyzed products that help destress i.e peel-off masks and face care products. I","id":2},{"name":"Face Shield","status":"Active","price":15,"description":"People love to look cool and what is the best way to make them so then face shields or masks? The good part is that their search is showing a positive trend this means that people love these face shields. And when people love something, it is in demand.","id":3},{"name":"Phone Lenses","price":5,"description":"Phone lenses help capture better photographs. They are available in multiple settings. Search for those that have better quality and more order volume while selling on your store. Phone lenses have been in the market for the last few years","id":4},{"name":"Child Wrist","price":5,"description":"Many women lose their children while shopping in the malls. The child wrist leash will help avoid such an unfortunate scenario.","id":6},{"name":"Wifi Repeater","status":"Active","price":60,"description":"Tired of slow internet speed outside your house? Use a Wi-Fi repeater and double the internet speed. Most Wi-Fi routers can cover only 20m/sq area.","id":7},{"name":"Matcha Tea","price":30,"description":"This finely ground powder of green leaves is a healthier alternative to regular green tea. Demand for matcha tea has increased substantially over the past few months, but it still isn’t as easily available as you might think, which makes it a fantastic product to sell online. ","id":8},{"name":"Fitness Tracker","status":"Active","price":250,"description":"It can get frustrating to keep walking back to the outlet that’s charging your phone to check for that email notification or meeting invite, especially if you’re running errands around the house. Lo and behold, That’s where a fitness tracker saves you that extra effort!","id":9}];  

  constructor(private http: HttpClient) { 
    this.productCollection = [{"name":"Wireless Phone Chargers","status":"Active","price":10,"description":"Wireless phone chargers are the next big thing in smartphone accessories. Why? People are fed up with regular charging devices. They all come with a wire.","id":1},{"name":"Peel-Off Mask","status":"Active","price":40,"description":"As you’ve probably noticed, the pandemic has made its impact on the majority of trending products. This stay-at-home routine has catalyzed products that help destress i.e peel-off masks and face care products. I","id":2},{"name":"Face Shield","status":"Active","price":15,"description":"People love to look cool and what is the best way to make them so then face shields or masks? The good part is that their search is showing a positive trend this means that people love these face shields. And when people love something, it is in demand.","id":3},{"name":"Phone Lenses","price":5,"description":"Phone lenses help capture better photographs. They are available in multiple settings. Search for those that have better quality and more order volume while selling on your store. Phone lenses have been in the market for the last few years","id":4},{"name":"Child Wrist","price":5,"description":"Many women lose their children while shopping in the malls. The child wrist leash will help avoid such an unfortunate scenario.","id":6},{"name":"Wifi Repeater","status":"Active","price":60,"description":"Tired of slow internet speed outside your house? Use a Wi-Fi repeater and double the internet speed. Most Wi-Fi routers can cover only 20m/sq area.","id":7},{"name":"Matcha Tea","price":30,"description":"This finely ground powder of green leaves is a healthier alternative to regular green tea. Demand for matcha tea has increased substantially over the past few months, but it still isn’t as easily available as you might think, which makes it a fantastic product to sell online. ","id":8},{"name":"Fitness Tracker","status":"Active","price":250,"description":"It can get frustrating to keep walking back to the outlet that’s charging your phone to check for that email notification or meeting invite, especially if you’re running errands around the house. Lo and behold, That’s where a fitness tracker saves you that extra effort!","id":9}];
  }

  getAllProductList(){
    return this.productCollection;
  }
 
  // we can make http request when we are dealing with APIs
  deleteProduct(id){
    let index = this.productCollection.findIndex((d)=>{
      return d.id == id
    });
    if (index > -1) {
      this.productCollection.splice(index, 1);
    }
  }

  editProduct(data) {
    // console.log("the id is-- " + data);
    for(let i in this.productCollection){
      if(this.productCollection[i].id == data.id){
        this.productCollection[i] = data;
      }
    }
  }
  
  addProduct(data){
    let id = this.productCollection.length+1;
    data.id = id;
    this.productCollection.push(data);
    // console.log(this.productCollection);
    return true;
  }


}
