export class Atendimento {
    dataPrevista: Date;
    dataAtendimento: Date;
    descricao: string;
    numero: string;
    organizacao: Organizacao;
    tipo: TipoAtendimento;
    status: StatusAtendimento;

    constructor () {
        this.organizacao = new Organizacao();
        this.tipo = new TipoAtendimento();
        this.status = new StatusAtendimento();
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
