module.exports = function(req, res, next) {
  
        res.status(404)
      .json({
          success: false,
          message: "You Lost",
          path: req.path
      })
      .end()
    }