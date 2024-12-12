const database = 'bd3-atv4';

const collection = 'bd3_atv4_mensagens';

use(database)

db[collection].insertMany(
    [      
        {
            "data_hora": "2024-12-12T09:30:00Z",
            "mensagem": "Ei, você já pensou sobre como seria se um dragão realmente aparecesse na nossa frente? Como você acha que seu personagem reagiria?"
        },
        {
            "data_hora": "2024-12-12T09:32:00Z",
            "mensagem": "Eu acho que a verdadeira magia em *Dungeons & Dragons* não está nas batalhas, mas nas histórias que criamos juntos. Cada decisão no jogo pode mudar tudo, sabe? Como você lida com esses momentos decisivos?"
        },
        {
            "data_hora": "2024-12-12T09:34:00Z",
            "mensagem": "E quando as coisas começam a ficar complicadas, com monstros aparecendo de todos os lados e o plano da missão não funcionando, como você acha que seu grupo deve reagir? Vai entrar em modo de ataque ou tentar negociar?"
        },
        {
            "data_hora": "2024-12-12T09:36:00Z",
            "mensagem": "Eu acredito que a dúvida no jogo é o que torna tudo mais interessante. Você nunca sabe o que pode acontecer a seguir, e isso é o que mantém a adrenalina. O que você acha: deve confiar no mestre ou fazer uma jogada ousada e arriscada?"
        },
        {
            "data_hora": "2024-12-12T09:38:00Z",
            "mensagem": "Eu sei que as batalhas podem ser difíceis, mas é nos momentos de crise que a verdadeira força dos personagens se revela. Qual foi o momento mais desafiador do seu personagem até agora?"
        },
        {
            "data_hora": "2024-12-12T09:40:00Z",
            "mensagem": "Às vezes o jogo nos coloca em situações bem tensas, mas são nesses momentos que a gente encontra a verdadeira amizade e confiança no grupo. Lembra daquela vez que vocês conseguiram vencer aquele chefe difícil juntos?"
        },
        {
            "data_hora": "2024-12-12T09:42:00Z",
            "mensagem": "Você já reparou como *Dungeons & Dragons* é cheio de contradições? Nosso grupo de heróis tentando salvar o mundo, mas sempre com alguns defeitos. Como você acha que isso afeta a jornada deles?"
        },
        {
            "data_hora": "2024-12-12T09:44:00Z",
            "mensagem": "Sim, é claro! Todos têm suas falhas e defeitos, mas é isso que torna as histórias tão humanas e interessantes. As falhas criam oportunidades para crescimento. Acho que o importante é sempre tentar melhorar, não importa o quão difícil seja a situação."
        },
        {
            "data_hora": "2024-12-12T09:46:00Z",
            "mensagem": "No fim das contas, o que você acha que faz um aventureiro viver plenamente? É mais sobre conquistar tesouros ou sobre as lições que aprendem pelo caminho?"
        },
        {
            "data_hora": "2024-12-12T09:48:00Z",
            "mensagem": "Eu diria que é encontrar o equilíbrio entre os dois. Claro, o tesouro é legal, mas o mais importante são as experiências vividas, as amizades formadas e as histórias que podemos contar depois. O que faz sua aventura valer a pena?"
        }
    ]
)