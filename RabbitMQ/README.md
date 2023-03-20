+ docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3.11-management
+ Giảm tải hệ thống
+ Mô hình Publish Subscribe  => tạo namequeue tạm thời rồi, tự del
+ TOPIC : nâng cao hơn của Publish Subscribe kí tự như *,# để tùy chọn gửi msg cho các client Subscribe


+  durable: false  || true nếu muốn data ko mất khi reset rabbitmq
+ expiration : x  time nếu sau 0,000x s không báo nhận được sẽ tự xóa 
+  noAck: true : xác nhận đã nhận được