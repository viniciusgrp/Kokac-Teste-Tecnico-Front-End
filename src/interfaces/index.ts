export interface IVeiculo {
    uuid: string;
    tipo: string;
    modelo: string;
    marca: string;
    anoFabricacao: number;
    quantidadePortas?: number;
    passageiros?: number;
}