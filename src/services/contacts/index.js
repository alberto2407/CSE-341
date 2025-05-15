const express = require('express');
const router = express.Router();
const { getAllContacts, createContact, updateContact, deleteContact } = require('./controler');

const baseroute = '/contacts';
/**
 * @swagger
 * /contacts:
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
 * /contacts:
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
 */
router.post(baseroute, createContact);
/**
 * @swagger
 * /contacts/{id}:
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
 */
router.patch(baseroute + '/:id', updateContact);
/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact to delete
 *         schema:
 *           type: string
 */
router.delete(baseroute + '/:id', deleteContact);
/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a contact by ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the contact to retrieve
 *         schema:
 *           type: string
 */

module.exports = router;