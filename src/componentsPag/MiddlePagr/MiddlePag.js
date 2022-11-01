import React from "react";
import { Link } from "react-router-dom";
import { MdlPag } from "./Styled";
export default function Home(){
    return (
        <>
        <MdlPag>
            <div className="textMontserrat">
                <h2>
                    <u>Para iniciar o processo</u>
                </h2>
                <p id="textSobre">
                    Esteja com os seguintes documentos em mãos:
                </p>
            </div>
            <div>
                <ul className="textMontserrat">
                    <li>
                        RG
                    </li>
                    <li>
                        CPF
                    </li>
                    <li>
                        CARTEIRA DE VACINAÇÃO
                    </li>
                    <li>
                        SEU ENDEREÇO (Caso não saiba)
                    </li>
                    <li>
                        OVO DE PÁSCOA DO BOTAFOGO
                    </li>
                </ul>
            </div>
        </MdlPag>
        </>
    )
}