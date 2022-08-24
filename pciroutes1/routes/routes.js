var express = require("express");
var router = express.Router();

//middlewares

var middleware = require("../middlewares/middleware").single;

//  login

var AuthController = require("../controllers/auth/auth.controller")();

router.post("/web/auth/login", AuthController.login);
router.get("/web/auth/adminLogin/:usr/:pwd", AuthController.adminLogin);
var playerscontroller = require("../controllers/players/players.controller")();

router.get("/web/playerType/list", playerscontroller.listPlayerType);
router.post("/web/player/add", playerscontroller.addPlayer);
router.post("/web/player/profileMod", playerscontroller.profileMod);
router.post("/web/player/profileMod1", playerscontroller.profileMod1);
router.get("/web/player/FML/:id", playerscontroller.getPlayerFML);
router.get("/web/player/Aadhaar/:id", playerscontroller.getPlayerAadhaar);
router.get("/web/player/PP/:id", playerscontroller.getPlayerPP);
router.get("/web/player/class/:id", playerscontroller.getClassification);
router.get("/web/player/per/:id", playerscontroller.getpercentage);
router.get("/web/player/address/:id", playerscontroller.getPlayerAddress);
router.post("/web/player/updadd", playerscontroller.updAdd);
router.get("/web/Participants", playerscontroller.Participants);
router.post("/web/player/updAadhaar", playerscontroller.updAadhaar);
router.post("/web/player/updPP", playerscontroller.updPP);
router.post("/web/player/updClass", playerscontroller.updClassification);
router.get("/web/player/UDID/:id", playerscontroller.getUDID);
router.post("/web/player/updUDID", playerscontroller.updUDID);
router.get("/web/player/certi/:id", playerscontroller.getCertification);
router.post("/web/player/updCertification", playerscontroller.updCertification);
var repController = require("../controllers/players/rep.Controller")();

router.get("/web/repsesentration/list", repController.listRep);
router.post("/web/repsesentration/add", repController.addRep);
router.post("/web/repsesentration/edit", repController.editRep);
var menuController = require("../controllers/menu/menu.Controller")();
router.get("/web/menu/list/:menuType/:tdate", menuController.listMenu);
var national2Controller =
  require("../controllers/national2/nationals2.controller")();
router.get("/web/national2/list", national2Controller.list);
var tournamentController =
  require("../controllers/Tournament/tournament.controller")();
router.get("/web/tournament/showtour/:id", tournamentController.showtour);
router.post("/web/tournament/addParticipation", tournamentController.addParticipation);

var gameController =
  require("../controllers/game/game.controller")();
router.get("/web/game/showgame/:ptid/:shcid/:gender/:appfil", gameController.showgame);


module.exports = router;
