import express from 'express';
import cors from 'cors';
import { createPool } from "mysql2/promise";
import taskRoutes from './routes/tasks.routes.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); // Esta función permite procesar los datos que venga del cliente.

app.use(taskRoutes);

/* Connection pools nos ayudan a reducir el tiempo de conexión al servidor MYSQL al reutilizar una conexión
anterior la cual queda abierta. Tiene  una mejor latencia por que evita la sobrecarga que supone establecer
una nueva conexion cada vez. */
export const pool = createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    port: '3306',
    user: 'b95a8258a6f0c7',
    password: '92158fab',
    database: 'heroku_3e60948a19e2c48'
});

app.listen(port);
console.log(`Server running on port ${port}`);
