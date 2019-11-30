import React from "react";
import "./category.css";
import EachCategory from '../Category/eachCategory/EachCategory';

export default function category() {
  return (
    <div className="category">
        <div className="container Category-main">
            <div className="row">
            <EachCategory className="col-sm-4" name="Pet" 
            imgUrl="https://cdn.shopify.com/s/files/1/0864/0872/files/less.then.15lbs_large.png?v=1534017867"/>
             <EachCategory className="col-sm-4"name="Pet" 
            imgUrl="https://cdn.shopify.com/s/files/1/0864/0872/files/less.then.15lbs_large.png?v=1534017867"/>
             <EachCategory className="col-sm-4" name="Pet" 
            imgUrl="https://cdn.shopify.com/s/files/1/0864/0872/files/less.then.15lbs_large.png?v=1534017867"/>
            </div>
            
        </div>
    </div>
  );
}