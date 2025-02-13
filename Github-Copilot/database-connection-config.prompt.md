# Database Connection String Configuration  

## **Use Case**  
Sử dụng prompt này để tìm hiểu **vị trí và cách cấu hình chuỗi kết nối cơ sở dữ liệu** trong một dự án.  
Hữu ích khi cần **xác định, kiểm tra hoặc cập nhật cấu hình kết nối** với database trong ứng dụng.  

## **Prompt**  
@workspace where is database connecting string configured?

Hãy giải thích **vị trí** và **cách cấu hình** chuỗi kết nối cơ sở dữ liệu trong workspace hiện tại.  
Nếu có nhiều phương pháp thiết lập, vui lòng cung cấp **mô tả chi tiết cho từng cách**.  

## **Expected Output**  
- Xác định **tệp hoặc vị trí** chứa chuỗi kết nối cơ sở dữ liệu.  
- Cung cấp **các ví dụ cụ thể** về cách cấu hình.  
- Nếu có **biến môi trường**, chỉ ra cách thiết lập chúng.  
- Hướng dẫn kiểm tra **kết nối và lỗi thường gặp**.  

## **Example Output**  
📌 **Tìm thấy chuỗi kết nối trong `appsettings.json`**  
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=myServerAddress;Database=myDB;User Id=myUsername;Password=myPassword;"
  }
}
```

## **Tags**
#database #configuration #connection-string #workspace #devops