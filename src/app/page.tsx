//1. Import area of ReactJs Page
// Importing something from JS

// import defaultImportfrom 'Somelibrary';
import Image from "next/image";
import {ADDRESS,STATE,COUNTRY, AGE,SALARY,FAV_CAR } from '../helper';

import obj1  from '../helper';

// import { namedImport1,namedImport2,namedImport3,...} from 'Somelibrary';
//import {Image} from "next/image";

//2. Export Area
// Export something from JS
// We are exporting a JS function 

//I am outside the function defination
let surname='Dollor'; // Global Varible
export default function Home() {
  //I can inside the function defination
  var name="Sunil"; //Local Variable 


  //Every function may return somethin

  // React Component return basic structure of HTML i.e JSX Javascript and XML
  return (
    <>
      <h1>Hello {name} {surname}, {ADDRESS} {STATE} {COUNTRY},Age = {AGE}, Salary={SALARY},FAV_CAR={FAV_CAR} </h1>
      <h1>{ obj1.FAV_COLOR+" "+obj1.FAV_FRUIT} {obj1.FAV_LOCATION}</h1>
    </>
  
  );
}
