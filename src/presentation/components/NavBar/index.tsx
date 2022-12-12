import React from "react";
import { Items, LogoName, Nav, TitleCart } from "./styles";
import { Image, Flex } from "@chakra-ui/react";
import IconCart from "../../assets/cart.svg";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

const NavBar: React.FC = () => {

    const navigate = useNavigate();

    const { cart } = useCart();

    return (
        <Nav>
            <LogoName>
                WeMovies
            </LogoName>
            <Flex alignItems={'center'} direction={'row'}>
                <Flex direction={'column'} mr="1rem">
                    <TitleCart>Meu Carrinho</TitleCart>
                    <Items>{cart.items.length} {cart.items.length === 1 ? 'item' : 'itens'}</Items>
                </Flex>
                    <Image onClick={() => navigate('/carrinho')} src={IconCart} width="40px" cursor={'pointer'} />
            </Flex>
        </Nav >
    );
}

export default NavBar;