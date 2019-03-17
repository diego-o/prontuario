export class Atendimento {
    dataPrevista: Date;
    dataAtendimento: Date;
    descricao: string;
    numero: string;
    organizacao: Organizacao;
    tipo: TipoAtendimento;
    status: StatusAtendimento;
    paciente: PacienteAtendimento;
    medico: Medico;

    constructor () {
        this.organizacao = new Organizacao();
        this.tipo = new TipoAtendimento();
        this.status = new StatusAtendimento();
        this.paciente = new PacienteAtendimento();
        this.medico = new Medico();
    }
}

export class Organizacao {
    nome: string;
    cnpj: string;
}

export class TipoAtendimento {
    tipo: string;
    descricao: string;
}

export class StatusAtendimento {
    status: string;
    descricao: string;
}

export class PacienteAtendimento {
    nome: string;
    carteiraSus: string;
    cpf: string;
}

export class Medico {
    crm: string;
    nome: string;
}
