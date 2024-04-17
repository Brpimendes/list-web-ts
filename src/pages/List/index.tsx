import { useState } from 'react';

import { AddListModal } from '../../components/AddListModal';
import { EditListModal } from '../../components/EditListModal';

import { List as ListType, useAddList } from '../../hooks/useListItems';
import {
  DownloadSimple,
  Pencil,
  PlusCircle,
  Trash,
} from '@phosphor-icons/react';

import { ButtonsContainer, ListContainer, ListTable } from './styles';

export const List = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalEditOpen, setIsModalEditOpen] = useState<boolean>(false);
  const [listaCompleta, setListaCompleta] = useState<ListType>({} as ListType);
  const { list, removeItemList } = useAddList();

  function handleModalOpen() {
    setIsModalOpen(true);
  }

  function handleModalEditOpen(ls: ListType) {
    setIsModalEditOpen(true);
    setListaCompleta(ls);
  }

  function handleModalRequestClose() {
    setIsModalOpen(false);
  }

  function handleModalEditRequestClose() {
    setIsModalEditOpen(false);
  }

  function handleSaveList() {
    if (list.length === 0) {
      return alert('Inserir ao menos 1 item na lista.');
    }

    const listToSave = JSON.stringify(list);

    try {
      localStorage.setItem('lista', listToSave);

      alert('salvo com sucesso');
    } catch (error) {
      alert('erro ao salvar lista');
    }
  }

  return (
    <ListContainer>
      <h1>Crie sua lista</h1>
      <ButtonsContainer>
        <AddListModal
          isOpen={isModalOpen}
          onRequestClose={handleModalRequestClose}
        />
        <button onClick={handleModalOpen} title="Incluir Items">
          <PlusCircle size={40} />
        </button>
        <button onClick={handleSaveList} title="Salvar lista">
          <DownloadSimple size={40} />
        </button>
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
            {list.map((ls, idx) => (
              <tr key={ls.id}>
                <td>{ls.product}</td>
                <td>{ls.quantity}</td>
                <td>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(Number(ls.unitaryPrice))}
                </td>
                <td>
                  {new Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(ls.totalPrice)}
                </td>
                <td>
                  <button
                    onClick={() => removeItemList(ls.id, idx)}
                    title="excluir"
                  >
                    {<Trash size={24} />}
                  </button>
                  <button
                    onClick={() => handleModalEditOpen(ls)}
                    title="editar"
                  >
                    {<Pencil size={24} />}
                  </button>
                </td>
              </tr>
            ))}
            <EditListModal
              isOpen={isModalEditOpen}
              onRequestClose={handleModalEditRequestClose}
              listItem={listaCompleta}
            />
          </tbody>
        </table>
      </ListTable>
    </ListContainer>
  );
};
