import { AddCardtWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";
import Coffee from '../../../../assets/1- Coffee.png';
import { RegularText, TitleText } from "../../../../componentes/Header/Typography";
import { QuantityInput } from "../../../../componentes/QuantityInput";
import { ShoppingCart } from "phosphor-react";
import { formatMoney } from "../../../../utils/formatMony";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}
interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({ coffee }: CoffeeProps) {
    const formattedPrice = formatMoney(coffee.price);

    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />

        <Tags>
            {coffee.tags.map(tag => (
                <span key={`${coffee.id}${tag}`}>{tag}</span>
            ))}
        </Tags>

        <Name>{coffee.name}</Name>
        <Description>{coffee.description}</Description>

        <CardFooter>
            <div>
                <RegularText size="s">R$</RegularText>
                <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
            </div>

            <AddCardtWrapper>
                <QuantityInput />
                <button>
                    <ShoppingCart weight="fill" size={22}/>
                </button>
            </AddCardtWrapper>
        </CardFooter>
        </CoffeeCardContainer>
    )
}