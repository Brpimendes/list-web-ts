import { FormEvent, useState } from "react";
import { ModalContainer } from "../../adapaters/components/Modal";
import { X } from "@phosphor-icons/react";
import { Container } from "./styles";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const AddListModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const [product, setProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [unitaryPrice, setUnitaryPrice] = useState<string>("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!product || !quantity || !unitaryPrice) {
      return console.log("Todos os campos são obrigatorios!");
    }

    console.log(`Enviando os dados: ${product}, ${quantity}, ${unitaryPrice}}`);

    limparForm();
  }

  function limparForm() {
    setProduct("");
    setQuantity("");
    setUnitaryPrice("");
  }

  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmit}>
        <h2>Adicione Itens a lista</h2>
        <X size={24} onClick={onRequestClose} />

        <label>Produto</label>
        <input
          type="text"
          placeholder="Informe o produto"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />

        <label>Quantidade</label>
        <input
          type="number"
          placeholder="Informe a quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label>Valor Unitário</label>
        <input
          type="text"
          placeholder="Informe o valor unitário"
          value={unitaryPrice}
          onChange={(e) => setUnitaryPrice(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </Container>
    </ModalContainer>
  );
};
