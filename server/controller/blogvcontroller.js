
var blogdata = require('../models/blog');

// blog data created  
exports.blogcreate = async function (req, res, next) {
    try {
        const data = await blogdata.create(req.body);
        console.log(data);

        res.status(200).json({
            status: "success",
            message: "blog data created successfully",
            data: data
        })
    } catch (error) {
        res.stutas(400).json({
            stutas: "fail",
            message: error.message,
            data: data
        })
    }
}

// blog data find   
exports.blogfind = async function (req, res, next) {
    try {
        const data = await blogdata.find();
        console.log(data);

        res.status(200).json({
            status: "success",
            message: "blog data find successfully",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: error.message,
            data: data
        })
    }
}


// blog data findone  
exports.blogfindone = async function (req, res, next) {
    try {
        const data = await blogdata.find({ _id: req.query.id });
        console.log(data);

        res.status(200).json({
            stutas: "success",
            message: "blog data findone successfully",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            stutas: "fail",
            message: error.message,
            data: data
        })
    }
}


// blog data search 
exports.blogsearch = async function (req, res) {
    try {
        console.log(req.query.search)
        let data = await blogdata.find({ user: req.userId, title: req.query.search });
        console.log(data);
        res.status(200).json({
            status: 'success',
            message: "serch successfully",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,

        })
    }
}


// user ave tayi pachi data add tay 
exports.myblog = async function (req, res) {
    try {

        let data = await blogdata.find({ user: req.body.user });
        console.log(data);
        res.status(200).json({
            status: 'success',
            message: "blog add successfully",
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,

        })
    }
}


exports.shorting = async function (req, res, next) {
    const sort = req.query.sort;

    if (![1, -1].includes(parseInt(sort))) {
        return res.status(400).json({ message: "invalid sort values" })
    }

    try {
        const blogs = await blogdata.find().sort({ title: parseInt(sort) });
        res.json({ status: "success", data: blogs })

    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message,

        })
    }
}

