import { getConection, mssql } from "../database/conectionSQLserver.js";
import { queries } from "../models/itemModel.js";

export const getItems = async (req, res) => {
    try {
        const pool = await getConection();
        const result = await pool.request().query(queries.getAllItems);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(`Error al obtener los datos: ${error.message}`);
    }
};

export const getItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await getConection();
        const result = await pool.request()
            .input("Id", mssql.Int, id)
            .query(queries.getItemById);
        res.json(result.recordset[0]);
    } catch (error) {
        res.status(500).send(`Error al obtener el registro: ${error.message}`);
    }
};

export const createItem = async (req, res) => {
    const { name, description } = req.body;
    try {
        const pool = await getConection();
        await pool.request()
            .input("Name", mssql.VarChar, name)
            .input("Description", mssql.VarChar, description)
            .query(queries.createItem);
        res.status(201).send("Registro creado exitosamente");
    } catch (error) {
        res.status(500).send(`Error al crear el registro: ${error.message}`);
    }
};

export const deleteItem = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await getConection();
        await pool.request()
            .input("Id", mssql.Int, id)
            .query(queries.deleteItem);
        res.status(200).send("Registro eliminado exitosamente");
    } catch (error) {
        res.status(500).send(`Error al eliminar el registro: ${error.message}`);
    }
};
