import { useEffect } from 'react';
import { Overlay } from './Modal.styled';

export const Modal = ({ largeImg, altImg, closeModal }) => {
  useEffect(() => {
    const escapePress = e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', escapePress);
    return () => {
      window.removeEventListener('keydown', escapePress);
    };
  }, [closeModal]);

  const backdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Overlay onClick={backdropClick}>
      <img src={largeImg} alt={altImg} width="70%" />
    </Overlay>
  );
};
