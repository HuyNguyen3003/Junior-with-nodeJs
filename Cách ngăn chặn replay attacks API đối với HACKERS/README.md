+ Hiểu đơn giản là như sau :V
+ B1 client lấy key từ be.
+ B2 restapi với công thức md5(id...(thông tin gửi về server) & key & time &nonce=SessionId-xxx )  gửi req   => giống như mã hóa api
+ B3 Giải mã rồi so sánh đúng key và time gửi req dưới 60s (ví dụ time trong api 7h30p0s thì api khi đến server phải trong 60 tiếp theo) và check xem cái 'SessionId-xxx' có tồn tại không ( mỗi lần call api sẽ tạo ra SessionId )  => trả thông tin :V
+ => Bảo mật api chỉ gọi được từ phía client trong 60s và chỉ call api được 1 lần duy nhất (trong thời gian onl web) :v xịn
