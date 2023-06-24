import React from "react";
import { Container, FooterStyled } from "./FooterStyled";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";

export const Footer = () => {
  return (
    <Container>
      <FooterStyled>
        <div className="topFooter">
          <Image src={logo} alt={"Logo Leadster"} />
          <span>Transformando visitantes em clientes.</span>
        </div>
        <section>
          <ul>
            <h5>Links Principais</h5>
            <li>Home</li>
            <li>Ferramenta</li>
            <li>Preços</li>
            <li>Contato</li>
          </ul>
          <ul>
            <h5>Cases</h5>
            <li>Geração de Leads B2B</li>
            <li>Geração de Leads em Software</li>
            <li>Geração de Leads em Imobiliária</li>
            <li>Cases de Sucesso</li>
          </ul>
          <ul>
            <h5>Materiais</h5>
            <li>Blog</li>
            <li>Parceria com Agências</li>
            <li>Guia Definitivo do Marketing</li>
            <li>Materiais Gratuitos</li>
          </ul>
          <ul>
            <h5>Siga a Leadster</h5>
            <div className="socialBtns">
              <button>
                <FaLinkedinIn />
              </button>
              <button>
                <FaFacebookF />
              </button>
              <button>
                <TfiInstagram />
              </button>
            </div>
            <p>Email: <span>contato@leadster.com.br</span></p>
            <p>Telefone: <span>(42) 98828-9851</span></p>
          </ul>
        </section>
        <div className="botFooter">
          <span>
            Copyright © 2015 - 2023 Todos os direitos reservados |{" "}
            <a href="https://leadster.com.br/">Leadster</a>
          </span>
          <span>
            Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |
            Termos de uso
          </span>
        </div>
      </FooterStyled>
    </Container>
  );
};
