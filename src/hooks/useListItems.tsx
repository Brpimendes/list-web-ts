import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { LIST_DATA } from "../data/listData";

export interface List {
  id: number;
  product: string;
  quantity: string;
  unitaryPrice: string;
  totalPrice: number;
}

type ListInput = Omit<List, "id">;

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
  {} as AddListContextData
);

export function AddListProvider({ children }: AddListProviderProps) {
  const [list, setList] = useState<List[]>([]);

  useEffect(() => {
    setList(LIST_DATA);
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
    LIST_DATA.splice(idx, 1);
    setList([...LIST_DATA]);
  }

  function editItemList(listEdit: List) {
    list.find((ls) => {
      if (ls.id === listEdit.id) {
        ls.product = listEdit.product;
        ls.quantity = listEdit.quantity;
        ls.unitaryPrice = listEdit.unitaryPrice;
        ls.totalPrice = listEdit.totalPrice;
      }
      return;
    });
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
