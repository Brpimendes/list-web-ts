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
}

type ListInput = Omit<List, "id">;

interface AddListContextData {
  list: List[];
  createItemList: (listInput: ListInput) => void;
  removeItemList: (id: number) => void;
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
      id: LIST_DATA.length + 1,
      ...listInput,
    };

    LIST_DATA.push(itemList);

    setList([...LIST_DATA]);
  }

  function removeItemList(id: number) {
    const newList = LIST_DATA.filter((ls: List) => ls.id !== id);

    setList(newList);
  }

  return (
    <AddListContext.Provider value={{ list, createItemList, removeItemList }}>
      {children}
    </AddListContext.Provider>
  );
}

export function useAddList() {
  const context = useContext(AddListContext);

  return context;
}
