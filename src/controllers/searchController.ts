import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createMenuObject } from "../hooks/createMenuObject";
export const search = (req: Request, res:Response) => {
    let query = req.query.q as string;
    let list = Pet.getFromName(query);
    if(!query){
        res.redirect('/')
        return;
    }
    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
        query
    })
}