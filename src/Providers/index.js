import { BebidasProvider } from "./bebidas";
import { CasamentoProvider } from "./Casamento";
import { ConfraternizacaoProvider } from "./Confraternizacao";
import { FormaturaProvider } from "./Formatura";

const Providers = ({ children }) => {
  return (
    <BebidasProvider>
      <CasamentoProvider>
        <ConfraternizacaoProvider>
          <FormaturaProvider>{children}</FormaturaProvider>
        </ConfraternizacaoProvider>
      </CasamentoProvider>
    </BebidasProvider>
  );
};
export default Providers;
