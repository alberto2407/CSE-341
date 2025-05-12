const express = require('express');
const router = express.Router();
const { getAllContacts, createContact, updateContact, deleteContact } = require('./controler');

const baseroute = '/contacts';

router.get(baseroute, getAllContacts);
router.post(baseroute, createContact);
router.patch(baseroute + '/:id', updateContact);
router.delete(baseroute + '/:id', deleteContact);

module.exports = router;