+ 1 Tách db vs server : giảm áp lực hệ thống
+ 2 Clone thêm server và dùng Load balancing : điều hướng, cân bằng tải 
+ 3 Clone db phân loại db write và db read các db sẽ đươc asyn: vì yêu cầu đọc > gi 
+ 4 Thêm elasticsearch để phục vụ yêu cầu search thông tin và được đồng bộ bởi db(những data cần search) : vì db không search tốt
+ 5 Cache data (redis) : hạn chế số lần gọi db
----------------------------------------------------------------------
+ Mở rộng:
+ msgQueue để giao tiếp từng phần
+ Mở rộng hệ thống theo chiều ngang hay chiều dọc ở từng bộ phận
+ Thiết kế hệ thống phân tán có qui mô lớn :V

