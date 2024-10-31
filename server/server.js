import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(bodyParser.json());

const TELEGRAM_API_URL=` `

app.post 