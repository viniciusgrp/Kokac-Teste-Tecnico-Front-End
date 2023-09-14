import { useEffect, useState } from "react";
import { VeiculoStyle } from "./style";
import { useForm } from "react-hook-form";
import { api } from "../../service/api";
import { IVeiculo } from "../../interfaces";
import { AiFillCar } from "react-icons/ai";
import { TbMotorbike } from "react-icons/tb";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface IInputs {
  tipo: string;
  marca: string;
  modelo: string;
  anoFabricacao: number;
  quantidadePortas?: number;
  passageiros?: number;
}

export const Veiculos = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>()

  const [tipo, setTipo] = useState("");
  const [veiculos, setVeiculos] = useState<IVeiculo[]>([]);
  const getVeiculos = async () => {
    try {
      const { data } = await api.get("/veiculos");
      setVeiculos(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (body: IInputs) => {
    console.log(body)
    try {
      const { data } = await api.post("/veiculos", body);
      console.log(data);
      getVeiculos();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVeiculos();
  }, []);

  return (
    <VeiculoStyle>
      <div className="cadastro">
        <h1>Cadastro de veículos</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Tipo
            <select
              {...register("tipo")}
              onChange={(e) => setTipo(e.target.value)}
              required
              name="tipo"
              id="tipo"
            >
              <option disabled hidden selected value="">
                Selecione o tipo de veículo
              </option>
              <option value="carro">Carro</option>
              <option value="moto">Moto</option>
            </select>
          </label>
          <label>
            Marca
            {errors.marca && <p className="error">{errors.marca.message}</p>}
            <input
              {...register("marca")}
              required
              type="text"
              placeholder="Marca"
            />
          </label>
          <label>
            Modelo
            {errors.modelo && <p className="error">{errors.modelo.message}</p>}
            <input
              {...register("modelo")}
              required
              type="text"
              placeholder="Modelo"
            />
          </label>
          <label>
            Ano de fabricação
            {errors.anoFabricacao && (
              <p className="error">{errors.anoFabricacao.message}</p>
            )}
            <input
              {...register("anoFabricacao", {
                min: 1900,
                max: 2024,
              })}
              placeholder="Ano de fabricação"
            />
          </label>
          {tipo === "carro" ? (
            <label>
              Quantidade de portas
              <input
                {...register("quantidadePortas")}
                type="number"
                placeholder="Quantidade de portas"
              />
            </label>
          ) : (
            <label>
              Número de passageiros
              {errors.passageiros && (
                <p className="error">{errors.passageiros.message}</p>
              )}
              <input
                {...register("passageiros")}
                placeholder="Número de passageiros"
                type="number"
              />
            </label>
          )}
          <button type="submit">Cadastrar</button>
        </form>
      </div>
        {veiculos.length ? 
      <div className="listagem">
          <ul>
            {veiculos?.map((veiculo: IVeiculo) => {
              return (
                <li key={veiculo.uuid}>
                  <span>
                    {veiculo.tipo === "carro" ? <AiFillCar /> : <TbMotorbike />}
                  </span>
                  {veiculo?.marca && (
                    <div className="linha">
                      <p>Marca</p> <p>{veiculo.marca}</p>
                    </div>
                  )}
                  {veiculo?.modelo && (
                    <div className="linha">
                      <p>Modelo</p> <p>{veiculo.modelo}</p>
                    </div>
                  )}
                  {veiculo?.anoFabricacao && (
                    <div className="linha">
                      <p>Ano de fabricação</p> <p>{veiculo.anoFabricacao}</p>
                    </div>
                  )}
                  {veiculo.tipo === "carro" ? (
                    <div className="linha">
                      <p>Quantidade de portas</p>{" "}
                      <p>{veiculo.quantidadePortas}</p>
                    </div>
                  ) : (
                    <div className="linha">
                      <p>Quantidade de passageiros</p>{" "}
                      <p>{veiculo.passageiros}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
      </div>
         : (
          <></>
        )}
    </VeiculoStyle>
  );
};
