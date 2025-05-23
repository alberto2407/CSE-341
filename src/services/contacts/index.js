const express = require('express');
const router = express.Router();
const { getAllContacts, createContact, updateContact, deleteContact, getContact } = require('./controler');

const baseroute = '/contacts';
/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   lastname:
 *                     type: string
 *                   email:
 *                     type: string
 *                   color:
 *                     type: string
 *                   birthdate:
 *                     type: string
 */


router.get(baseroute, getAllContacts);
/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               lastname:
 *                 type: string
 *               email:
 *                 type: string
 *               color:
 *                 type: string
 *               birthdate:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   lastname:
 *                     type: string
 *                   email:
 *                     type: string
 *                   color:
 *                     type: string
 *                   birthdate:
 *                     type: string
 */
router.post(baseroute, createContact);
/**
 * @swagger
 * /api/contacts/{id}:
 *   patch:
 *     summary: Update a contact
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact to update
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   acknowledged:
 *                     type: boolean
 *                   modifiedCount: 
 *                     type: number
 *                   upsertedId:
 *                     type: string 
 *                   upsertedCount:
 *                     type: number
 *                   matchedCount:  
 *                     type: number
 */
router.patch(baseroute + '/:id', updateContact);
/**
 * @swagger
 * /api/contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   acknowledged:
 *                     type: boolean 
 *                   deletedCount:
 *                     type: number
 *  
 */
router.delete(baseroute + '/:id', deleteContact);
/**
 * @swagger
 * /api/contacts/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A list of contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   lastname:
 *                     type: string
 *                   email:
 *                     type: string
 *                   color:
 *                     type: string
 *                   birthdate:
 *                     type: string
 */
router.get(baseroute + '/:id', getContact);
module.exports = router;

