import {useAddList} from "../../hooks/useListItems";
import {SummaryContainer} from "./styles";

const Summary = () => {
  const {list} = useAddList();

  const vlrTotal = list.reduce(
    (acc, list) => {
      acc.total += list.totalPrice;
      return acc;
    },
    {
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <section>
        <h3>Valor Total:</h3>
        <span>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(vlrTotal.total)}
        </span>
      </section>
    </SummaryContainer>
  );
};

export default Summary;
