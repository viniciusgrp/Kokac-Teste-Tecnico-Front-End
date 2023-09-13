import { useState } from "react";
import { api } from "../../service/api";
import { PalindromoStyle } from "./style";
import { BsSearch } from "react-icons/bs";

export const Palindromo = () => {
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [palindromos, setPalindromos] = useState<number[]>([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/palindromo", {
        start,
        end,
      });
      setPalindromos(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PalindromoStyle>
      <div className="intro">
        <h2>Números palindromos em determinado intervalo</h2>
        <p>
          Números palíndromos são aqueles que escritos da direita para esquerda
          ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44,
          97379.
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e: any) => setStart(e.target.value)}
            type="number"
            placeholder="Início"
            name="inicio"
            id="inicio"
            min={0}
          />
          <input
            onChange={(e: any) => setEnd(e.target.value)}
            type="number"
            placeholder="Fim"
            name="fim"
            id="fim"
          />
          <button>
            <BsSearch />
          </button>
        </form>
      </div>
      {palindromos.length ? (
        <ul>
          {palindromos.map((elem) => (
            <li>{elem}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </PalindromoStyle>
  );
};
