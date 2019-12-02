import React from "react";
import "./category.css";
import EachCategory from '../Category/eachCategory/EachCategory';

export default function category() {
   
  return (
    <div className="category">
        <div className="container Category-main">
            <div className="row">
            <EachCategory className="col-sm-4" name="20th Century Electronics" 
            imgUrl="https://dynamicmedia.zuza.com/zz/m/original_/0/d/0df2dd8b-2a20-4a12-bfbe-8b6144760e9c/obsolete_cover___Gallery.jpg"/>
             <EachCategory className="col-sm-4"name="Flowers" 
            imgUrl="https://cdn.shopify.com/s/files/1/1034/3311/files/yellow-rose-196393_640.jpg?v=1533659994"/>
             <EachCategory className="col-sm-4" name="Wordingo Glossary" 
            imgUrl="http://www.verbatimmag.com/wp-content/uploads/2018/05/words-bg.png"/>
            <EachCategory className="col-sm-4" name="Delicious Snacks" 
            imgUrl="https://www.tasteofhome.com/wp-content/uploads/2019/05/shutterstock_273975992-1024x1024.jpg"/>
            <EachCategory className="col-sm-4" name="Atlantic Ocean Fish Species" 
            imgUrl="http://www.eregulations.com/wp-content/uploads/2019/05/18.jpg"/>
            <EachCategory className="col-sm-4" name="Animals" 
            imgUrl="https://cdn.shopify.com/s/files/1/0864/0872/files/less.then.15lbs_large.png?v=1534017867"/>
            </div>
            
        </div>
    </div>
  );
}