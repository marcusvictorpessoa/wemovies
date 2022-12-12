import { Box, Button, Card, Divider, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import Product from "../../../@types/Product";
import NavBar from "../../components/NavBar";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";
import EmptyCart from "../../assets/empty-cart.svg";
import Minus from "../../assets/minus.svg";
import Plus from "../../assets/plus.svg";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";
import { CurrencyFormat } from "../../utils/currencyFormat";
import { useEffect } from "react";
import totalCalculate from "../../utils/totalCalculate";

export function Cart() {

  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isSmallerThan1400] = useMediaQuery('(max-width: 1400px)');
  const [isSmallerThan900] = useMediaQuery('(max-width: 900px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const {
    cart,
    resetCart,
    removeFromCart,
    increment,
    decrement
  } = useCart();

  const navigate = useNavigate();

  function toFinalize() {
    resetCart();
    navigate('/sucesso');
  }

  return (
    <>
      <NavBar />
      <Container>
        {
          cart.items.length === 0 ?
            <Card
              justifyContent={isSmallerThan480 ? 'flex-start' : 'center'}
              alignItems={'center'}
              marginInline={isSmallerThan480 ? "1rem" : isSmallerThan1200 ? "5rem" : "20rem"}
              marginTop={isSmallerThan480 ? "0.1rem" : "4rem"}
              bgColor={'#ffffff'}
              height={isSmallerThan480 ? '70%' : '80%'}
            >
              <Text marginTop={isSmallerThan480 ? '3rem' : '0'} textAlign={'center'} as="b" fontSize={'2xl'} color="#2F2E41" fontFamily={"Open Sans"}>
                Parece que não {isSmallerThan480 && <br />} há nada por aqui :&#40;
              </Text>
              <Image marginTop={isSmallerThan480 ? '2rem' : '3rem'} src={EmptyCart} width={'700px'} alt="imagem que representa o carrinho vazio" />
              <Button
                fontFamily={'Open Sans'}
                fontWeight={'bold'}
                onClick={() => navigate('/')}
                marginTop={'2rem'}
                bgColor={'#009EDD'}
                color={'#ffffff'}
                _hover={{ bg: '#02b2f7' }}
                width={isSmallerThan480 ? '50%' : '25%'}
                height={'50px'}
              >
                VOLTAR
              </Button>
            </Card> :
            <Card
              overflowY={'auto'}
              minHeight={isSmallerThan480 ? '95%' : 'auto'}
              marginInline={isSmallerThan480 ? "1rem" : isSmallerThan900 ? '1rem' : isSmallerThan1400 ? "5rem" : "20rem"}
              marginTop={isSmallerThan480 ? "0.1rem" : "4rem"}
              bgColor={'#ffffff'}
              padding={isSmallerThan480 ? '1rem' : '2rem'}
            >
              <Flex display={isSmallerThan480 ? 'none' : 'flex'}>
                <Text fontFamily={"Open Sans"} as='b' color={'#999999'}>
                  PRODUTO
                </Text>
                <Text fontFamily={"Open Sans"} marginLeft={'42%'} as='b' color={'#999999'}>
                  QTD
                </Text>
                <Text fontFamily={"Open Sans"} marginLeft={'17.2%'} as='b' color={'#999999'}>
                  SUBTOTAL
                </Text>
              </Flex>
              {cart.items.map((item: Product) => {
                return (
                  <Flex direction={'row'} justifyContent={isSmallerThan480 ? 'flex-start' : 'space-between'} alignItems={isSmallerThan480 ? 'flex-start' : 'center'} marginTop={isSmallerThan480 ? '0.5rem' : '1.5rem'} key={item.id} >



                    {!isSmallerThan480 && <Flex width={'19rem'} alignItems={isSmallerThan480 ? 'flex-start' : 'center'}>
                      <Image width={'114px'} src={item.image} alt="imagem do produto" />
                      <Flex direction={'column'} marginLeft={'20%'} height='55px' justifyContent={'space-between'}>
                        <Text whiteSpace={'nowrap'} fontFamily={"Open Sans"} as={'b'}>
                          {item.title}
                        </Text>
                        <Text fontFamily={"Open Sans"} as={'b'}>
                          {CurrencyFormat(item.price)}
                        </Text>
                      </Flex>
                    </Flex>}

                    {!isSmallerThan480 && <Flex width={'20rem'} justifyContent={'space-between'}>
                      <Box display={'flex'}>
                        <Image onClick={() => decrement(item)} src={Minus} width={'20px'} cursor={'pointer'} alt="ícone de menos" />
                        <Box
                          bgColor={'#ffffff'}
                          border={'1px solid #D9D9D9'}
                          borderRadius={'4px'}
                          width={'62px'}
                          height={'26px'}
                          paddingLeft={'0.5rem'}
                          marginLeft={'1rem'}
                        >
                          {item.quantity}
                        </Box>
                        <Image marginLeft={'1rem'} onClick={() => increment(item)} src={Plus} width={'20px'} cursor={'pointer'} alt="ícone de mais" />
                      </Box>
                      <Text fontFamily={"Open Sans"} fontSize={'22px'} as={'b'}>
                        {CurrencyFormat(item.price * item.quantity)}
                      </Text>
                    </Flex>}

                    {!isSmallerThan480 && <Image onClick={() => removeFromCart(item)} src={Trash} cursor={'pointer'} width={'20px'} alt="ícone da lixeira" />}

                    {isSmallerThan480 && <Image width={'65px'} src={item.image} alt="imagem do produto" />}
                    {isSmallerThan480 && <Flex width={'100%'} direction={'column'}>
                      <Flex direction={'row'} marginLeft={'5%'} height='55px' justifyContent={'space-between'}>
                        <Text width={'7rem'} whiteSpace={'nowrap'} fontFamily={"Open Sans"} as={'b'}>
                          {item.title}
                        </Text>
                        <Text fontFamily={"Open Sans"} as={'b'}>
                          {CurrencyFormat(item.price)}
                        </Text>
                        <Image marginTop={'-10%'} onClick={() => removeFromCart(item)} src={Trash} cursor={'pointer'} width={'16px'} alt="ícone da lixeira" />
                      </Flex>
                      <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'} marginTop={'-5%'}>
                        <Box marginLeft={'5%'} display={'flex'}>
                          <Image onClick={() => decrement(item)} src={Minus} width={'20px'} cursor={'pointer'} alt="ícone de menos" />
                          <Box
                            bgColor={'#ffffff'}
                            border={'1px solid #D9D9D9'}
                            borderRadius={'4px'}
                            width={'62px'}
                            height={'26px'}
                            paddingLeft={'0.5rem'}
                            marginLeft={'0.7rem'}
                          >
                            {item.quantity}
                          </Box>
                          <Image marginLeft={'0.7rem'} onClick={() => increment(item)} src={Plus} width={'20px'} cursor={'pointer'} alt="ícone de mais" />
                        </Box>
                        <Flex direction={'column'}>
                          <Text fontSize={'12px'} fontFamily={"Open Sans"} as='b' color={'#999999'}>
                            SUBTOTAL
                          </Text>
                          <Text fontFamily={"Open Sans"} fontSize={'16px'} as={'b'}>
                            {CurrencyFormat(item.price * item.quantity)}
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>}
                  </Flex>
                )
              })
              }
              <Divider
                orientation="horizontal"
                height={'2px'}
                bgColor={'#999999'}
                color="#999999"
                marginTop={'2rem'}
                position={isSmallerThan480 ? 'fixed' : 'initial'}
                width={isSmallerThan480 ? '85%' : 'auto'}
                bottom={isSmallerThan480 ? '10rem' : '0'}
              />
              <Flex
                position={isSmallerThan480 ? 'fixed' : 'initial'}
                width={isSmallerThan480 ? '85%' : 'auto'}
                bottom={isSmallerThan480 ? '3.5rem' : '0'}
                direction={isSmallerThan480 ? 'column-reverse' : 'row'}
                justifyContent={'space-between'}
                marginTop={'2rem'}
                alignItems={'center'}
              >
                <Button
                  onClick={() => toFinalize()}
                  bgColor={'#009EDD'}
                  _hover={{ bg: '#02b2f7' }}
                  width={isSmallerThan480 ? '100%' : '25%'}
                  color="#ffffff"
                  height={'50px'}
                  marginTop={isSmallerThan480 ? '0.5rem' : '0'}
                >
                  FINALIZAR PEDIDO
                </Button>
                <Flex alignSelf={'flex-end'} width={isSmallerThan480 ? '12rem' : '15rem'} justifyContent={'space-around'} alignItems={'center'}>
                  <Text fontFamily={"Open Sans"} fontSize='16px' as='b' color={'#999999'}>
                    TOTAL
                  </Text>
                  <Text marginLeft={'3%'} fontFamily={"Open Sans"} fontSize='26px' as='b' color={'#2F2E41'}>
                    {CurrencyFormat(totalCalculate(cart.items))}
                  </Text>
                </Flex>
              </Flex>
            </Card>
        }
      </Container>
    </>

  );
}
