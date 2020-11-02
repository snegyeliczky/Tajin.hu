import React from "react"
import { Accordion, AccordionToggle, Card, Container } from "react-bootstrap";
import styled from 'styled-components'

const RecipeCardHeader = styled(Card.Header)`
   background-color:rgba(253, 241, 197,0.8);
   color: #ba3e06;
`

const RecipeCardBody = styled(Card.Body)`
   background-color:rgba(253, 241, 197,0.8);

`

const Recipes = () =>{

   return(
      <Container>
         <Accordion defaultActiveKey="0">
            <Card>
               <AccordionToggle  as={RecipeCardHeader} eventKey="0">
                  <h3>Csirke tajine</h3>
                  <img src="images/recipes/csirke_tajine.jpeg"/>
               </AccordionToggle>
               <Accordion.Collapse eventKey="0">
                  <div>
                     <RecipeCardBody><p><strong>Hozzávalók:</strong> 1 kg csirkemell filé, curry, gyömbér, méz, só, főzőhagyma, mandula, 1 dl fehérbor</p>
                     <p><strong>Elkészítés:</strong> A csirkemellet besózzuk, majd a fűszerekből kevert fűszerkeverékkel bedörzsöljük. A tajine edény alját hagymakarikákkal kirakjuk, majd berakodjuk a húst. Tetejére rászórjuk a mandulát, lelocsoljuk mézzel és fehérborral, így rakjuk fel az izzó faszénparázs fölé. A húst fedő alatt puhára pároljuk, majd a fedőt eltávolítva a felesleges szaftot elfőzzük.</p>
                     </RecipeCardBody>
                  </div>
               </Accordion.Collapse>
            </Card>
         </Accordion>
         <Accordion defaultActiveKey="0">
            <Card>
               <Accordion.Toggle as={RecipeCardHeader} eventKey="0">
                  Masik recept
               </Accordion.Toggle>
               <Accordion.Collapse eventKey="0">
                  <RecipeCardBody>reszletek a masik recepthez</RecipeCardBody>
               </Accordion.Collapse>
            </Card>
         </Accordion>
      </Container>
   );
}

export default Recipes
