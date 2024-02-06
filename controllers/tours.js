const express = require('express')
const { Tour } = require('../models')

const index = async(req,res,next) => {
    try {
        res.json(await Tour.find({}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const create = async(req,res,next) => {
    try {
        res.json(await Tour.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
}

const show = async(req,res,next) => {
    try {
        res.json(await Tour.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

const update = async(req,res,next) => {
    try {
        res.json(await Tour.findByIdAndUpdate(req.params.id, req.body, {new:true}))
    } catch (error) {
        res.status(400).json(error)
    }
}

const destroy = async(req,res,next) => {
    try {
        res.json(await Tour.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    index,
    create,
    show,
    update,
    delete: destroy
}