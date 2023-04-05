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
      id: new Date().getTime(),
      ...listInput,
    };

    LIST_DATA.push(itemList);

    setList([...LIST_DATA]);
  }

  function removeItemList(id: number) {
    let index = 0;
    list.find((ls: List, idx: number) => {
      if (ls.id === id) index = idx;
    });

    LIST_DATA.splice(index, 1);
    setList([...LIST_DATA]);
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
