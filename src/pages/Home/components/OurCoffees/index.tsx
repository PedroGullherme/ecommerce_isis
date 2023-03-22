import { TitleText } from "../../../../componentes/Header/Typography";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCofffeesContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCofffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>

            <CoffeeList>
                {coffees.map( (coffee) => (
                     <CoffeeCard key={coffee.id} coffee={coffee}/>
                ))};
               
               
            </CoffeeList>
        </OurCofffeesContainer>
    )
}