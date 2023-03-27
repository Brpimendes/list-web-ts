import { ButtonsContainer, ListContainer, ListTable } from "./styles";
import { Trash } from "@phosphor-icons/react";

const List = () => {
  return (
    <ListContainer>
      <h1>Crie sua lista</h1>
      <ButtonsContainer>
        <button>Adicionar ítens</button>
        <button>Salvar Lista</button>
      </ButtonsContainer>
      <ListTable>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Valor unitário</th>
              <th>Total</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pão</td>
              <td>1</td>
              <td>8.5</td>
              <td>8.5</td>
              <td>
                <button>{<Trash size={24} />}</button>
              </td>
            </tr>
            <tr>
              <td>Pão</td>
              <td>1</td>
              <td>8.5</td>
              <td>8.5</td>
              <td>
                <button>{<Trash size={24} />}</button>
              </td>
            </tr>
            <tr>
              <td>Pão</td>
              <td>1</td>
              <td>8.5</td>
              <td>8.5</td>
              <td>
                <button>{<Trash size={24} />}</button>
              </td>
            </tr>
          </tbody>
        </table>
      </ListTable>
    </ListContainer>
  );
};

export default List;
