var axios = require('axios');
function generateOTP(){

var data = JSON.stringify({
  "originator": "SignOTP",
  "recipient": "9410198947",
  "content": "Greetings from D7 API, your mobile verification code is: 787878",
  "expiry": "6000",
  "data_coding": "text"
});

var config = {
  method: 'post',
  url: 'https://api.d7networks.com/verify/v1/otp/send-otp',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiYzk4NmU5N2ItNTc4Zi00YjM2LWJlY2MtMzA1YTk0Y2RiOWQyIn0.Z0Pfff1htve3g2ou5t14QU_wCT-CkLt3UlZBzXybFRw', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}

function verifyOTP(){
    var data = JSON.stringify({
        "otp_id": "8d963dbf-d655-4fe6-9157-48885a036050",
        "otp_code": 435986
      });
      
      var config = {
        method: 'post',
        url: 'https://api.d7networks.com/verify/v1/otp/verify-otp',
        headers: { 
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoLWJhY2tlbmQ6YXBwIiwic3ViIjoiYzk4NmU5N2ItNTc4Zi00YjM2LWJlY2MtMzA1YTk0Y2RiOWQyIn0.Z0Pfff1htve3g2ou5t14QU_wCT-CkLt3UlZBzXybFRw', 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

}

generateOTP();
// verifyOTP();