let express=require('express');
let router = express.Router();

router.get('/playlist', (req, res)=> {
    if(req.query.name){
        res.send(`You have requested/changed or deleted a song ${req.query.name}`);
    }
    else{
    res.send('You have requested/changed or deleted a song')
}
});

router.get('/playlist/:name', (req,res)=> {
    res.send(`You have requested/changed or deleted a song ${req.params.name}`);
});

router.get('/error', (req,res)=>{
    throw new Error('This is a forced error')
})


module.exports=router;