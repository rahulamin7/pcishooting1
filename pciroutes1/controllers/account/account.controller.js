var { database } = require("../../config/config.database");

class accountController {
  list(req, res) {
    var query = `SELECT        AC_TYPE_ID, AC_TYPE_NAME, PARENT_TYPE, DR_CR
    FROM            dbo.DAC_ACCOUNT_TYPE ORDER BY AC_TYPE_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  listMod(req, res) {
    var query =
      `SELECT MOD_ID, SR_NO, HEADING, 'https://aaryainfoline.com/images/KS/' + IMAGEURL as IMAGEURL, UTUBEURL, DETAIL, PARAG
    FROM Y_MODULE_DTL where MOD_ID = ` + req.params.id;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  token(req, res) {
    var query =
      `USP_INSERT_TOKEN 
    @token  = '` +
      req.body.token +
      `'`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      console.log(data);
      if (err) {
        res.json({
          success: false,
          message: "success",
          data: err,
        });
      } else {
        res.json({
          success: true,
          message: "success",
          data: data.recordset,
        });
      }
    });
  }
  fetchUser(req, res) {
    var query =     `SELECT EMP_ID,EMP_FNAME+ ' ' + EMP_SNAME + ' ' + EMP_LNAME as name
    FROM   dbo.EMP_EMPLOYEE where EMP_ID = 0`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  fetchGroup(req, res) {
    var query =     `SELECT AC_CODE, AC_PARENT, AC_TYPE, G_A, AC_NAME, TREE_LEVEL
    FROM   dbo.DAC_ACCOUNT_MASTER
    WHERE (G_A = '` +  req.params.ga +`') AND (TREE_LEVEL = ` + req.params.treelev + `) 
    AND (AC_CODE > 0)`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  fetchParents(req, res) {
    var query =     `SELECT AC_CODE, AC_NAME
    FROM   dbo.DAC_ACCOUNT_MASTER
    WHERE (AC_CODE IN (14, 45, 52))
    ORDER BY AC_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  insertAccount(req, res) {
    var query =     `EXEC	 [dbo].[USP_INSERT_DAC_ACCOUNT_MASTER]
		@AC_PARENT = ` + req.body.AC_PARENT + `,
		@AC_TYPE = ` + req.body.AC_TYPE + `,
		@G_A = '` + req.body.G_A + `',
		@AC_NAME = '` + req.body.AC_NAME + `',
		@NATURE = '` + req.body.NATURE + `',
		@TREE_LEVEL =  ` + req.body.TREE_LEVEL + `,
		@SYSTEM_AC =  ` + req.body.SYSTEM_AC + `,
		@ALIAS ='` + req.body.ALIAS + `',
		@AC_BILL_NAME = '` + req.body.AC_NAME + `',
		@LAST_YEAR_OB =  ` + req.body.SYSTEM_AC + `,
		@OPENING_BALANCE =  ` + req.body.SYSTEM_AC + `,
		@TOTAL_DEBIT =  ` + req.body.SYSTEM_AC + `,
		@TOTAL_CREDIT =  ` + req.body.SYSTEM_AC + `,
		@CLOSING_BALANCE =  ` + req.body.SYSTEM_AC + `,
		@RESTRICT_TRANS_ENTRY =  ` + req.body.SYSTEM_AC + `,
		@IS_BILL_BY_BILL =  ` + req.body.SYSTEM_AC + `;
`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchAccounts(req, res) {
    var query =     `SELECT AC_CODE,AC_NAME,AC_TYPE,ALIAS
    FROM   dbo.DAC_ACCOUNT_MASTER
    WHERE (G_A = 'A') AND (AC_PARENT IN (14, 45, 52))
    ORDER BY AC_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  fetchAccount(req, res) {
    var query =     `SELECT AC_CODE,AC_NAME,AC_TYPE,ALIAS,AC_PARENT
    FROM   dbo.DAC_ACCOUNT_MASTER
    WHERE AC_CODE = ` + req.params.accode ;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  updateAccount(req, res) {
    var query =     `EXEC	 [dbo].[USP_UPDATE_DAC_ACCOUNT_MASTER]
		@AC_CODE = ` + req.body.AC_CODE + `,
    @AC_PARENT = ` + req.body.AC_PARENT + `,
		@AC_TYPE = ` + req.body.AC_TYPE + `,
		@G_A = '` + req.body.G_A + `',
		@AC_NAME = '` + req.body.AC_NAME + `',
		@NATURE = '` + req.body.NATURE + `',
		@TREE_LEVEL =  ` + req.body.TREE_LEVEL + `,
		@SYSTEM_AC =  ` + req.body.SYSTEM_AC + `,
		@ALIAS ='` + req.body.ALIAS + `',
		@AC_BILL_NAME = '` + req.body.AC_NAME + `',
		@LAST_YEAR_OB =  ` + req.body.SYSTEM_AC + `,
		@OPENING_BALANCE =  ` + req.body.SYSTEM_AC + `,
		@TOTAL_DEBIT =  ` + req.body.SYSTEM_AC + `,
		@TOTAL_CREDIT =  ` + req.body.SYSTEM_AC + `,
		@CLOSING_BALANCE =  ` + req.body.SYSTEM_AC + `,
		@RESTRICT_TRANS_ENTRY =  ` + req.body.SYSTEM_AC + `,
		@IS_BILL_BY_BILL =  ` + req.body.SYSTEM_AC + `;
`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }

  fetchUnits(req, res) {
    var query =     `SELECT UNIT_ID, UNIT_NAME, UNIT_DESC
    FROM   dbo.INV_UNIT_MASTER order by UNIT_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }

  fetchUnit(req, res) {
    var query =     `SELECT UNIT_ID, UNIT_NAME, ISNULL(UNIT_DESC,'') AS UNIT_DESC 
    FROM   dbo.INV_UNIT_MASTER 
    where UNIT_ID=` + req.params.unitid;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  addUnit(req, res) {
    var query =     `EXEC	 [dbo].[USP_INSERT_INV_UNIT_MASTER]
		@UNIT_NAME = '` + req.body.UNIT_NAME + `',
		@UNIT_DESC = '` + req.body.UNIT_DESC + `'`
		;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  updateUnit(req, res) {
    var query =     `EXEC	 [dbo].[USP_UPDATE_INV_UNIT_MASTER]
		@UNIT_ID = ` + req.body.UNIT_ID + `,
    @UNIT_NAME = '` + req.body.UNIT_NAME + `',
		@UNIT_DESC = '` + req.body.UNIT_DESC + `'`
		;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchUnitRatio(req, res) {
    var query =     `SELECT CID, FROMUNIT, TOUNIT, RATIO
    FROM   dbo.INV_UNIT_RATIO 
    where FROMUNIT=` + req.params.funitid + ` and TOUNIT = ` + req.params.tunitid;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }

  addUnitRatio(req, res) {
    var query =     `EXEC	 [dbo].[USP_INSERT_INV_UNIT_RATIO]
		@FROMUNIT = ` + req.body.FROMUNIT + `,
		@TOUNIT = ` + req.body.TOUNIT + `,
    @RATIO = ` + req.body.RATIO
		;


    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  updateUnitRatio(req, res) {
    var query =     `EXEC	 [dbo].[USP_UPDATE_INV_UNIT_RATIO]
		@CID = ` + req.body.CID + `,
    @FROMUNIT = ` + req.body.FROMUNIT + `,
		@TOUNIT = ` + req.body.TOUNIT + `,
    @RATIO = ` + req.body.RATIO
		;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchItemGroups(req, res) {
    var query =     `SELECT ITEM_ID, ITEM_NAME, ITEM_CODE, ITEM_PARENT, G_I
FROM   dbo.INV_ITEM_MASTER_MAIN
WHERE (G_I = 'G') AND (ITEM_ID > 0)
ORDER BY ITEM_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }

  addItemGroup(req, res) {
    var query =     `EXEC	 [dbo].[USP_INSERT_INV_ITEM_MASTER_GROUP]
		@ITEM_PARENT = ` + req.body.ITEM_PARENT + `,
    @G_I = '`  + req.body.G_I + `',
    @ITEM_NAME = '`  + req.body.ITEM_NAME + `'` 
		;


    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchItemGroup(req, res) {
    var query =     `SELECT ITEM_ID, ITEM_NAME, ITEM_CODE, ITEM_PARENT, G_I
    FROM   dbo.INV_ITEM_MASTER_MAIN
    WHERE (G_I = 'G') AND (ITEM_ID = ` + req.params.item_id + `)`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  fetchParentGroup(req, res) {
    var query =     `SELECT ITEM_ID, ITEM_NAME, ITEM_CODE, ITEM_PARENT, G_I
    FROM   dbo.INV_ITEM_MASTER_MAIN
    WHERE (G_I = 'G') AND (ITEM_ID = ` + req.params.item_id + `)`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  updateItemGroup(req, res) {
    var query =     `EXEC	 [dbo].[USP_UPDATE_INV_ITEM_MASTER_GROUP]
		@ITEM_ID = ` + req.body.ITEM_ID + `,
    @ITEM_PARENT = ` + req.body.ITEM_PARENT + `,
    @G_I = '`  + req.body.G_I + `',
    @ITEM_NAME = '`  + req.body.ITEM_NAME + `'` 
		;


    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchItemMasters(req, res) {
    var query =     `SELECT ITEM_ID, ITEM_NAME, ITEM_CODE, ITEM_PARENT, G_I
FROM   dbo.INV_ITEM_MASTER_MAIN
WHERE (G_I = 'I') AND (ITEM_ID > 0)
ORDER BY ITEM_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  addItemMaster(req, res) {
    var query =     `EXEC	 [dbo].[USP_INSERT_INV_ITEM_MASTER_MAIN]
		@ITEM_PARENT = ` + req.body.ITEM_PARENT + `,
    @G_I = '`  + req.body.G_I + `',
    @ITEM_NAME = '`  + req.body.ITEM_NAME + `',
    @ITEM_PUR_UNIT = ` + req.body.ITEM_PUR_UNIT + `,
    @ITEM_PUR_UNIT_RATIO  = ` + req.body.ITEM_PUR_UNIT_RATIO + `,
    @ITEM_SALE_UNIT  = ` + req.body.ITEM_SALE_UNIT + `,
    @ITEM_SALE_UNIT_RATIO  = ` + req.body.ITEM_SALE_UNIT_RATIO + `,
    @ITEM_STOCK_AC  = ` + req.body.ITEM_STOCK_AC + `,
    @ITEM_STOCK_OPENING  = ` + req.body.ITEM_STOCK_OPENING + `,
    @ITEM_VALUE_OPENING  = ` + req.body.ITEM_VALUE_OPENING  + `,
    @GST   = ` + req.body.GST	;


    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchItemMaster(req, res) {
    var query =     `SELECT ITEM_ID, ITEM_NAME, ITEM_CODE, ITEM_PARENT, G_I,
    ITEM_PUR_UNIT, ITEM_SALE_UNIT, ITEM_PUR_UNIT_RATIO, ITEM_STOCK_OPENING, 
    ITEM_VALUE_OPENING, GST, ITEM_STOCK_PLUS, ITEM_STOCK_CLOSING, ITEM_STOCK_MINUS
FROM   dbo.INV_ITEM_MASTER_MAIN
WHERE (G_I = 'I') AND (ITEM_ID =` + req.params.item_id + `)`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  updateItemMaster(req, res) {
    var query =     `EXEC	 [dbo].[USP_UPDATE_INV_ITEM_MASTER_MAIN]
		@ITEM_ID = ` + req.body.ITEM_ID + `,
    @ITEM_PARENT = ` + req.body.ITEM_PARENT + `,
    @G_I = '`  + req.body.G_I + `',
    @ITEM_NAME = '`  + req.body.ITEM_NAME + `',
    @ITEM_PUR_UNIT = ` + req.body.ITEM_PUR_UNIT + `,
    @ITEM_PUR_UNIT_RATIO  = ` + req.body.ITEM_PUR_UNIT_RATIO + `,
    @ITEM_SALE_UNIT  = ` + req.body.ITEM_SALE_UNIT + `,
    @ITEM_SALE_UNIT_RATIO  = ` + req.body.ITEM_SALE_UNIT_RATIO + `,
    @ITEM_STOCK_AC  = ` + req.body.ITEM_STOCK_AC + `,
    @ITEM_STOCK_OPENING  = ` + req.body.ITEM_STOCK_OPENING + `,
    @ITEM_VALUE_OPENING  = ` + req.body.ITEM_VALUE_OPENING  + `,
    @GST   = ` + req.body.GST	;


    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchBOMMasters(req, res) {
    var query =     `SELECT A.BOM_ID, A.ITEM_ID, A.UNIT_ID, A.LOT_SIZE, C.UNIT_NAME, B.ITEM_NAME
    FROM   INV_BOM_MST AS A INNER JOIN
                 dbo.INV_ITEM_MASTER_MAIN AS B ON A.ITEM_ID = B.ITEM_ID INNER JOIN
                 dbo.INV_UNIT_MASTER AS C ON A.UNIT_ID = C.UNIT_ID
                 ORDER BY B.ITEM_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  fetchFG4BOM(req, res) {
    var query =     `SELECT ITEM_ID, ITEM_NAME, ITEM_CODE, ITEM_PARENT, G_I, ITEM_PUR_UNIT
    FROM   dbo.INV_ITEM_MASTER_MAIN
    WHERE (ITEM_PARENT < 13 or ITEM_PARENT > 17) AND (G_I = 'I')
                 ORDER BY ITEM_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }
  fetchRM4BOM(req, res) {
    var query =     `SELECT ITEM_ID, ITEM_NAME, ITEM_CODE, ITEM_PARENT, G_I, ITEM_SALE_UNIT
    FROM   dbo.INV_ITEM_MASTER_MAIN
    WHERE (ITEM_PARENT > 12 and ITEM_PARENT < 18) AND (G_I = 'I')
                 ORDER BY ITEM_NAME`;

    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }  
  addBOMMaster(req, res) {
    var query =     `EXEC	 [dbo].[USP_INSERT_INV_FORMULA_HDR]
		@ITEM_ID = ` + req.body.ITEM_ID + `,
    @UNIT_ID = `  + req.body.UNIT_ID + `,
    @LOT_SIZE = `  + req.body.LOT_SIZE ;


    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  addBOMdtl(req, res) {
    var query =     `EXEC	 [dbo].[USP_INSERT_INV_FORMULA_DTL]
		@BOM_ID = ` + req.body.BOM_ID + `,
    @ITEM_ID = ` + req.body.ITEM_ID + `,
    @UNIT_ID = `  + req.body.UNIT_ID + `,
    @QTY = `  + req.body.QTY ;


    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  fetchBOMDetails(req, res) {
    var query =     `SELECT A.BOM_ID, A.ITEM_ID, A.UNIT_ID, A.LOT_SIZE, B.ITEM_ID AS RM_ITEM_ID, B.UNIT_ID AS RM_UNIT_ID, B.QTY, C.ITEM_NAME, C.ITEM_NAME AS Expr1, D.ITEM_NAME AS RM_NAME, E.UNIT_NAME, F.UNIT_NAME AS RM_UNIT_NAME
    FROM   INV_BOM_MST AS A INNER JOIN
                 INV_BOM_DTL AS B ON A.BOM_ID = B.BOM_ID INNER JOIN
                 dbo.INV_ITEM_MASTER_MAIN AS C ON A.ITEM_ID = C.ITEM_ID INNER JOIN
                 dbo.INV_ITEM_MASTER_MAIN AS D ON B.ITEM_ID = D.ITEM_ID INNER JOIN
                 dbo.INV_UNIT_MASTER AS E ON A.UNIT_ID = E.UNIT_ID INNER JOIN
                 dbo.INV_UNIT_MASTER AS F ON B.UNIT_ID = F.UNIT_ID
WHERE (A.BOM_ID =` + req.params.BOM_ID + `)`;
//console.log(query);
    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json(data.recordset);
      }
    });
  }

  UpdateBOMaster(req, res) {
    var query =     `EXEC	 [dbo].[USP_UPDATE_INV_FORMULA_HDR]
		@BOM_ID  = ` + req.body.BOM_ID + `,
    @ITEM_ID = ` + req.body.ITEM_ID + `,
    @UNIT_ID = `  + req.body.UNIT_ID + `,
    @LOT_SIZE = `  + req.body.LOT_SIZE ;
//console.log(query);
    const request = new database.Request();
   request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
  DeleteBOMDtl(req, res) {
    var query =     `EXEC	 [dbo].[USP_DELETE_INV_FORMULA_DTL]
		@BOM_ID  = ` + req.body.BOM_ID  ;
//console.log(query);
    const request = new database.Request();
    request.query(query, (err, data) => {
      if (err) {
        res.json({
          success: false,
          message: "error",
          data: err,
        });
      } else {
        res.json({
          success: true,
          data: data.recordset,
        });
      }
    });
  }
}

module.exports = (options) => new accountController(options);
