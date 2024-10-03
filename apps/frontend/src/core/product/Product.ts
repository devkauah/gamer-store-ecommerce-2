import Priceable from "./Priceable";
import Specifications from "./Specifications";

export default interface Product {
  id:number;
  name:string;
  description:string;
  brand:string;
  model:string;
  image:string;
  score:number;
  videoReview:string;
  tags:string[];
  priceable:Priceable;
  specifications:Specifications;
};