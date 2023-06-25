import express, { Router } from "express";
import {
    createCard,
    getAllCards,
    getCard,
    updateCard,
    deleteCard,
} from "../controllers/cardController";
const router: Router = express.Router();

// Get all cards
router.get("/", getAllCards);

// Get sigle sard
router.get("/:id", getCard);

// Create new card
router.post("/", createCard);

// Update a card
router.patch("/:id", updateCard);

// Delete a card
router.delete("/:id", deleteCard);

export default router;
