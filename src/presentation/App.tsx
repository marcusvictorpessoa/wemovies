import { CartContextProvider } from "./hooks/useCart";
import { Router } from "./router";

export function App() {
  return (
    <div className="app-container">
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </div>
  );
}
