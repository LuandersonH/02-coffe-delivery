import { HeaderContainer } from "./Header.styles";
import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";

const shopAmount = 1;

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <div className="local">
            <MapPin size={22} weight="fill" />
            <span>São Paulo, SP</span>
          </div>
          <div className="shop">
            <span>
              <ShoppingCart size={22} weight="fill" />
            </span>
            {shopAmount > 0 && <div className="countShop">{shopAmount}</div>}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
