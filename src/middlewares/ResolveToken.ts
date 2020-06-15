import express from 'express';
import jwt from 'jsonwebtoken';

import { data } from '../util/GenerateToken'


export default function resolveToken(req: express.Request, res: express.Response, next: express.NextFunction) {
  const { authorization } = req.headers;

  if(!authorization) return res.status(201).json({ error: 'no authorization header!' });

  const [ bearer, token ] = authorization.split(' ');

  if (!(bearer && token) || bearer.toUpperCase() !== 'BEARER') return res.status(401).json({error: 'wrong token format'});

  try {    
    const payload = <data>jwt.verify(token, 'kkkovoovo');
    console.log('hey');
    
    res.locals.payload = payload;

  } catch (err) {
    
    return res.status(401).json({ error: 'invalid token' });

  }

  next();


}