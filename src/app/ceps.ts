export interface Ceps {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const ceps = [
  {
    id: 1,
    cep: '90010282',
    logradouro: 'Rua Duque de Caxias',
    complemento: '',
    bairro: 'CEntro',
    localidade: 'Porto Alegre',
    uf: 'RS',
  },
  {
    id: 2,
    cep: '91150000',
    logradouro: 'Rua João Alfredo',
    complemento: '',
    bairro: 'Cidade Baixa',
    localidade: 'Porto Alegre',
    uf: 'RS',
  },
  {
    id: 3,
    cep: '94500300',
    logradouro: 'Euclides da Cunha',
    complemento: '',
    bairro: 'Santa Isabel',
    localidade: 'Viamão',
    uf: 'RS',
  },
];
