import { api, viaCep } from "../../service/api";
import { CepStyle } from "./style";
import { useState } from "react";

export const Cep = () => {
  const [ceps, setCeps] = useState<string[]>(["0", "0", "0", "0", "0"]);
  const [cepInfos, setCepInfos] = useState<any[]>([]);

  const onSubmit = (e: any) => {
    e.preventDefault();
    setCepInfos([]);
    console.log("LIMPOU");
    console.log(ceps);
    ceps.forEach(async (cep) => {
      console.log(cep);
      try {
        const { data } = await viaCep.get(`ws/${cep}/json/`);
        const copy = [...cepInfos];
        await setCepInfos((state) => [...state, data]);
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <CepStyle>
      <div className="busca">
        <h1>Busca de CEP</h1>
        <p>Insira de 1 a 5 CEP's abaixo para buscar informações sobre</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <label>
            CEP
            <input
              onChange={(e) => {
                let cepsCopy = [...ceps];
                cepsCopy[0] = e.target.value;
                setCeps([...cepsCopy]);
              }}
              type="text"
              placeholder="Informe o CEP"
            />
          </label>
          <label>
            CEP
            <input
              onChange={(e) => {
                let cepsCopy = [...ceps];
                cepsCopy[1] = e.target.value;
                setCeps([...cepsCopy]);
              }}
              type="text"
              placeholder="Informe o CEP"
            />
          </label>
          <label>
            CEP
            <input
              onChange={(e) => {
                let cepsCopy = [...ceps];
                cepsCopy[2] = e.target.value;
                setCeps([...cepsCopy]);
              }}
              type="text"
              placeholder="Informe o CEP"
            />
          </label>
          <label>
            CEP
            <input
              onChange={(e) => {
                let cepsCopy = [...ceps];
                cepsCopy[3] = e.target.value;
                setCeps([...cepsCopy]);
              }}
              type="text"
              placeholder="Informe o CEP"
            />
          </label>
          <label>
            CEP
            <input
              onChange={(e) => {
                let cepsCopy = [...ceps];
                cepsCopy[4] = e.target.value;
                setCeps([...cepsCopy]);
              }}
              type="text"
              placeholder="Informe o CEP"
            />
          </label>
          <button>Buscar</button>
        </form>
      </div>
      <div className="listagem">
        {cepInfos.length ? (
          <ul>
            {cepInfos.map((cep) => {
              return (
                <li>
                  <div className="linha">
                    <p>CEP</p>
                    <p className="info">{cep.cep}</p>
                  </div>
                  <div className="linha">
                    <p>Logradouro</p>
                    <p className="info">{cep.logradouro}</p>
                  </div>
                  <div className="linha">
                    <p>Bairro</p>
                    <p className="info">{cep.bairro}</p>
                  </div>
                  <div className="linha">
                    <p>Cidade</p>
                    <p className="info">{cep.localidade}</p>
                  </div>
                  <div className="linha">
                    <p>Estado</p>
                    <p className="info">{cep.uf}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </CepStyle>
  );
};
