'use client'

import Image from "next/image";
import { useState } from "react";


export default function Entrada() {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')
  
  function calcularImc(){

    const p = parseFloat(peso)
    const a = parseFloat(altura)

    const imc = p/(a*a)

    if(isNaN(p) || isNaN(a)){
        setResultado("Digite algum valor para Peso e Altura")
    }else if(imc <= 18){
      setResultado("Abaixo do peso ideal!")    
    }else if (imc > 18 && imc < 25){
      setResultado("Você está no peso ideal!")   
    }else {
      setResultado("Acima do peso ideal!")   
    }

  }
  
  return (
    <div className="principal p-2">
      <h1>Cálculo IMC</h1>
      <br />
      
      <div className="campo-entrada">
        <p>Digite seu peso</p>
        <input
        value={peso}
        onChange={e=>setPeso(e.target.value)}
        placeholder="Ex: 90"
        className="campo-texto"
        type="text" /> KG
      </div>

      <br />
      
      <div className="campo-entrada">
        <p>Digite sua altura</p>
        <input
        value={altura}
        onChange={e=>setAltura(e.target.value)}
        placeholder="Ex: 1.75"
        className="campo-texto"
        type="number" /> Metros
      </div>
      <br />

      <button
      className="botao"
      onClick={calcularImc}>Calcular</button>

      <br />

      <span>Resultado: {resultado} </span>

    </div>
  );
}