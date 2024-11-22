import express from "express";
import multer from "multer";
import {
  enviarPosts,
  listarPosts,
  uploadImagem,
} from "../controllers/postsController.js";
import { listarUsuarios } from "../controllers/usuariosController.js";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  app.use(express.json());

  app.get("/posts", listarPosts);
  app.post("/posts", enviarPosts);
  app.post("/upload", upload.single("imagem"), uploadImagem);

  app.get("/usuarios", listarUsuarios);
};

export default routes;
