import { HeaderContainer } from "./Header.styles";
import logo from "../../assets/logo.png";
import { MapPin, ShoppingCart } from "phosphor-react";
import { CardsContext } from "../../Contexts/CardsContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

// interface headerProps {
//   totalProdutos: number;
// }

export function Header() {
  const { totalProdutos } = useContext(CardsContext);

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Home">
          <img src={logo} alt="" />
        </NavLink>
        <div>
          <div className="local">
            <MapPin size={22} weight="fill" />
            <span>São Paulo, SP</span>
          </div>
          <div className="shop">
            <span>
              <NavLink to="/checkout" title="Checkout">
                <ShoppingCart size={22} weight="fill" />
              </NavLink>
            </span>
            {totalProdutos > 0 && (
              <div className="countShop">{totalProdutos}</div>
            )}
          </div>
        </div>
      </div>
    </HeaderContainer>
  );
}
