import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LIST_DATA } from '../data/listData';

export interface List {
  id: number;
  product: string;
  quantity: string;
  unitaryPrice: string;
  totalPrice: number;
}

type ListInput = Omit<List, 'id'>;

interface AddListContextData {
  list: List[];
  createItemList: (listInput: ListInput) => void;
  removeItemList: (id: number, idx: number) => void;
  editItemList: (listEdit: List) => void;
}

interface AddListProviderProps {
  children: ReactNode;
}

const AddListContext = createContext<AddListContextData>(
  {} as AddListContextData,
);

export function AddListProvider({ children }: AddListProviderProps) {
  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    const listLocalStorage: any = localStorage.getItem('lista');

    if (listLocalStorage) {
      const parsedListLocalStorage = JSON.parse(listLocalStorage);

      parsedListLocalStorage.forEach((element: List) => {
        LIST_DATA.push(element);
      });

      setList(LIST_DATA);

      localStorage.removeItem('lista');
    } else {
      setList(LIST_DATA);
    }
  }, []);

  function createItemList(listInput: ListInput) {
    const itemList = {
      id: new Date().getTime(),
      ...listInput,
    };

    LIST_DATA.push(itemList);

    setList([...LIST_DATA]);
  }

  function removeItemList(id: number, idx: number) {
    const confirmRemove = window.confirm(
      'Deseja realmente excluir o item da lista?',
    );

    if (confirmRemove) {
      LIST_DATA.splice(idx, 1);
      setList([...LIST_DATA]);
    } else {
      return;
    }
  }

  function editItemList(listEdit: List) {
    const itemToEdit = LIST_DATA.find((item: any) => item.id === listEdit.id);

    if (itemToEdit) {
      itemToEdit.product = listEdit.product;
      itemToEdit.quantity = listEdit.quantity;
      itemToEdit.unitaryPrice = listEdit.unitaryPrice;
      itemToEdit.totalPrice = listEdit.totalPrice;
    }

    setList([...LIST_DATA]);
  }

  return (
    <AddListContext.Provider
      value={{ list, createItemList, removeItemList, editItemList }}
    >
      {children}
    </AddListContext.Provider>
  );
}

export function useAddList() {
  const context = useContext(AddListContext);

  return context;
}
