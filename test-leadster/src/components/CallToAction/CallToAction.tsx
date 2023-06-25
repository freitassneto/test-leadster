import React from "react";
import { CallToActionStyled, Container } from "./CallToStyled";
import comparativo from "../../assets/images/comparativo_img_CTA.png";
import noCard from "../../assets/images/no-card-dark.webp";
import rating from "../../assets/images/rating.webp";
import seloRd from "../../assets/images/selo_RD.png";
import Image from "next/image";

export const CallToAction = () => {
  return (
    <CallToActionStyled>
      <Container>
        <div className="content">
          <div>
            <Image src={comparativo} alt={""} width={500} />
          </div>
          <div className="infoContent">
            <h3>
              Pronto para triplicar sua <strong>Geração de Leads?</strong>
            </h3>
            <p>
              Criação e ativação em <strong>4 minutos.</strong>
            </p>
            <div className="line"></div>
            <div className="ctaDiv">
              <a href="https://leadster.com.br/">VER DEMONSTRAÇÃO</a>
              <Image
                src={seloRd}
                alt="Selo Top 10 Apps mais usados RD Station"
                height={60}
              />
            </div>
            <div className="footerContent">
              <p>
                <Image src={noCard} height={12} alt="Ícone Cartão de Crédito" /> Não é necessário cartão de crédito |{" "}
                <Image src={rating} height={12} alt="Avaliação" /> 4.9/5 média de satisfação
              </p>
            </div>
          </div>
        </div>
      </Container>
    </CallToActionStyled>
  );
};
