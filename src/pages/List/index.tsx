import { ButtonsContainer, ListContainer, ListTable } from "./styles";
import { Trash } from "@phosphor-icons/react";
import { AddListModal } from "../../components/AddListModal";
import { useState } from "react";
import { useAddList } from "../../hooks/useAddList";

export const List = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { list, removeItemList } = useAddList();

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalRequestClose() {
    setIsModalOpen(false);
  }

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
            {list.map((ls) => (
              <tr key={ls.id}>
                <td>{ls.product}</td>
                <td>{ls.quantity}</td>
                <td>{ls.unitaryPrice}</td>
                <td>{Number(ls.quantity) * Number(ls.unitaryPrice)}</td>
                <td>
                  <button onClick={() => removeItemList(ls.id)}>
                    {<Trash size={24} />}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ListTable>
    </ListContainer>
  );
};
