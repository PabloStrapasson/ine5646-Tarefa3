var article1 = {
    title: 'Os 8 Odiados',
    genre: 'Faroeste',
    sinopse: `Durante uma nevasca, o carrasco John Ruth (Kurt Russell) está transportando uma prisioneira, a famosa Daisy Domergue (Jennifer Jason Leigh), que ele espera trocar por grande quantia de dinheiro. No caminho, os viajantes aceitam transportar o caçador de recompensas Marquis Warren (Samuel L. Jackson), que está de olho em outro tesouro, e o xerife Chris Mannix (Walton Goggins), prestes a ser empossado em sua cidade. Como as condições climáticas pioram, eles buscam abrigo no Armazém da Minnie, onde quatro outros desconhecidos estão abrigados. Aos poucos, os oito viajantes no local começam a descobrir os segredos sangrentos uns dos outros, levando a um inevitável confronto entre eles.
    `,
    image: './images/filmes/8Odiados.jpg'
};
var article2 = {
    title: 'Bastardos Inglórios',
    genre: 'Ação',
    sinopse: `2ª Guerra Mundial. A França está ocupada pelos nazistas. O tenente Aldo Raine (Brad Pitt) é o encarregado de reunir um pelotão de soldados de origem judaica, com o objetivo de realizar uma missão suicida contra os alemães. O objetivo é matar o maior número possível de nazistas, da forma mais cruel possível. Paralelamente Shosanna Dreyfuss (Mélanie Laurent) assiste a execução de sua família pelas mãos do coronel Hans Landa (Christoph Waltz), o que faz com que fuja para Paris. Lá ela se disfarça como operadora e dona de um cinema local, enquanto planeja um meio de se vingar.
    `,
    image: './images/filmes/BastardosInglorios.jpg'
};
var article3 = {
    title: 'Férias Frustradas',
    genre: 'Comédia',
    sinopse: `Rusty Griswold (Ed Helms) trabalha como piloto de avião na EconoAir, uma companhia de baixo custo. Ele é casado com Debbie (Christina Applegate) e tem dois filhos, James (Skyler Gisondo) e Kevin (Steele Stebbins), que vivem brigando. Disposto a se divertir com a família, Rusty decide seguir os passos de seu pai (Chevy Chase) e comandar uma ida ao parque de diversões Wally World, localizado a dias de viagem. Rusty logo aluga um carro albanês, sem imaginar que a viagem em família será bem mais complicada do que imaginava.
    `,
    image: './images/filmes/FeriasFrustradas.jpg'
};
var article4 = {
    title: 'O Poderoso Chefão',
    genre: 'Drama',
    sinopse: `Don Vito Corleone (Marlon Brando) é o chefe de uma "família" de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo "justiça", vingança na verdade contra membros de uma quadrilha, que espancaram barbaramente sua filha por ela ter se recusado a fazer sexo para preservar a honra. Vito discute, mas os argumentos de Bonasera o sensibilizam e ele promete que os homens, que maltrataram a filha de Bonasera não serão mortos, pois ela também não foi, mas serão severamente castigados. Vito porém deixa claro que ele pode chamar Bonasera algum dia para devolver o "favor". Do lado de fora, no meio da festa, está o terceiro filho de Vito, Michael (Al Pacino), um capitão da marinha muito decorado que há pouco voltou da 2ª Guerra Mundial. Universitário educado, sensível e perceptivo, ele quase não é notado pela maioria dos presentes, com exceção de uma namorada da faculdade, Kay Adams (Diane Keaton), que não tem descendência italiana mas que ele ama. Em contrapartida há alguém que é bem notado, Johnny Fontane (Al Martino), um cantor de baladas românticas que provoca gritos entre as jovens que beiram a histeria. Don Corleone já o tinha ajudado, quando Johnny ainda estava em começo de carreira e estava preso por um contrato com o líder de uma grande banda, mas a carreira de Johnny deslanchou e ele queria fazer uma carreira solo. Por ser seu padrinho Vito foi procurar o líder da banda e ofereceu 10 mil dólares para deixar Johnny sair, mas teve o pedido recusado. Assim, no dia seguinte Vito voltou acompanhado por Luca Brasi (Lenny Montana), um capanga, e após uma hora ele assinou a liberação por apenas mil dólares, mas havia um detalhe: nas "negociações" Luca colocou uma arma na cabeça do líder da banda. Agora, no meio da alegria da festa, Johnny quer falar algo sério com Vito, pois precisa conseguir o principal papel em um filme para levantar sua carreira, mas o chefe do estúdio, Jack Woltz (John Marley), nem pensa em contratá-lo. Nervoso, Johnny começa a chorar e Vito, irritado, o esbofeteia, mas promete que ele conseguirá o almejado papel. Enquanto a festa continua acontecendo, Don Corleone comunica a Tom Hagen (Robert Duvall), seu filho adotivo que atua como conselheiro, que Carlo terá um emprego mas nada muito importante, e que os "negócios" não devem ser discutidos na sua frente. Os verdadeiros problemas começam para Vito quando Sollozzo (Al Lettieri), um gângster que tem apoio de uma família rival, encabeçada por Phillip Tattaglia (Victor Rendina) e seu filho Bruno (Tony Giorgio). Sollozzo, em uma reunião com Vito, Sonny e outros, conta para a família que ele pretende estabelecer um grande esquema de vendas de narcóticos em Nova York, mas exige permissão e proteção política de Vito para agir. Don Corleone odeia esta idéia, pois está satisfeito em operar com jogo, mulheres e proteção, mas isto será apenas a ponta do iceberg de uma mortal luta entre as "famílias".
    `,
    image: './images/filmes/OPoderosoChefao.jpg'
};
var article5 = {
    title: 'V de Vingança',
    genre: 'Ação',
    sinopse: `Em uma Inglaterra do futuro, onde está em vigor um regime totalitário, vive Evey Hammond (Natalie Portman). Ela é salva de uma situação de vida ou morte por um homem mascarado, conhecido apenas pelo codinome V (Hugo Weaving), que é extremamente carismático e habilidoso na arte do combate e da destruição. Ao convocar seus compatriotas a se rebelar contra a tirania e a opressão do governo inglês, V provoca uma verdadeira revolução. Enquanto Evey tenta saber mais sobre o passado de V, ela termina por descobrir quem é e seu papel no plano de seu salvador para trazer liberdade e justiça ao país.
    `,
    image: './images/filmes/VdeVinganca.jpg'
};

const posts = document.getElementById("posts");
var articles = [article1, article2, article3, article4, article5];

for(let i = 0; i < articles.length; i++){
    let post = new Article(posts);
    post.createPost(articles[i].title, articles[i].genre, articles[i].sinopse, articles[i].image);
}