import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para pegar todos os elementos
export async function getTodosPosts() {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");

  return colecao.find().toArray();
}

// Função para inserir um novo elemento
export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");

  return colecao.insertOne(novoPost);
}
