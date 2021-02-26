let index = 1;
function incrementa() {
    return ++index;
}

let duration = 1070
function durationAOS() {
    duration = duration + 20
    return duration;
}
export const servicos = [
    {
        Id: index,
        Nome: 'Geração de conteúdo digital',
        DurationAOS: duration,
        Imagem: '',
    },
    {
        Id: incrementa(),
        Nome: 'Postagens programadas em redes sociais',
        DurationAOS: durationAOS(),
        Imagem: '',
    },
    {
        Id: incrementa(),
        Nome: 'Treinamento da sua equipe de vendas para otimização dos processos comerciais e recursos investidos',
        DurationAOS: durationAOS(),
        Imagem: '',
    },
    {
        Id: incrementa(),
        Nome: 'Acompanhamento de performance das propagandas',
        DurationAOS: durationAOS(),
        Imagem: '',
    },
    {
        Id: incrementa(),
        Nome: 'Acompanhamento da sua equipe, oferecendo suporte no processo de vendas para melhoria contínua',
        DurationAOS: durationAOS(),
        Imagem: '',
    },
    {
        Id: incrementa(),
        Nome: 'Sistema integrado de CRM para gestão otimizada de todo seu pipeline de vendas',
        DurationAOS: durationAOS(),
        Imagem: '',
    },
];