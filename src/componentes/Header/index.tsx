import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import Logo from '../../assets/logo.svg';
import { MapPin, ShoppingCart} from 'phosphor-react';

export function Header() {
    return (
         <HeaderContainer>
            <div className="container">
                <img src={Logo} />

                <HeaderButtonContainer>
                <HeaderButton variant="purple">
                    <MapPin size={20} weight="fill" />
                    São Mateus, ES
                </HeaderButton>
                <HeaderButton variant="yellow">
                    <ShoppingCart size={20} weight="fill" />
                </HeaderButton>
                </HeaderButtonContainer>
            </div>
         </HeaderContainer>
    )
}