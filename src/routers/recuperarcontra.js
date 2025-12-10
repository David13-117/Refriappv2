import { Router } from "express";
const router = Router();

router.get("/recuperarcontra", (req, res) => {
    res.render("recuperarcontra", { title: "Recuperar Contraseña" });
});

export default router;
