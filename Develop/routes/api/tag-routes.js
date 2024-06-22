const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
router.get('/', (req, res) => {
  try {
    const tag = Tag.findAll({
      include:[{model: Product,attributes:["id","product_name","price","stock"],through:ProductTag,as:"tag_products"}]
    }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

router.get('/:id', (req, res) => {
  try {
    const tag = Tag.findOne({
      where:{id:req.params.id},
      include:[{model: Product,attributes:["id","product_name","price","stock"],through:ProductTag,as:"tag_products"}]
    }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

router.post('/', (req, res) => {
  try {
    const tag = Tag.create({
      category_name: req.body.tag_name
     }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

router.put('/:id', (req, res) => {
  try {
    const tag = Tag.update(req.body,{
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
    const tag = Tag.destroy({
      where:{id:req.params.id},
    }).then((data) => {
      res.json(data)
    })
  } catch (error) {
    res.status(500)
  }
});

module.exports = router;
