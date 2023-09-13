import 'react-toastify/dist/ReactToastify.css';
import CemReais from "../../assets/CemReais.jpg";
import DezReais from "../../assets/dezReais.png";
import UmReal from "../../assets/umReal.jpeg";
import { ToastContainer, toast } from "react-toastify";

import { useState } from "react";
import { CaixaStyle } from "./style";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import { api } from "../../service/api";

interface ITroco {
  troco: number;
  notas: INotas;
}

interface INotas {
  nota1?: number;
  nota2?: number;
  nota5?: number;
  nota10?: number;
  nota20?: number;
  nota50?: number;
  nota100?: number;
  nota200?: number;
}

export const Caixa = () => {
  const [valorPago, setValorPago] = useState<number>(0);
  const [totalCompra, setTotalCompra] = useState<number>(0);
  const [troco, setTroco] = useState<ITroco | null>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (+valorPago < +totalCompra) {
        toast.error("O valor pago é menor que o valor da compra")
        return
    }
    try {
      const { data } = await api.post("/caixa", {
        valorPago,
        totalCompra,
      });
      setTroco(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CaixaStyle>
      <div className="caixa">
        <h1>Caixa</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            Valor da compra
            <input
              type="number"
              name="valorCompra"
              id="valorCompra"
              placeholder="Valor da compra"
              onChange={(e: any) => setTotalCompra(e.target.value)}
            />
          </label>
          <label>
            Valor pago
            <input
              type="number"
              name="valorPago"
              id="valorPago"
              onChange={(e: any) => setValorPago(e.target.value)}
              placeholder="Valor pago"
            />
          </label>
          <button>
            <LiaMoneyBillWaveSolid />
          </button>
        </form>
      </div>
      {troco && (
        <div className="troco">
          <h2>Troco</h2>
          <span>
            {troco?.troco?.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <div className="notas">
            <ul>
              {troco.notas.nota100 && (
                <li>
                  <img src={CemReais} alt="nota de 100 reais" />
                  <p>{troco.notas.nota100} un</p>
                </li>
              )}
              {troco.notas.nota10 && (
                <li>
                  <img src={DezReais} alt="nota de 10 reais" />
                  <p>{troco.notas.nota10} un</p>
                </li>
              )}
              {troco.notas.nota1 && (
                <li>
                  <img src={UmReal} alt="moeda de 1 real" />
                  <p>{troco.notas.nota1} un</p>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
      <ToastContainer/>
    </CaixaStyle>
  );
};
