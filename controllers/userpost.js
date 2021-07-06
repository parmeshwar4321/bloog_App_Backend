const postdb = require('../models/UserContent')


exports.userPost = async (req, res) => {
    try {
        const userPost = await postdb.find()
        res.send(userPost)
    }
    catch (err) {
        res.json({ message: err })
    }
}


exports.addPost = async (req, res) => {

    const NewPost = new postdb({
        Post: req.body.Post,
        like: req.body.like
    })
    try {
        const SavePost = await NewPost.save()
        res.send(NewPost)
        console.log(NewPost);

    }
    catch (err) {
        res.json({ message: err })
    }
}


exports.updatePost = async (req, res) => {
    try {
        
        // await postdb.find({_id:req.params.id})

        await postdb.updateMany({
            _id: req.params.id
        }, {
            $set: {
        Post:req.body.Post,
        like:req.body.like
            }
        })
            .exec((err, dat) => {
                if (err) {
                    res.send(err)
                    console.log(err)
                }
                else {
                    res.json({ "message": "Post Updated Successfully" })
                    console.log(dat)
                }
            })


    }
    catch (error) {
    console.log(error);

}

}


exports.deletePost = async (req, res) => {

    try {
        await postdb.deleteOne({
            _id: req.params.id
        })
            .exec((err, data) => {
                if (err) {
                    res.send(err)
                    console.log(err)
                }
                else {
                    res.json({ "message": "User Deleled Successfully" })
                    console.log(data)
                }
            })
    }
    catch (error) {
        console.log(error);

    }

}