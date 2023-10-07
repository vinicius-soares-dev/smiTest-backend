const data = [];
const date = new Date();
const { v4: uuidv4 } = require("uuid");


module.exports = {

     /**
     * Function to read data.
     * @param {object} req - HTTP request.
     * @param {object} res - HTTP response.
     */


    async  read(req, res) {
        res.json(data); 
        return;
    },

     /**
     * Function to create a new data item.
     * @param {object} req - HTTP request containing the description of the item to be created.
     * @param {object} res - HTTP response.
     */

    async create(req, res) {
        const {description} = await req.body;
        data.push({ description: description, date: date, id: uuidv4()});
        res.json(data);
        return;
    },


     /**
     * Function to update a data item based on its ID.
     * @param {object} req - HTTP request containing the ID of the item to be updated and the new description.
     * @param {object} res - HTTP response.
     */

    async update(req, res) {
        const { id } = await req.params;
        const newDescription = req.body;

        const indexToEdit = data.findIndex(obj => obj.id === id);

        if(indexToEdit !== -1) {
            data[indexToEdit] = { ...data[indexToEdit], ...newDescription};
            res.json({ message: "Editado com sucesso!"});
        } else {
            res.status(404).json({ message: "Erro ao editar."})
        }

        return data;
    },


    /**
     * Function to delete a data item based on its ID.
     * @param {object} req - HTTP request containing the ID of the item to be deleted.
     * @param {object} res - HTTP response.
     */

    async delete (req, res) {
        const { id } = await req.params;

        const deleted = data.findIndex(obj => obj.id === id);

        if(deleted !== -1) {
            data.splice(deleted, 1);
            res.json({ message: "Deletado com sucesso!"})
        } else {
            res.status(200).json({ message: "Erro ao deletar."})
        }
        
        return data;
    }
}
