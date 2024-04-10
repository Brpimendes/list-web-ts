import ReactModal from "react-modal";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const ModalContainer: React.FC<ReactModal.Props> = ({ ...rest }) => {
  return <Modal {...rest} />;
};
