import { Button, Card, Image, Text, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../../components/NavBar";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";
import SuccessSvg from "../../assets/success.svg";
import { useNavigate } from "react-router-dom";

export function Success() {

  const [isSmallerThan1200] = useMediaQuery('(max-width: 1200px)');
  const [isSmallerThan480] = useMediaQuery('(max-width: 480px)');

  const { cart } = useCart();

  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Container>
        <Card
          justifyContent={isSmallerThan480 ? 'flex-start' : 'center'}
          alignItems={'center'}
          marginInline={isSmallerThan480 ? "1rem" : isSmallerThan1200 ? "5rem" : "20rem"}
          marginTop={isSmallerThan480 ? "0.1rem" : "4rem"}
          bgColor={'#ffffff'}
          height={isSmallerThan480 ? '75%' : '80%'}
        >
          <Text marginTop={isSmallerThan480 ? '3rem' : '0'} textAlign={'center'} as="b" fontSize={'2xl'} color="#2F2E41" fontFamily={"Open Sans"}>
            Compra realizada{isSmallerThan480 && <br />} com sucesso!
          </Text>
          <Image marginTop={ isSmallerThan480 ? '2rem' : '3rem'} src={SuccessSvg} width={ isSmallerThan480 ? '300px' : '400px'} alt="imagem que representa o carrinho vazio" />
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
        </Card>
      </Container>
    </>

  );
}
