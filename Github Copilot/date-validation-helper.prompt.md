# Validate a Date in the Codebase  

## **Use Case**  
Sử dụng prompt này để **tìm kiếm các hàm hoặc module hỗ trợ kiểm tra tính hợp lệ của ngày tháng** trong codebase.  
Hữu ích khi cần **kiểm tra, sửa lỗi hoặc chuẩn hóa xử lý ngày tháng** trong dự án.  

## **Prompt**  
@workspace how can I validate a date?

Hãy tìm kiếm **các hàm, lớp hoặc module hỗ trợ kiểm tra ngày tháng** trong codebase hiện tại.  
Nếu có nhiều cách xử lý, vui lòng cung cấp **mô tả chi tiết và các ví dụ thực tế**.  

## **Expected Output**  
- Liệt kê **các hàm/method hiện có** để kiểm tra ngày hợp lệ.  
- Nếu chưa có sẵn helper, đề xuất **cách viết một hàm mới**.  
- Nếu có thư viện bên ngoài hỗ trợ (moment.js, date-fns, .NET DateTime, Go time package, v.v.), cung cấp **cách sử dụng chúng**.  
- Hướng dẫn kiểm tra lỗi ngày tháng phổ biến (**định dạng sai, ngày không hợp lệ, ngày quá khứ/tương lai**).  

## **Example Output**  
📌 **Tìm thấy helper trong `dateUtils.js`**  
```javascript
export function isValidDate(dateString) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
```

## **Tags**
#date-validation #workspace #utilities #codebase-search #validation