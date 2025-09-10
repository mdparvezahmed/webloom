const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchema.js');

const router = express.Router();

const Todo = new mongoose.model("Todo", todoSchema);


//Get all the todos
router.get('/', async (req, res) => {
    try {
        data = await Todo.find({
            status: 'active'
        }).select({
            _id: 0,
            __v: 0,
            date: 0,
        }).limit(4);

        res.status(200).json({
            message: "all data",
            result: data,
        })

    } catch (err) {
        res.status(500).json({
            error: err,
            message: "s.wrong",
        })
    }
});

//get a todo by id
router.get('/:id', async (req, res) => {
    try {
        data = await Todo.find({
            _id: req.params.id
        });

        res.status(200).json({
            message: "all data",
            result: data,
        })

    } catch (err) {
        res.status(500).json({
            error: err,
            message: "s.wrong",
        })
    }
});

//post todo
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save()
        .then(result => res.status(200).json(result))
        .catch(err => res.status(500).json({
            error: "internal server error", details: err.message
        }))

});

//post multiple todo
router.post('/all', async (req, res) => {
    try {
        result = await Todo.insertMany(req.body);
        res.status(200).json({
            message: "Successfully added",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            error: "internal server error",
            details: err.message,
        })
    }
});

//put todo - update
router.put('/:id', async (req, res) => {
    try {
        //  newvalue = await Todo.updateOne({_id: req.params.id}, {
        //     $set:{
        //         status: "active",

        //     }
        // });
        newvalue = await Todo.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: "active",
                description: "hijibiji-hijibiji"

            }
        }, { new: true });
        res.status(200).json({
            message: "succesfully updated",
            data: newvalue,
        });
    } catch (err) {
        res.status(500).json({
            message: "something wrong",
            error: err,
        })
    }
});

//delete todo
router.delete('/:id', async (req, res) => {

     try {
        data = await Todo.deleteOne({
            _id: req.params.id
        });

        res.status(200).json({
            message: "success",
            result: data,
        })

    } catch (err) {
        res.status(500).json({
            error: err,
            message: "s.wrong",
        })
    }
});


module.exports = router;