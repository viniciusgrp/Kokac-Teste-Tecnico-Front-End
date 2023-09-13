import { FooterStyle } from "./style"
import {AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail} from "react-icons/ai"

export const Footer = () => {
    return (
        <FooterStyle>
            <p>Feito por Vinicius Pacheco</p>
            <div className="redesSociais">
                <a href="https://linkedin.com/in/viniciusgrp" target="_blank"><AiFillLinkedin/></a>
                <a href="https://wa.me/5511984067896" target="_blank"><AiOutlineWhatsApp/></a>
                <a href="mailto:viniciusgrp@gmail.com" target="_blank"><AiOutlineMail/></a>
            </div>
        </FooterStyle>
    )
}