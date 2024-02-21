import Ticket from "../Model/model_ticket.js";

async function creation (req, res)  {
    try {
        let ticket = await Ticket.create(req.body);
        res.status(200).json(ticket);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function afficher(req, res) {
    try {
        let tickets = await Ticket.find() 
        res.status(200).json(tickets);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Erreur lors de la récupération des tickets' });
    }
}


async function afficherone (req, res) {
    try {
        let  id  = req.params.id;
        let ticket = await Ticket.findById(id);
        res.status(200).json(ticket);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function afficher_etat (req, res) {
    try {
        let  et  = req.params.etat;
        let ticket = await Ticket.find({etat : et});
        res.status(200).json(ticket);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function modifier (req, res) {
    try {
        
        let { id } = req.params;
        let {intitule, description, etat, deadline} = req.body;
        let ticket = await Ticket.findById(id);
        ticket.intitule = intitule || ticket.intitule
        ticket.description = description || ticket.description
        ticket.etat = etat || ticket.etat
        ticket.deadline = deadline || ticket.deadline
        ticket.remark = remark || ticket.remark
        ticket.attachment = attachment || ticket.attachment
        await ticket.save();
        res.status(200).json(ticket);
    } catch (err) {
        res.status(400).json(err);
    }
}


async function supprimer (req, res) {
    try {
        let  id  = req.params.id;
        console.log('id',id)
        let ticket = await Ticket.findByIdAndDelete(id);
        res.status(200).json(ticket);
    } catch (err) {
        res.status(400).json(err);
    }
}

export {creation, afficher, afficherone, supprimer, modifier, afficher_etat}