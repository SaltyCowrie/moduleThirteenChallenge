const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    const categories = Category.findAll({
      include:[{model: Product}]
    })
    res.status(200).json(categories)
  } catch (error) {
    res.status(500)
  }
});

router.get('/:id', (req, res) => {
  try {
    const categories = Category.findByPk(req.params.id,{
      include:[{model: Product}]
    })
    res.status(200).json(categories)
  } catch (error) {
    res.status(500)
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
