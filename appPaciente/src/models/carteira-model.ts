
export class Carteira {
    numero: string;
    paciente: PacienteCarteira;
    vacinas: Array<Vacina>;

    constructor() {
        this.paciente = new PacienteCarteira();
        this.vacinas = new Array<Vacina>();
    }
}

export class PacienteCarteira {
    idPaciente: string;
    nome: string;
    carteirasus: string;
    cpf: string;
}

export class Vacina {
    aplicacao: Aplicacao;
    organizacao: organizacaoVacina;
    vacina: VacinaAplicacao;

    constructor() {
        this.aplicacao = new Aplicacao();
        this.organizacao = new organizacaoVacina();
        this.vacina = new VacinaAplicacao();
    }
}

export class Aplicacao {
    aplicada: string;
    dataAplicacao: Date;
    dataPrevista: Date;
}

export class organizacaoVacina {
    cnpj: string;
    idOrganizacao: string;
    nome: string;
}

export class VacinaAplicacao {
    codigo: number;
    nome: string;
    descricao: string;
}