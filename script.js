const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Você costuma pensar mais no que já aconteceu ou no que ainda está por vir?",
    alternativas: [
      { texto: "No passado. Ele me ensina muito.", afirmacao: "Você valoriza suas experiências e busca aprender com elas." },
      { texto: "No futuro. É onde estão meus sonhos.", afirmacao: "Você é movido por metas e visões do que deseja conquistar." }
    ]
  },
  {
    enunciado: "Diante de um erro, como você reage?",
    alternativas: [
      { texto: "Me julgo muito. Fico preso na culpa.", afirmacao: "Você tem um senso crítico forte e busca entender seus próprios limites." },
      { texto: "Aceito e sigo em frente tentando melhorar.", afirmacao: "Você entende que errar faz parte do processo de crescimento." }
    ]
  },
  {
    enunciado: "O que te traz mais conforto?",
    alternativas: [
      { texto: "Estar com quem me entende.", afirmacao: "Você valoriza conexões verdadeiras e relações com significado." },
      { texto: "Ter um tempo só para mim.", afirmacao: "Você reconhece a importância do silêncio e da introspecção." }
    ]
  },
  {
    enunciado: "Como você lida com mudanças?",
    alternativas: [
      { texto: "Elas me assustam, mas enfrento mesmo assim.", afirmacao: "Mesmo com receios, você tem coragem de seguir em frente." },
      { texto: "Vejo como novas oportunidades.", afirmacao: "Você enxerga mudanças como chances de se reinventar." }
    ]
  },
  {
    enunciado: "Como você se define em poucas palavras?",
    alternativas: [
      { texto: "Alguém em constante evolução.", afirmacao: "Você se permite crescer, mesmo que aos poucos." },
      { texto: "Uma pessoa que ainda está se descobrindo.", afirmacao: "Você entende que autoconhecimento é um caminho, não um ponto final." }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  perguntaAtual.alternativas.forEach(alternativa => {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.addEventListener("click", () => {
      historiaFinal += alternativa.afirmacao + " ";
      atual++;
      mostraPergunta();
    });
    caixaAlternativas.appendChild(botao);
  });
}

function mostraResultado() {
  caixaPerguntas.textContent = "Sua Jornada Pessoal:";
  caixaAlternativas.innerHTML = "";
  textoResultado.textContent = historiaFinal;
}

mostraPergunta();
