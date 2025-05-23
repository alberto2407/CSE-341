const ContactModel = require('../../models/contact.model');
const validator = require("email-validator");
const mongoose = require('mongoose');

const getAllContacts = async (req, res) => {
    const contacts = await ContactModel.find();
    res.json(contacts);
}

const createContact = async (req, res) => {
    const {name, lastname, email, color, birthdate} = req.body;
    if (!name || !lastname || !email || !color || !birthdate) {
        return res.status(400).json({message: 'All fields are required'});
    }

    if (!validator.validate(email)) {
        return res.status(400).json({message: 'Email not valid'});
    }

    const contactExistsAlready = await ContactModel.findOne({email});
    if (contactExistsAlready) {
        return res.status(400).json({message: 'Contact already exists'});
    }

    const contact = await ContactModel.create({name, lastname, email, color, birthdate: new Date(birthdate)});
    res.json(contact);
}

const updateContact = async (req, res) => {
    const {id} = req.params;
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
        return res.status(400).json({message: 'id not valid'});
    }
    const objectId = new mongoose.Types.ObjectId(id);
    const {name, lastname, email, color, birthdate} = req.body;

    const updateContact = {} 

    if (name) {
        updateContact.name = name;
    }
    if (lastname) {
        updateContact.lastname = lastname;
    }
    if (email) {
        if (validator.validate(email)) {
        updateContact.email = email;
        }
    }

    if (color) {
        updateContact.color = color;
    }
    if (birthdate) {
        updateContact.birthdate = birthdate;
    }

    const contactExistsAlready = await ContactModel.findOne({_id: objectId});
    if (!contactExistsAlready) {
        return res.status(400).json({message: 'Contact does not exist'});
    }

    const contact = await ContactModel.updateOne({_id: objectId}, updateContact);
    res.json(contact);
}

const deleteContact = async (req, res) => {
    const {id} = req.params;
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
        return res.status(400).json({message: 'id is not valid'});
    }
    const objectId = new mongoose.Types.ObjectId(id);
    const contactExistsAlready = await ContactModel.findOne({_id: objectId});
    if (!contactExistsAlready) {
        return res.status(400).json({message: 'Contact does not exist'});
    }

    const contact = await ContactModel.deleteOne({_id: objectId});
    res.json(contact);
}

const getContact = async (req, res) => {
    const {id} = req.params;
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    if (!isValidId) {
        return res.status(400).json({message: 'id is not valid'});
    }
    const objectId = new mongoose.Types.ObjectId(id);
    const contact = await ContactModel.findOne({ _id: objectId });
    res.json(contact);
}
module.exports = { 
    getAllContacts,
    createContact,
    updateContact,
    deleteContact,
    getContact
};