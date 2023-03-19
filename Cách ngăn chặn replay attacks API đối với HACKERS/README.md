
+ lv 1
+ Kiến thức cần biết :
+ mã hóa là để ngăn chặn thông tin rò rỉ, chữ kí là để ngăn thông giả mạo
+ Mô tả:
+ B1 client có key và server có key.
+ B2 restapi với công thức md5(id...(thông tin gửi về server) & key(chữ kí) & time &nonce=SessionId-xxx )  gửi req   => giống như mã hóa api
+ B3 Giải mã rồi so sánh đúng key và time gửi req dưới 60s (ví dụ time trong api 7h30p0s thì api khi đến server phải trong 60 tiếp theo) và check xem cái 'SessionId-xxx' có tồn tại không ( mỗi lần call api sẽ tạo ra SessionId )  => trả thông tin :V
+ => Bảo mật api chỉ gọi được từ phía client trong 60s và chỉ call api được 1 lần duy nhất (trong thời gian onl web) :v xịn
--------------------------------------------------------------------------------
+ lv 2 : Giải quyết vấn đề key của client vs server, thuật toán trao đổi key Diffie Hellman 
+ Kiến thức cần biết : mã hóa đối xứng là 2 bên dùng chung 1 key để mã hóa và giải mã, mã hóa không đối xứng là bên gửi dùng key(a) để mã hóa và bên nhận dùng key(b) để giải mã 
+ khi vào app thì client tự khởi tạo key:
+ Mô tả:
+ client có key là A===1 (key này được tạo từ client secret key client )
+ server có key là B===2 ( secret key tương tự client)

+ keyPL = 3 key được công khai client và server đều có (là số nguyên tố)

+ KEY_CLIENTPL = A + keyPL = 4    (PL)

+ KEY_SERVERPL = B + keyPL = 5     (PL)

+ A_COMMON = B_COMMON = KEY_SERVERPL + A = KEY_CLIENTPL + B = 6  (access)

+ Thì cái (3,4,5) chính là chữ kí gửi kèm trong api đã được mã hóa
+ Từ 3,4,5 => thì client và server đã qui ước với nhau 1 cái key là 6
+ Trong thực tế giá trị 3,4,5 có khoảng cách lớn thì từ đó hacker không biết = cách nào có thể tạo ra 1 bộ số hợp lệ khác để
A_COMMON = B_COMMON

+ Với vl 1 + vl 2 thì làm sao hacker có thể replay attacks api với api được mã hóa theo kiểu họ không biết trước( key được dùng thuận toán để bảo vệ và thời gian req tới server trong thời gian nhất định và chỉ gọi được 1 lần nhờ 
vào SessionId ) => nói chung là quá khó (không thể với hiện tại) và đây là là basic của ct Diffie Hellman nâng cao thì dùng log,mod ...
+ nào công ty yêu cầu thì code :V
