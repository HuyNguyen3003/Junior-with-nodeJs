SQL VS NOSQL

+ scheme design
+ relationship
+ performance 
+ save data


+ config 1:1, 1:n, n:m vào Mongo
--------------------------------------
+ Design product model 
+ lv1: The Polymorphic Pattern => phải đánh index để tìm thuộc tính cho sau này => mở rộng nhiều khó kiểm soát

<!-- {
    "_id": ObjectId("62a17a9edc2048a3b9eb654c"),
    "code": 'CAMERA-0001',
    "name": "X7800",
    "brand": "Cannon",
    "description": "The mamera with the highest resolution",
    "release_date": ISODate("2022-06-09T04:44:14.544Z"),
    "weight_g": 365,
    "specs": [
        {"resolution_Mp": 36},
        {"technology": "ANS-3000"},
        {"height": 98},
        {"width": 125},
        {"depth": 70},
        {"video_resolution": "1920 x 1080"}
        ...
    ]
},
{
    "_id": ObjectId("62a17a9edc2048a3b9eb654d"),
    "code": "NGK-12345",
    "name": "Nha gia kim",
    "brand": "Amazon",
    "description": "A book to understand about me",
    "release_date": ISODate("2022-06-09T04:44:14.544Z"),
    "weight_g": 365,
    "specs": [
        {"author": "Paulo Coelho"},
        {"editor": "Amazon"},
        {"pages": 100}
        ...
    ]
}, -->

+ lv2: Attribute model. => khỏi cần index 
    <!-- "specs": [
        {"resolution_Mp": 36},
        {"technology": "ANS-3000"},
        {"height": 98},
        {"width": 125},
        {"depth": 70},
        {"video_resolution": "1920 x 1080"}
        ...
    ] -->

----------------------------------------------------------------

- quản lí hàng tồn kho
+ đặt hàng -> giảm kho -> ! thanh toán (2h)  -> tăng lại kho
+ đặt hang -> thanh toán -> giảm kho
+ => giữa vào từng sản phần hoàn cảnh thì config cho từng loại   

