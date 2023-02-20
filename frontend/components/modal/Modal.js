export const Modal = ({ children, showModal, toggleModal }) => {
  return showModal ? (
    <div className="modal">
      <div className="modal__content h-5/6">
        <i className="fa-solid fa-xmark modal__close-icon mr-2" onClick={toggleModal} />
        {children}
      </div>
    </div>
  ) : null
}
