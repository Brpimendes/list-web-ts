import { FormEvent, useEffect, useState } from 'react';
import { ModalContainer } from '../../adapters/components/Modal';
import { X } from '@phosphor-icons/react';
import { Container } from './styles';
import { List, useAddList } from '../../hooks/useListItems';

interface ModalProps {
  isOpen: boolean;
  listItem: List;
  onRequestClose: () => void;
}

export const EditListModal = ({
  isOpen,
  listItem,
  onRequestClose,
}: ModalProps) => {
  const { editItemList } = useAddList();

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

    if (listItem.id) {
      editItemList({
        id: listItem.id,
        product,
        quantity,
        unitaryPrice: parseUnitaryPrice,
        totalPrice: Number(quantity) * Number(parseUnitaryPrice),
      });
    }

    onRequestClose();
  }

  useEffect(() => {
    if (isOpen) {
      setProduct(listItem.product);
      setQuantity(listItem.quantity);
      setUnitaryPrice(listItem.unitaryPrice);
    }
  }, [isOpen, listItem]);

  return (
    <ModalContainer
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleSubmit}>
        <h2>Edite seu Item</h2>
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
        />

        <label>Valor Unitário</label>
        <input
          type="text"
          placeholder="Informe o valor unitário"
          value={unitaryPrice}
          onChange={(e) => setUnitaryPrice(e.target.value)}
        />

        <button type="submit">Editar</button>
        {message && <p>{message}</p>}
      </Container>
    </ModalContainer>
  );
};
