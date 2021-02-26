let index = 1;
function incrementa() {
    return ++index;
}

let duration = 1100
function durationAOS() {
    duration = duration + 50;
    return duration;
}

let animation = true;
let animationSide = 'fade-left'
function animationAOS(animation) {
    if (animation) {
        animationSide = 'fade-left';
    } else {
        animationSide = 'fade-right';

    }
    return animationSide;
}
export const Clientes = [
    {
        Id: index,
        Nome: 'Supera',
        Logo: 'supera.png',
        Descricao: 'O SUPERA é a primeira empresa brasileira dedicada exclusivamente ao desenvolvimento das capacidades do cérebro e à saúde mental. ',
        DurationAOS: duration,
        AnimationAOS: animationSide,
    }, {
        Id: incrementa(),
        Nome: 'CNA',
        Logo: 'cna.png',
        Descricao: 'O CNA (Cultural Norte Americano) é uma rede de escolas de idiomas privada brasileira, com foco no ensino de inglês e espanhol, fundada por Luiz Nogueira da Gama Neto.',
        DurationAOS: durationAOS(),
        AnimationAOS: animationAOS(!animation),
    }, {
        Id: incrementa(),
        Nome: 'Happy Code',
        Logo: 'happycode.png',
        Descricao: 'A Happy Code é uma escola de programação, desenvolvimento de games, aplicativos para crianças de 6 à 17 anos, com o objetivo desenvolver habilidades do século 21 de forma inovadora, lúdica e divertida.',
        DurationAOS: durationAOS(),
        AnimationAOS: animationAOS(animation),
    }, {
        Id: incrementa(),
        Nome: 'Kumon',
        Logo: 'kumon.png',
        Descricao: 'Kumon é um método que visa desenvolver o autodidatismo nos alunos de forma individualizada por intermédio das disciplinas de matemática e língua pátria. A palavra designa além do nome do fundador o método de estudo que comercializa.',
        DurationAOS: durationAOS(),
        AnimationAOS: animationAOS(!animation),
    },
    {
        Id: incrementa(),
        Nome: 'Lean COmpany',
        Logo: 'leancompany.png',
        Descricao: ' A LEAN COMPANY busca a excelência nos serviços prestados utilizando conceitos e ferramentas Lean. O foco é sempre o aumento da produtividade, a redução de custos e, claro, a melhoria contínua. ',
        DurationAOS: durationAOS(),
        AnimationAOS: animationAOS(!animation),
    },
];