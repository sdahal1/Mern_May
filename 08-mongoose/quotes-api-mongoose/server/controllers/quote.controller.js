const Quote = require("../models/quote.model"); //import the model so that the controller knows how to talk to the database to query the database



module.exports.sayHello = (req,res)=>{
    res.json({msg: "wazzaaap mongoose quotes api"});
}

module.exports.findAllQuotes = (req,res)=>{
    Quote.find()
        .then(allQuotes=>{
            res.json({results: allQuotes})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.createQuote = (req,res)=>{
    //req.body represents form information
    Quote.create(req.body)
        .then(newlyCreatedQuote=>{
            res.json({results: newlyCreatedQuote})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.findOneQuote = (req,res)=>{
    Quote.findOne({_id: req.params.id})
        .then(foundQuote =>{
            res.json({results: foundQuote})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.updateQuote = (req,res)=>{
    Quote.findOneAndUpdate(
        {_id: req.params.id}, //specify which quote to update
        req.body, //specify the form information to update the quote with
        { new: true, runValidators: true }
    )
        .then(updatedQuote=>{
            res.json({results: updatedQuote})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}

module.exports.deleteQuote = (req,res)=>{
    Quote.deleteOne({_id: req.params.id})
        .then(deletedQuote=>{
            res.json({results: deletedQuote})
        })
        .catch(err=>{
            res.json({msg:"Something went wrong", error: err})
        })
}






