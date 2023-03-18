+ Dùng mô hình pub-sub trong resid để sử lí
+ Mô tả khi nhận được req (ví dụ như là đơn đặt hàng), cache id đơn hàng vào redis từ redis dùng mô hình pub-sub và với time life là 5s viết 1 hàm nhận thì lúc này sẽ sử lí msg, nếu sau 5s từ msg ta sẽ có id từ đó check để xử lí đơn hàng
+ Có nhiều cách xử lí:
+ khi gửi có req ta có thể indexing vào db sau time delay ta có thể update lại
+ sau time delay ta đưa vào mesqueue rồi xử lí ...


+ redis-v: 3.1.2: Cẩn thẩn với mỗi v thì nếu không sẽ gây tốn time trong quá trình tìm hiểu công nghệ :V


