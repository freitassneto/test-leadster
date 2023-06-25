import React, { useState, useRef, useEffect } from "react";
import { Container } from "./ModalStyled";
import { createPortal } from "react-dom";
import YouTubeVideo from "../YouTubeVideo";

interface ModalContentProps {
  toggleModal: () => void;
}

export const ModalContent = ({ toggleModal }: ModalContentProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const portalRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLElement>("body");
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      if (!e.target) {
        return;
      }

      if (!ref.current.contains(e.target as HTMLElement)) {
        toggleModal();
      }
    };
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return mounted && portalRef.current
    ? createPortal(
        <Container>
          <div ref={ref}>
            <h3>
              <span>Webinar:</span> Como aumentar sua Geração de Leads feat.
              Traktor
            </h3>
            <button className="closeButton" onClick={toggleModal}>
              X
            </button>
            <div>
              <YouTubeVideo videoId="LG_3WyaiHFY" />
            </div>
            <div>
              <h4>Descrição</h4>
              <div className="line"></div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi at porro, beatae, doloremque officiis quo maxime nihil
                harum labore, minima assumenda accusamus expedita architecto
                saepe dicta distinctio eligendi provident modi.
              </p>
            </div>
          </div>
        </Container>,
        portalRef.current
      )
    : null;
};
