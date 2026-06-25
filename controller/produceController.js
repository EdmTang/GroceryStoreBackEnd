const Produce = require('../data/Produce');

const getAllProduce = async (req, res, next) => {
    const items = await Produce.find();
    if(!items) return res.Status(204).json({'message': 'Nohing Found'});
    res.json(items);
};

const addProduce = async (req, res) => {
    if(!req?.body?.name){
        return res.status(400).json({'message': 'Name of Item is Required'});
    }

    const duplicate = await Produce.findOne({ name: req.body.name.toLowerCase() }).exec();
    if (duplicate) {
        return res.status(409).json({ 'message': `${req.body.name} already exists` });
    }

    try {
        const result = await Produce.create({
            name: req.body.name.toLowerCase(),
            stock: req?.body?.stock? req.body.stock : 0,
            price: req?.body?.price? req.body.price : 0
        });

        res.status(201).json(result);
    } catch(err) {
        console.log(err);
        res.status(500).json({ 'message': 'Server error' });
    }
}
const updateProduce = async (req, res) => {
    if(!req?.body?.id) {
        return res.status(400).json({'message': 'ID Parameter required'})
    }
    const item = await Produce.findOne({_id: req.body.id}).exec();

    if (!item) {
        return res.status(204).json({ "message": `No Employee Matches ID ${req.body.id}` });
    }
    if (req.body?.name) item.name = req.body.name.toLowerCase();
    if (req.body?.stock) item.stock = req.body.stock;
    if (req.body?.price) item.price = req.body.price;
    const result = await item.save()
    res.json(result);

}

const deleteProduce = async (req, res) => {
    if(!req?.body?.name) {
        return res.status(400).json({'message': 'Name Parameter required'})
    }
    const item = await Produce.findOne({name: req.body.name.toLowerCase()}).exec();

    if (!item) {
        return res.status(204).json({ "message": `No Produce Matches name ${req.body.name}` });
    }
    const result = await item.deleteOne({name: req.body.name.toLowerCase()});
    res.json(result);

}

module.exports = {getAllProduce, addProduce, updateProduce, deleteProduce};