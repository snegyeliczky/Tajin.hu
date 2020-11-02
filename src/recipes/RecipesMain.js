import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/footer";
import ViewerMenu from "../pictureviewer/viewerMenu";
import Recipes from "./recipes";

const RecipesMain = () =>{

   return(
       <div>
           <ViewerMenu/>
           <Recipes/>
           <Contact/>
           <Footer/>
       </div>
   )
};

export default RecipesMain;