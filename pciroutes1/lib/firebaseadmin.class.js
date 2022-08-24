const {database} = require('../config/config.database');
class firebaseadmin {
    app = require("firebase-admin");
    clickActions= {
        supplierInqueryList:"Supp_Inquiry_List",
        supplierQuotationList:"Supp_Quotation_List",
        clientInqueryList:"Client_Inquiry_List",
        clientQuotationList:"Client_Quotation_List"
    }
    constructor(){
        //console.log(this.app.apps,this.app.SDK_VERSION);
        if(!this.app.apps.length){
            this.app.initializeApp({
                credential: this.app.credential.cert(require('../config/firebasekey.config.json'))
            });
        }
    }
    sendNotificationbyToken({
        usertokens:[],
        messages:{},
        options:{}
    }){
        
        return this.app.messaging().sendToDevice(usertokens,messages, options);
    }
    async sendNotificationToUser({
        users=[],
        messages={
            title: "test title",
            body: "test Body",
            clickAction: ""
        },
        options={
            priority: "high",
            timeToLive: 60 * 60 *24
        }
    }){
        if(users.length == 0) throw 'No Users';
        let lor_in_list = users.map(function (a) { 
            return "'" + a.replace("'", "''") + "'"; 
        }).join(",");
        var queryd = `DELETE FROM USER_MOBILE_SESSION
        WHERE  USER_ID in (${lor_in_list});`;

        var query = `SELECT NOTIF_TOKEN FROM   USER_MOBILE_SESSION
        WHERE USER_ID in (${lor_in_list})  GROUP BY NOTIF_TOKEN`;
        
        const request = new database.Request();
        try {
            var {recordset} = await request.query(query);
            var tokens =[];
            if(recordset && recordset.length == 0) throw 'No token found'
            else {
                for(var i = 0; i < recordset.length ; i++){
                    if(recordset[i].NOTIF_TOKEN&& recordset[i].NOTIF_TOKEN != ''){
                     tokens.push(recordset[i].NOTIF_TOKEN)
                    }
                }
                console.log(tokens);
                if(tokens && tokens.length == 0) throw 'No token found'
                return {
                    success:true,
                    response : await this.app.messaging().sendToDevice(tokens,{notification:messages,data:messages}, options)
                }
            }
        } catch (error) {
            console.log(error)
            return {
                suscces:false,
                error:error
            }
            
        }
     

    }
}
module.exports = (options) => new firebaseadmin(options);
// var jks = 
// jks.sendNotificationToUser({
//     messages:{
//         clickAction:jks.clickActions.clientInqueryList
//     }
// })