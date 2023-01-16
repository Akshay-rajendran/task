const taskmodel = require("../model/taskmodel")

const addtask = async (req, res) => {
    try {
        await taskmodel.create(req.body)
        res.json({
            succes: true,
            msg: `task addedd`
        })
    } catch (error) {
        res.json({
            success: false,
            msg: "something wrong, check again"
        })
    }

}
const gettask = async (req, res) => {
    try {
        let alltask = await taskmodel.find({})
        res.json({
            success: true,
            msg: "get all task",
            alltask
        })
    } catch (error) {
        res.json({
            success: false,
            msg: "Error"
        })
    }
}
const singletask = async (req, res) => {
    try {
        res.json(await taskmodel.findOne({ _id: req.params._id }))
    } catch (error) {
        res.json({
            success: false,
            msg: "check again something wrong"
        })
    }
}
const taskupdate = async (req, res) => {
    try {
        await taskmodel.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true })
        res.json("successfully updated")
    } catch (error) {
        res.json({
            success: false,
            msg: "cant updated,something went wrong"
        })
    }
}

const taskdelete = async (req, res) => {
    try {
        await taskmodel.deleteOne({ _id: req.params.id })
        res.json({
            succes: true,
            msg: "deleted the selected one"
        })
    } catch (error) {
        res.json({
            succes: false,
            msg: "something wrong ,cannot delete"
        })
    }
}
module.exports = {
    addtask,
    gettask,
    singletask,
    taskupdate,
    taskdelete
}