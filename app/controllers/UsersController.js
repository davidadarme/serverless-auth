import Users from '../models/UsersModel.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        
    }