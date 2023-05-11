import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import useMountTransition from '../hooks/useMountTransition';

export interface OverlayProps {
  children?: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}

const StyledOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &.in.visible {
    opacity: 1;
  }
`;

const ReactPortal = ({ children }: { children: ReactNode }) => {
  return ReactDOM.createPortal(children, document.getElementById('overlay')!);
};

export function Overlay({ children, isOpen, handleClose }: OverlayProps) {
  const hasTransitionedIn = useMountTransition(isOpen, 200);

  return isOpen || hasTransitionedIn ? (
    <ReactPortal>
      <StyledOverlay
        className={`no-select ${hasTransitionedIn && 'in'} ${
          isOpen && 'visible'
        }`}
        onClick={handleClose}
      >
        {children}
      </StyledOverlay>
    </ReactPortal>
  ) : null;
}

export default Overlay;
