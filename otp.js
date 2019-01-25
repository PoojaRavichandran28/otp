const SendOtp = require('sendotp')
const sendOtp = new SendOtp('AuthKey','Otp for ur order is {{otp}}. Please donot share your otp')

sendOtp.send('917092125275', 'PRIIND', (err, data) => {
    console.log(data)
})