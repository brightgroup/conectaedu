export const Modal = ({ children, showModal, toggleModal }) => {
  return showModal ? (
    <div className="modal">
      <div className="modal__content">
        <i className="fa-solid fa-xmark modal__close-icon" onClick={toggleModal} />
        {children}
      </div>
    </div>
  ) : null
}
