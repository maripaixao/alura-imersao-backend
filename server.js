import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 2,
    descricao: "Um gato fofo dormindo",
    imagem: "https://placecats.com/millie/300/150",
  },
  {
    id: 3,
    descricao: "Um gato fazendo panqueca",
    imagem: "https://placecats.com/millie/300/150",
  },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

// Retorna todos os registros
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

// Função que faz a busca do ID específico que será passado na URL
function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

// Retorna um registro por seu ID
app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});

function buscarPostPorPalavraChave(keyword) {
  return posts.filter((post) => {
    return post.descricao.includes(keyword);
  });
}

// Retorna um ou mais registros com uma palavra-chave
app.get("/posts/search/:keyword", (req, res) => {
  const keyword = req.params.keyword;
  const resultados = buscarPostPorPalavraChave(keyword);

  if (resultados.length > 0) {
    res.status(200).json(resultados);
  } else {
    res
      .status(404)
      .json({ message: "Nenhum post encontrado com essa palavra chave" });
  }
});
