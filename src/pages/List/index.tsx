import { ButtonsContainer, ListContainer, ListTable } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { AddListModal } from "../../components/AddListModal";
import { useState } from "react";

const mockList = [
  {
    id: 1,
    produto: "mel",
    quantidade: 3,
    valorUnitario: 1,
  },
  {
    id: 2,
    produto: "pão de forma",
    quantidade: 2,
    valorUnitario: 7.89,
  },
];

const List = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalRequestClose = () => {
    setIsModalOpen(false);
  };

  return (
    <ListContainer>
      <h1>Crie sua lista</h1>
      <ButtonsContainer>
        <AddListModal
          isOpen={isModalOpen}
          onRequestClose={handleModalRequestClose}
        />
        <button onClick={handleModalOpen}>Incluir Itens</button>
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
            {mockList.map((list) => (
              <tr key={list.id}>
                <td>{list.produto}</td>
                <td>{list.quantidade}</td>
                <td>{list.valorUnitario}</td>
                <td>{list.quantidade * list.valorUnitario}</td>
                <td>
                  <button>{<Trash size={24} />}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListTable>
    </ListContainer>
  );
};

export default List;
