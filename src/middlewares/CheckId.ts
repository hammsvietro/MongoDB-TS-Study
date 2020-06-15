import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../database/models/UserModels';

export default async function checkId(req: express.Request, res: express.Response, next: express.NextFunction) {
  const { id } = req.params;
  

  if(String(id) !== String(res.locals.payload.id)) return res.status(401).json({error: 'token does not belong to this user'});

  await User.findOne({_id: id}).exec((err, user) => {
    if(err) return res.status(404).send({ error: 'user not found' });
  }) ;

  return next();

}