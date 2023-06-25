import { Request, Response } from "express";
import Card from "../models/cardModel";

const getAllCards = async (req: Request, res: Response) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const getCard = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const card = await Card.findById(id);
        if (!card) {
            res.status(404).json({ error: "Card does not existed" });
        }
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const createCard = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const card = await Card.create(req.body);
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const updateCard = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const card = await Card.findByIdAndUpdate(id, req.body);
        res.status(200).json(card);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

const deleteCard = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Card.findByIdAndDelete(id);
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export { getAllCards, getCard, createCard, updateCard, deleteCard };
