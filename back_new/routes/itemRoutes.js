import { Router } from "express";
import { getItems, getItemById, createItem, deleteItem } from "../controllers/itemController.js";
import { getChatResponse } from "../chatcontrollers/chatController.js";


const router = Router();

router.get("/allpacientes", getItems);
router.get("/:id", getItemById);
router.post("/", createItem);
router.delete("/:id", deleteItem);
router.post("/chat", getChatResponse)
export default router;
