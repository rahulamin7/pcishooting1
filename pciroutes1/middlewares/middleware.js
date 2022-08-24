
// automatically applys to all routes
module.exports.global = [
    require('./crossorigin.middleware'), // cross origin 
    require('body-parser').json({ limit: '50mb' }), // json data parse
    require('body-parser').urlencoded({ extended: true, limit: '50mb' }), // parse url encoded  
    (req,res,next)=> { console.log(req.path);console.log(req.header['Authorization']);next() },
];

// use for selected routes , accessable from route file

module.exports.single ={
    test:(req,res,next)=> next(),
    nopagefound:require('./404.middleware'),
}
