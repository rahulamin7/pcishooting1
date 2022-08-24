var { database } = require("../../config/config.database");

class playerscontroller {
  listPlayerType(req, res) {
    var query = `SELECT player_type_id, player_type_desc
    FROM   Player_type_mst`;

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
  addPlayer(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_INSERT_PLAYER_MASTER]
		@classification_id_no = '` +
      req.body.classification_id_no +
      `',
    @email_id = '` +
      req.body.email_id +
      `',
    @phone_1 = '` +
      req.body.phone_1 +
      `',
    @profile_pic_file = '` +
      req.body.profile_pic_file +
      `',
    @password = '` +
      req.body.password +
      `'`;
    console.log(query);
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
  getPlayerFML(req, res) {
    var query =
      `SELECT isnull(first_name,'') as first_name, isnull(middle_name,'') as middle_name, 
    isnull(last_name,'') as last_name
    FROM   player_master
    WHERE (player_id = ` +
      req.params.id +
      `)`;

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
  profileMod(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_PROFILE]
		@player_id = ` +
      req.body.player_id +
      `,
    @email_id = '` +
      req.body.email_id +
      `',
    @phone_1 = '` +
      req.body.phone_1 +
      `',
    @profile_pic_file = '` +
      req.body.profile_pic_file +
      `',
    @first_name = '` +
      req.body.first_name +
      `',
    @middle_name = '` +
      req.body.middle_name +
      `',
    @last_name = '` +
      req.body.last_name +
      `'`;
    console.log(query);
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
  profileMod1(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_PROFILE1]
	  @player_id = ` +
      req.body.player_id +
      `, 
    @email_id = '` +
      req.body.email_id +
      `',
    @phone_1 = '` +
      req.body.phone_1 +
      `',
    @first_name = '` +
      req.body.first_name +
      `',
    @middle_name = '` +
      req.body.middle_name +
      `',
    @last_name = '` +
      req.body.last_name +
      `'`;
    console.log(query);
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
  getpercentage(req, res) {
    var query =
      `DECLARE @count AS numeric(18,2)=0.0

    update rahulaminhissaab.player_master set @count += 2.23
      where isnull(player_id,0) >0 and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(rep_id,0) >0 and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(player_type_id,0) >0 and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(first_name,'') <>''and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(middle_name,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(last_name,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(gender,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(age,0) <>0 and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(DOB,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_address_1,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_address_2,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_address_3,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_city,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_taluka,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_district,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_state,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_pincode,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_address_1,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_address_2,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_address_3,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_city,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_taluka,'') <>''and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_district,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_state,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_pincode,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(email_id,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(phone_1,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(phone_2,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(udid_no,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(aadhar_no,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(classification_id_no,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(classification_id_exp_date,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_no,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_exp_date,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(aadhar_file_loc_1,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(aadhar_file_loc_2,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(classification_id_file_loc,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_file_loc_1,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_file_loc_2,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(udid_card_file_1,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(udid_card_file_2,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 4.44
    where isnull(medical_certificate_1,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(profile_pic_file,'') <>'' and player_id =` +
      req.params.id +
      `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(password,'') <>'' and player_id =` +
      req.params.id +
      `
    select @count as count`;

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
  getPlayerAddress(req, res) {
    var query =
      `SELECT isnull(c_address_1,'') as c_address_1
    ,isnull(c_address_2,'') as c_address_2
    ,isnull(c_address_3,'') as c_address_3
    ,isnull(c_city,'') as c_city
    ,isnull(c_taluka,'') as c_taluka
    ,isnull(c_district,'') as c_district
    ,isnull(c_state,'') as c_state
    ,isnull(c_pincode,'') as c_pincode
    ,isnull(p_address_1,'') as p_address_1
    ,isnull(p_address_2,'') as p_address_2
    ,isnull(p_address_3,'') as p_address_3
    ,isnull(p_city,'') as p_city
    ,isnull(p_taluka,'') as p_taluka
    ,isnull(p_district,'') as p_district
    ,isnull(p_state,'') as p_state
    ,isnull(p_pincode,'') as p_pincode
 FROM rahulaminhissaab.player_master
 WHERE (player_id = ` +
      req.params.id +
      `)`;

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
  updAdd(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_ADDRESS]
		@player_id = ` +
      req.body.player_id +
      `,
 @c_address_1 = '` +
      req.body.c_address_1 +
      `',
 @c_address_2 = '` +
      req.body.c_address_2 +
      `',
 @c_address_3 = '` +
      req.body.c_address_3 +
      `',
 @c_city = '` +
      req.body.c_city +
      `',
 @c_taluka = '` +
      req.body.c_taluka +
      `',
 @c_district = '` +
      req.body.c_district +
      `',
 @c_state = '` +
      req.body.c_state +
      `',
 @c_pincode = '` +
      req.body.c_pincode +
      `',
 @p_address_1 = '` +
      req.body.p_address_1 +
      `',
 @p_address_2 = '` +
      req.body.p_address_2 +
      `',
 @p_address_3 = '` +
      req.body.p_address_3 +
      `',
 @p_city = '` +
      req.body.p_city +
      `',
 @p_taluka = '` +
      req.body.p_taluka +
      `',
 @p_district = '` +
      req.body.p_district +
      `',
 @p_state = '` +
      req.body.p_state +
      `',
 @p_pincode = '` +
      req.body.c_pincode +
      `'`;

    console.log(query);
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
  Participants(req, res) {
    var query = `SELECT        a.player_id, a.rep_id, a.player_type_id, a.first_name, a.middle_name, a.last_name, a.gender, a.age, a.DOB, a.c_address_1, a.c_address_2, a.c_address_3, a.c_city, a.c_taluka, a.c_district, a.c_state, a.c_pincode, 
    a.p_address_1, a.p_address_2, a.p_address_3, a.p_city, a.p_taluka, a.p_district, a.p_state, a.p_pincode, a.email_id, a.phone_1, a.phone_2, a.udid_no, a.aadhar_no, a.classification_id_no, a.classification_id_exp_date, 
    a.passport_no, a.passport_exp_date, a.aadhar_file_loc_1, a.aadhar_file_loc_2, a.classification_id_file_loc, a.passport_file_loc_1, a.passport_file_loc_2, a.udid_card_file_1, a.udid_card_file_2, a.medical_certificate_1, 
    a.medical_certificate_2, a.profile_pic_file, a.password, a.first_name + ' ' + a.middle_name + ' ' + a.last_name AS name, b.player_type_desc, c.rep_desc
FROM            player_master AS a left outer JOIN
    Player_type_mst AS b ON a.player_type_id = b.player_type_id left outer JOIN
    representration_mst AS c ON a.rep_id = c.rep_id`;

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
  getPlayerAadhaar(req, res) {
    var query =
      `SELECT isnull(aadhar_no,'') as aadhar_no, isnull(aadhar_file_loc_1,
        'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') as aadhar_file_loc_1, 
        isnull(aadhar_file_loc_2,'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') 
        as aadhar_file_loc_2
      FROM   player_master
    WHERE (player_id = ` +
      req.params.id +
      `)`;

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
  updAadhaar(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_AADHAAR]
	  @player_id = ` +
      req.body.player_id +
      `, 
    @aadhar_no = '` +
      req.body.aadhar_no +
      `',
    @aadhar_file_loc_1 = '` +
      req.body.aadhar_file_loc_1 +
      `',
    @aadhar_file_loc_2 = '` +
      req.body.aadhar_file_loc_2 +
      `'`;
    console.log(query);
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
  getPlayerPP(req, res) {
    var query =
      `SELECT isnull(passport_no,'') as passport_no,isnull(passport_exp_date,'') as passport_exp_date,  
      isnull(passport_file_loc_1,
          'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') as passport_file_loc_1, 
          isnull(passport_file_loc_2,'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') 
          as passport_file_loc_2
        FROM   player_master
    WHERE (player_id = ` +
      req.params.id +
      `)`;

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
  updPP(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_PASSPORT]
	  @player_id = ` +
      req.body.player_id +
      `, 
    @passport_no = '` +
      req.body.passport_no +
      `',
    @passport_exp_date = '` +
      req.body.passport_exp_date +
      `',
    @passport_file_loc_1 = '` +
      req.body.passport_file_loc_1 +
      `',
    @passport_file_loc_2 = '` +
      req.body.passport_file_loc_2 +
      `'`;
    console.log(query);
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
  getClassification(req, res) {
    var query =
      `SELECT isnull(classification_id_no,'') as classification_id_no,isnull(classification_id_exp_date,'') as classification_id_exp_date,  
      isnull(classification_id_file_loc ,
          'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') as classification_id_file_loc
        FROM   player_master
    WHERE (player_id = ` +
      req.params.id +
      `)`;

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
  updClassification(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_CLASSIFICATION]
	  @player_id = ` +
      req.body.player_id +
      `, 
    @classification_id_no = '` +
      req.body.classification_id_no +
      `',
    @classification_id_exp_date = '` +
      req.body.classification_id_exp_date +
      `',
    @classification_id_file_loc = '` +
      req.body.classification_id_file_loc +
      `'`;
    console.log(query);
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
  getUDID(req, res) {
    var query =
      `SELECT isnull(udid_no,'') as udid_no,  
      isnull(udid_card_file_1 ,
          'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') as udid_card_file_1,
	  isnull(udid_card_file_2 ,
          'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') as udid_card_file_2
        FROM   player_master
    WHERE (player_id = ` +
      req.params.id +
      `)`;

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
  updUDID(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_UDID]
	  @player_id = ` +
      req.body.player_id +
      `, 
    @udid_no = '` +
      req.body.udid_no +
      `',
    @udid_card_file_1 = '` +
      req.body.udid_card_file_1 +
      `',
    @udid_card_file_2 = '` +
      req.body.udid_card_file_2 +
      `'`;
    console.log(query);
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
  getCertification(req, res) {
    var query =
      `SELECT isnull(udid_no,'') as udid_no,
      isnull(medical_certificate_1 ,
          'https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png') as medical_certificate_1
        FROM   player_master
    WHERE (player_id = ` +
      req.params.id +
      `)`;

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
  updCertification(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_MEDI_CERTI]
	  @player_id = ` +
      req.body.player_id +
      `, 
    @medical_certificate_1 = '` +
      req.body.medical_certificate_1 +
      `'`;
    console.log(query);
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

module.exports = (options) => new playerscontroller(options);
