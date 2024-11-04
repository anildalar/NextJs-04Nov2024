//1. Import area of ReactJs Page
// Importing something from JS

// import defaultImportfrom 'Somelibrary';
import Image from "next/image";

// import {namedImport} from 'Somelibrary';
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
    <h1>Hello {name} {surname}, {ADDRESS}</h1>
  );
}
