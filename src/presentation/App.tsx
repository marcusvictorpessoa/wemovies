import { CartContextProvider } from "./hooks/useCart";
import { Router } from "./router";
import { AppContainer } from "./styles";

export function App() {
  return (
    <AppContainer>
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </AppContainer>
  );
}
