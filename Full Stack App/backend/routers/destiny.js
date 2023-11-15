const express = require('express');
const router = express.Router();
const Destiny = require('../models/Destiny.js');

router.get("/", async (req, res) => {
    
    const random = await Destiny.aggregate(
        [{$sample:{size:1} }]
    );
    res.send(random);

});


router.post('/',  async (req,res) => {
    console.log(req.body.subject);
    console.log(req.body.content)
    const newDestiny = new Destiny({
        subject: req.body.subject,
        content: req.body.content,
    });
    console.log(newDestiny);
    await newDestiny.save();
    res.send(newDestiny);
});

router.delete(':id', async (req,res) => {
    const { id } = req.params;
    const DesDel = await Destiny.findByIdAndDelete(id);
    res.send("the Destiny has been deleted");
});



module.exports = router;