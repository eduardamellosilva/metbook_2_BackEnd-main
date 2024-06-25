> Para rodar o projeto utilize os seguintes comandos com suas respectivas ordens:

npm install
npm install class-validator
npm install class-transformer
npm install jsonwebtoken

npm run typeorm-default -- migration:run
npm run typeorm-seed -- migration:run
npm run typeorm-default -- migration:revert

npm run start:dev

- Para criar a base de dados:
npm run typeorm-default -- migration:run

- Para alimentar a base:
npm run typeorm-seed -- migration:run

- No arquivo data-source  *** IMPORTANTE ***
    > Verificar a porta do banco de dados.
    > Verificar o nome do bando de dados.
> Ao rodar os migration analisar se irá comitar 1 por vez ou será necessário add os arquivos nas pastas um por um para a criação não ter conflito.

- Diferencial Utilizado: ***Busca avançada em cada formulário. (Search)***
    > Método de busca: Pelo nome.
    > Modelo para utilizar no post (faça as alterações conforme necessário): http://localhost:3000/usuarios/search?q=Eduarda

- ***Foi implementado as seguintes Collections do Postman***
    > GET;
    > POST;
    > PUT;
    > DELETE.

**Modelo pronto para utilizar no Postman com suas respectivas tabelas caso necessário:**

***AUTORES***
{
    "nome": "J.K Rowling",
    "dataNascimento": "1970-08-20",
    "genero": "F",
    "nacionalidade": "Inglês",
    "linkInstagram": "https://www.instagram.com/rowling",
    "biografia": "Joanne Jo Rowling OBE • FRSL (AFI: [dʒoʊæn_roʊlɪŋ]; Yate, 31 de julho de 1965), mais conhecida como J. K. Rowling, é uma escritora, roteirista e produtora cinematográfica britânica, notória por escrever a série de livros Harry Potter. Os livros ganharam uma popularidade mundial, recebendo múltiplos prêmios e vendendo mais de 600 milhões de cópias,[1] o que a tornou a série literária mais vendida da história.["
}


***USUARIOS***

{
    "nome": "Anderson",
    "email": "anderson@hotmail.com",
    "dataNascimento": "1997-09-03",
    "genero": "M",
    "pais": "Rússia"
}

***LIVROS***

{
    "titulo": "A cinco passos de voce",
    "subtitulo": "",
    "numeroPaginas": 280,
    "isbn": "8525067423",
    "editora": "Alt",
    "anoLancamento": 2019,
    "logoUrl": "https://www.example.com/logo.png",
    "preco": 29,
    "autor": {
        "nome": "Cole Sprouse",
        "dataNascimento": "1990-01-01",
        "genero": "F",
        "nacionalidade": "Americano",
        "linkInstagram": "https://www.instagram.com/colesprouse",
        "biografia": "Cole Mitchell Sprouse (Arezzo, 4 de agosto de 1992)[2] é um ator, produtor, arqueólogo e fotógrafo americano. Ele é o irmão gêmeo de Dylan Sprouse e é conhecido por seu papel como Cody Martin na série Disney Channel, The Suite Life of Zack & Cody e seu derivado The Suite Life on Deck. Em 2017, Sprouse começou a protagonizar a série de televisão Riverdale interpretando o personagem Jughead Jones. Sua atuação na série rendeu-lhe indicação ao Prêmio Saturno de Melhor Performance de um Jovem Ator em uma Série Televisiva nas edições de 2018 e 2019 da premiação."
    }
}