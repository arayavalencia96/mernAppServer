import { pool } from '../index.js';

// Acá se ha realizado el CRUD.

// Obtener TODAS las tareas.
export const getTasks = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM tasks ORDER BY createAt ASC");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Obtener UNA tarea.
export const getTask = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
        if (result.length === 0) {
            return res.status(404).json({ message: "Tarea no localizada" });
        }
        res.json(result[0]); /* result al ser un objeto, devuelve un objeto toolbar, para que
     devuelva un id en específico, se debe colocar que devuelva el primer item del arreglo, es [0] */
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Crear una tarea nueva.
export const createTasks = async (req, res) => {
    try {
        const { title, descrip } = req.body;
        const [result] = await pool.query("INSERT INTO tasks(title, descrip) VALUES(?,?)",
            [title, descrip]
        );
        res.json({
            id: result.insertId,
            title,
            descrip
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Actualizar una tarea.
export const updateTask = async (req, res) => {
    try {
        const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Eliminar una tarea.
export const deleteTasks = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
        // Consulta si no hay ninguna tarea afectada, devuelve un error
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Tarea no localizada" });
        }
        // Si borra una tarea, devuelve que a pasado pero no hay nada para mostrar
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};