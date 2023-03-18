+ Các kiến thức cần biết:
+ Khi client login thì ta sẽ có userId, nếu không login thì userId cũng được tạo ra và cache vào redis, save vào cookie vvv ta có thể dùng socket.io để bắt sự kiện còn onl của userId để xóa sau
khi đã xử lí các tác vụ với userId
+ redis Atom là tính nguyên tử của redis có nghĩa chỉ thực hiện các hành đồng giống nhau 1 lần, tránh trường hợp có cả triệu người click vào xem trong 1mls mà hệ thông không set dc view
+ Chế độ set NX và EX : nx không thể set lại redis khi thời gian ex của biến còn
+ Giari thích thực hiện:
+ set biến vid với syntax là set idVid 0  để khởi tạo biến có key là idvid và value là lượt view
+ Khi xem vid gửi req để sét 1 biến trong redis với syntax là   x 1 nx ex 60 có nghĩa là tạo ra 1 biến có key là x value là 1 biến này không thể set lại khi chưa tự động xóa thời gian
tự động xóa của biến là 60s
+ Thì nếu set thành công thì +1 view cho vid đang xem, nếu không hợp lệ thì thôi
+ Từ lượt view ta sắp xếp các vid nổi bật hot cho phía client xem :V

+ Đùa thôi đó vẫn là cách tính view đơn giản, còn các hệ thống lớn như youtube thay idUser = iplocaltion, và thêm nhiều tham số khác... Và quan trọng họ sẽ tính lại view sau 1 thời gian nếu thấy không ổn:V
+ Với mình tìm hiểu fake ip gần như không có tác dụng khi lượt tính view được dựa trên các thuật toán như: phân tích hành vi, đối chiếu thông tin ip... 