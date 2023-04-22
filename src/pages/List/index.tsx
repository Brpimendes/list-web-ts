import { useState } from "react";

import { AddListModal } from "../../components/AddListModal";
import { EditListModal } from "../../components/EditListModal";

import { useAddList } from "../../hooks/useListItems";
import { Pencil, Trash } from "@phosphor-icons/react";

import { ButtonsContainer, ListContainer, ListTable } from "./styles";

export const List = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const { list, removeItemList } = useAddList();

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalEditOpen() {
    setIsModalEditOpen(true);
  }

  function handleModalRequestClose() {
    setIsModalOpen(false);
  }

  function handleModalEditRequestClose() {
    setIsModalEditOpen(false);
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
                <td>{ls.totalPrice}</td>
                <td>
                  <button onClick={() => removeItemList(ls.id)} title="excluir">
                    {<Trash size={24} />}
                  </button>
                  <button onClick={handleModalEditOpen} title="editar">
                    {<Pencil size={24} />}
                    <EditListModal
                      isOpen={isModalEditOpen}
                      onRequestClose={handleModalEditRequestClose}
                      listId={ls.id}
                    />
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
