const router = require('express').Router();
const { where } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', (req, res) => {
  try {
    const categories = Category.findAll({
      include:[{model: Product,attributes:["id","product_name","price","stock"]}]
    }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

router.get('/:id', (req, res) => {
  try {
    const categories = Category.findOne({
      where:{id:req.params.id},
      include:[{model: Product,attributes:["id","product_name","price","stock"]}]
    }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

router.post('/', (req, res) => {
  try {
    const categories = Category.create({
      category_name: req.body.category_name
     }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

router.put('/:id', (req, res) => {
  try {
    const categories = Category.update(req.body,{
      where:{id:req.params.id},
    }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

router.delete('/:id', (req, res) => {
  try {
    const categories = Category.destroy({
      where:{id:req.params.id},
    }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

module.exports = router;
