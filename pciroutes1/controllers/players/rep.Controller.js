var { database } = require("../../config/config.database");

class repController {
  listRep(req, res) {
    var query = `SELECT        rep_id, rep_desc
    FROM            representration_mst
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
        res.json(data.recordset);
      }
    });
  }
  addRep(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_INSERT_representration_mst]
		@rep_desc = '` +
      req.body.rep_desc +
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
  editRep(req, res) {
    var query =
      `EXEC	 [rahulaminhissaab].[USP_UPDATE_representration_mst]
      @rep_id = ` +
      req.body.rep_id +
      `,
      @rep_desc = '` +
      req.body.rep_desc +
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
  /* getPlayerFML(req, res) {
    var query = `SELECT isnull(first_name,'') as first_name, isnull(middle_name,'') as middle_name, 
    isnull(last_name,'') as last_name
    FROM   player_master
    WHERE (player_id = ` + req.params.id + `)`;

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
    var query =     `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_PROFILE]
		@player_id = ` + req.body.player_id + `,
    @email_id = '` + req.body.email_id + `',
    @phone_1 = '` + req.body.phone_1 + `',
    @profile_pic_file = '` + req.body.profile_pic_file + `',
    @first_name = '` + req.body.first_name + `',
    @middle_name = '` + req.body.middle_name + `',
    @last_name = '` + req.body.last_name + `'`
		;

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
    var query =     `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_PROFILE1]
	  @player_id = ` + req.body.player_id + `, 
    @email_id = '` + req.body.email_id + `',
    @phone_1 = '` + req.body.phone_1 + `',
    @first_name = '` + req.body.first_name + `',
    @middle_name = '` + req.body.middle_name + `',
    @last_name = '` + req.body.last_name + `'`
		;

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
    var query = `DECLARE @count AS numeric(18,2)=0.0

    update rahulaminhissaab.player_master set @count += 2.23
      where isnull(player_id,0) >0 and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(rep_id,0) >0 and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(player_type_id,0) >0 and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(first_name,'') <>''and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(middle_name,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(last_name,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(gender,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(age,0) <>0 and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(DOB,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_address_1,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_address_2,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_address_3,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_city,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_taluka,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_district,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_state,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(c_pincode,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_address_1,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_address_2,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_address_3,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_city,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_taluka,'') <>''and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_district,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_state,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(p_pincode,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(email_id,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(phone_1,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(phone_2,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(udid_no,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(aadhar_no,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(classification_id_no,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(classification_id_exp_date,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_no,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_exp_date,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(aadhar_file_loc_1,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(aadhar_file_loc_2,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(classification_id_file_loc,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_file_loc_1,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(passport_file_loc_2,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(udid_card_file_1,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(udid_card_file_2,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(mecical_certificate_1,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(medical_certificate_2,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(profile_pic_file,'') <>'' and player_id =` + req.params.id + `
    update rahulaminhissaab.player_master set @count += 2.22
    where isnull(password,'') <>'' and player_id =` + req.params.id + `
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
    var query = `SELECT isnull(c_address_1,'') as c_address_1
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
 WHERE (player_id = ` + req.params.id + `)`;

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
    var query =     `EXEC	 [rahulaminhissaab].[USP_UPDATE_PLAYER_ADDRESS]
		@player_id = ` + req.body.player_id + `,
 @c_address_1 = '` + req.body.c_address_1 + `',
 @c_address_2 = '` + req.body.c_address_2 + `',
 @c_address_3 = '` + req.body.c_address_3 + `',
 @c_city = '` + req.body.c_city + `',
 @c_taluka = '` + req.body.c_taluka + `',
 @c_district = '` + req.body.c_district + `',
 @c_state = '` + req.body.c_state + `',
 @c_pincode = '` + req.body.c_pincode + `',
 @p_address_1 = '` + req.body.p_address_1 + `',
 @p_address_2 = '` + req.body.p_address_2 + `',
 @p_address_3 = '` + req.body.p_address_3 + `',
 @p_city = '` + req.body.p_city + `',
 @p_taluka = '` + req.body.p_taluka + `',
 @p_district = '` + req.body.p_district + `',
 @p_state = '` + req.body.p_state + `',
 @p_pincode = '` + req.body.c_pincode + `'`;

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
  } */
}

module.exports = (options) => new repController(options);
