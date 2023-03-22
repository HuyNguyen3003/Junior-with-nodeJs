+ cache vào redis gồm có key,value, ttl (time)

+ 2 trường hợp làm cho redis die : 
+ vps, hosting sập
+ 1 lượt lớn dữ liệu đi vào mà ttl của key redis hết hàng -> sập db -> sập reids

+ Cách khác phục:
+ config ttl hợp lí để ttl không hết hạng đồng thời 
+ khóa lượng truy cập đồng thời khi redis hết hạng
+ khóa cache : clone với ttl = forever