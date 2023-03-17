tool apache giúp gửi 40 làn req 1 rần có 20 req: ab -n 40 -c 20 http://localhost:3000/order

- Xử lí bài toán có nhiều người đặt hàng khi còn 1 sản phẩm:
+ thương mại: liên kết với sàn thương mại khác để lấy thêm hàng
+ dev: Ngày trước khi dùng redis thì khi gửi quá nhiều req trong 1 mili giây thì với việc xử lí đa luồn không tốt thì sẽ diễn ra tình trạng báo thành công mặt dù đã hết hàng thì để khắc phục, chúng ta dùng tính nguyên tử của redis tức là chỉ lặp lại hành động giống như vậy 1 lần duy nhất, nhưng với hiện tại ngày (17/3/2023) redis được cập nhập thì khi tình trạng có quá nhiều req thì server redis sẽ báo lỗi cách khắc phục là 'client.quit()' để thoát redis khi điều kiện sai, còn việc xử dụng tính nguyên tử của redis lại dễ xảy ra việc bất động bộ, nên cẩn thẩn khi dùng.
+ Kinh nghiệm thu được: công nghệ cập nhập liên tục kiến thức hôm qua có thể hôm nay phải sửa
