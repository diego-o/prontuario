import { Endereco } from './comum-model';

export class Paciente {
    carteiraSus: string;
    dataNascimento: Date;
    dataObito: Date;
    nome: string;
    rg: string;
    sexo: string;
    telefone: string;
    _id: string;
    cpf: string;
    endereco: EnderecoPaciente;
    pai: PaiMaePaciente;
    mae: PaiMaePaciente;

    constructor() {
        this.endereco = new EnderecoPaciente();
        this.pai = new PaiMaePaciente();
        this.mae = new PaiMaePaciente();
    }
}

export class EnderecoPaciente {
    atual: Endereco;
    nascimento: Endereco;
}

export class PaiMaePaciente {
    cpf: string;
    nome: string;
    telefone: string;
}