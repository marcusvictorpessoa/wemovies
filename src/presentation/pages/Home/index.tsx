import { Provider, useEffect, useState } from "react";
import { Container } from "./styles";
import Spinner from "../../components/Spinner";

import { Button, Card, Image, Text, Grid, useMediaQuery } from "@chakra-ui/react";

import Product from "../../../@types/Product";
import MovieHttpService from "../../../infrastructure/services/MovieService";

import IconShoppingCart from "../../assets/shopping-cart.svg";
import NavBar from "../../components/NavBar";

import { CurrencyFormat } from "../../utils/currencyFormat";
import { useCart } from "../../hooks/useCart";

export function Home() {

  const [products, setProducts] = useState([] as Product[]);
  const [loading, setLoading] = useState(false);

  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const { cart, addToCart } = useCart();

  async function getAllProducts() {
    try {
      setLoading(true);
      let response = await MovieHttpService.list();
      const prods = response.data.map((prod: Product) => Object.assign(prod, { quantity: 0 }));
      setProducts(prods.filter((itemHome: Product) => {
        cart.items.forEach((itemCart: Product) => {
          if (itemHome.id === itemCart.id) {
            itemHome.quantity = itemCart.quantity;
          }
        });
        return itemHome;
      }));
    } catch {

    } finally {
      setLoading(false);
    }

  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        {loading ?
          <Spinner /> :
          <Grid
            templateColumns={"repeat(auto-fit, minmax(310px, 1fr))"}
            marginTop={isSmallerThan480 ? "0.1rem" : "4rem"}
            gap={"1rem"}
            marginInline={isSmallerThan480 ? "1rem" : isSmallerThan1200 ? "5rem" : "20rem"}
            bgColor={"#2F2E41"}
            height={"80%"}
          >
            {
              products.map((product: Product) => {
                return (
                  <Card justifyContent={'space-around'} alignItems={'center'} padding={"1rem"} key={product.id} bgColor={'#ffffff'}>
                    <Image src={product.image} width="147px" alt="imagem do produto" />
                    <Text as={'b'} fontFamily={"Open Sans"}>{product.title}</Text>
                    <Text as={'b'} >
                      {CurrencyFormat(product.price)}
                    </Text>
                    <Button
                      
                      onClick={() => addToCart(product)}
                      bgColor={product.quantity > 0 ? '#039B00' : '#009EDD'}
                      _hover={product.quantity > 0 ? { bg: '#04a701' } : { bg: '#02b2f7' }}
                      width={'100%'}
                      height={'50px'}
                    >
                      <Image src={IconShoppingCart} width="15px" marginRight={'0.2rem'} />
                      <Text fontWeight={'light'} color={'#ffffff'} marginRight={product.quantity > 0 ? '1.2rem': '0.8rem'}>{product.quantity}</Text>
                      <Text fontWeight={'bold'} color={'#ffffff'} >
                        {product.quantity > 0 ? 'ITEM ADICIONADO' : 'ADICIONAR AO CARRINHO'}
                      </Text>
                    </Button>
                  </Card>
                )
              })
            }
          </Grid>
        }
      </Container>
    </>
  );
}
