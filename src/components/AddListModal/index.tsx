import { FormEvent, useState } from 'react';
import { ModalContainer } from '../../adapters/components/Modal';
import { X } from '@phosphor-icons/react';
import { Container } from './styles';
import { useAddList } from '../../hooks/useListItems';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const AddListModal = ({ isOpen, onRequestClose }: ModalProps) => {
  const { createItemList } = useAddList();

  const [product, setProduct] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [unitaryPrice, setUnitaryPrice] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!product || !quantity || !unitaryPrice) {
      return setMessage('Todos os campos são obrigatorios!');
    }

    const splitUnitaryPrice = unitaryPrice.split(',');

    let parseUnitaryPrice = '';
    if (splitUnitaryPrice.length === 2)
      parseUnitaryPrice = unitaryPrice.split(',').join('.');
    else parseUnitaryPrice = unitaryPrice;

    createItemList({
      product,
      quantity,
      unitaryPrice: parseUnitaryPrice,
      totalPrice: Number(parseUnitaryPrice) * Number(quantity),
    });

    limparForm();
  }

  function limparForm() {
    setProduct('');
    setQuantity('');
    setUnitaryPrice('');
    setMessage('');
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
          min={0}
          placeholder="Informe a quantidade"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          inputMode="decimal"
        />

        <label>Valor Unitário</label>
        <input
          type="text"
          placeholder="Informe o valor unitário"
          value={unitaryPrice}
          onChange={(e) => setUnitaryPrice(e.target.value)}
        />

        <button type="submit">Adicionar</button>
        {message && <p>{message}</p>}
      </Container>
    </ModalContainer>
  );
};
