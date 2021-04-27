const router = require('express').Router();
const Sneaker = require('../../models/Sneaker');

router.get('/', (req, res) => {
    res.send('hello')
})

// GET all sneakers
router.get('/', async (req, res) => {
    try {
        const sneakerData = await Sneaker.findAll();
        res.status(200).json(sneakerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE new sneaker
router.post('/', async (req, res) => {
    try {
        const sneakerData = await Sneaker.create({
            brand: req.body.brand,
            model: req.body.model,
            retailPrice: req.body.retailPrice,
            EstResalePrice: req.body.EstResalePrice,
            rare: req.body.rare
        });
        res.status(200).json(sneakerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// // GET one sneaker
// router.get('/:id', async (req, res) => {
//     try {
//         const sneakerData = await Sneaker.findByPk(req.params.id);
//         if(!sneakerData) {
//             res.status(404).json({ message: 'No sneaker with this id'});
//             return;
//         }
//         res.status(200).json(sneakerData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;