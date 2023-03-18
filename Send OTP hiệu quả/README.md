+ Các bước send otp trong thực tế
+ B1: Dùng pakage otp-generator để tạo otp
+ B2: Mã hóa otp với genSalt = 10  (===10 là hợp lí nhất) rồi lưu vào db với expires ( thời gian) khoảng 60s
+ B3: Gửi otp cho client nếu client nhập otp trong khoảng thời gian otp còn thì services sẽ lấy otp rồi giải mã nếu hợp lệ => Xử lí, ngược lại báo lỗi
+ B4: OTP chỉ làm mới và được gửi lại nếu otp cũ đã mất :v

+ ~~~ nào cần làm thì ms code h học cái khác :V