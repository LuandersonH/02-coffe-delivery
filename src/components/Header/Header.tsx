import { HeaderContainer } from "./Header.styles";
import logo from "../../assets/logo.png"
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <div className="local">
            <MapPin size={22} weight="fill"/> 
            <span>São Paulo, SP</span>
        </div>
        <div className="shop">
            <span>
                <ShoppingCart size={22} weight="fill"/>
            </span>
            <div className="countShop">3</div>
        </div>
        
      </div>
    </HeaderContainer>
  );
}
