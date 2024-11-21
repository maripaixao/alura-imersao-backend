import getTodosUsuarios from "../models/usuariosModel.js";

export async function listarUsuarios(req, res) {
  const usuarios = await getTodosUsuarios();
  res.status(200).json(usuarios);
}
