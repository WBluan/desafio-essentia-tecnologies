import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserRepository } from '../repository/user.repository';

export const authRoutes = Router();

authRoutes.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    await UserRepository.create({ email, password });
    res.json({ message: 'Usuário registrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ message: 'Erro ao registrar usuário', error: (error as Error).message });
  }
});

authRoutes.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await UserRepository.findByEmail(email);
  if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) return res.status(401).json({ message: 'Senha incorreta' });

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });

  res.json({ token });
});
