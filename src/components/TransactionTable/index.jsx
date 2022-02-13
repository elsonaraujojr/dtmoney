import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr className="linha">
            <td>Almoço1</td>
            <td className="deposit">R$ 1000,00</td>
            <td>Alimentação</td>
            <td>20/06/2020</td>
          </tr>
          <tr className="linha">
            <td>Almoço</td>
            <td className="withdraw">R$ 250,00</td>
            <td>Alimentação</td>
            <td>20/06/2020</td>
          </tr>
          <tr className="linha">
            <td>Almoço</td>
            <td className="withdraw">R$ 250,00</td>
            <td>Alimentação</td>
            <td>20/06/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
