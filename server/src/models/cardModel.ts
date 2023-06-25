import mongoose from "mongoose";

interface CardInterface {
    type: string;
    name: string;
    attunement: string;
    cost: string[];
    race: string;
    sacrifice: number;
    imageURL: string;
    oath: string[];
    requirement: string;
    ability: string[];
    POW: number;
    DUR: number;
}

const CardSchema = new mongoose.Schema<CardInterface>(
    {
        type: { type: String, required: true },
        name: { type: String, required: true, unique: true },
        attunement: { type: String, required: true },
        cost: [{ type: String }],
        race: { type: String },
        sacrifice: { type: Number },
        imageURL: { type: String, required: true },
        oath: [{ type: String }],
        requirement: { type: String },
        ability: [{ type: String }],
        POW: { type: Number },
        DUR: { type: Number },
    },
    { timestamps: true }
);

const Card = mongoose.model("Card", CardSchema);
export default Card;
