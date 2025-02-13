# Log Analysis  

## **Use Case**  
Sử dụng prompt này để **phân tích log và xác định nguyên nhân lỗi hoặc vấn đề hiệu suất trong hệ thống**.  
Hữu ích khi cần **debug ứng dụng, tìm lỗi trong production logs, hoặc tối ưu hóa logging strategy** để dễ dàng theo dõi vấn đề.  

## **Prompt**  
Analyze the following log entries and identify potential issues in`{{system_type}}`.
Look for patterns, errors, performance bottlenecks, and security concerns.
Provide insights and suggest resolutions.
`{{log_data}}`

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{system_type}}` | Loại hệ thống | Web Server, API Gateway, Database |
| `{{log_data}}` | Dữ liệu log cần phân tích | Log từ Nginx, Docker, Application Logs |

## **Expected Output**  
- **Phân tích log chi tiết**, phát hiện lỗi, cảnh báo và pattern bất thường.  
- **Xác định các vấn đề về hiệu suất** như request chậm, lỗi database connection.  
- **Gợi ý cách xử lý lỗi và cải thiện logging strategy**.  
- **Tóm tắt log quan trọng theo timestamp và mức độ nghiêm trọng (INFO, WARNING, ERROR, CRITICAL)**.  

## **Example Output**  

📌 **Input Log Data:**  
```log
2024-02-07 14:32:10 ERROR [DB] Connection timeout while connecting to db.example.com
2024-02-07 14:32:12 WARN  [API] Slow response detected: GET /users took 1200ms
2024-02-07 14:32:15 INFO  [Auth] User login success: user_id=123
```
🔍 **Log Analysis Report:**
1️⃣ **[CRITICAL] Database Timeout Detected**
- Lỗi connection timeout có thể do database quá tải hoặc không khả dụng.
- 🔹 Fix: Kiểm tra database connection pool, tăng timeout hoặc sử dụng retry mechanism.

2️⃣ **[WARNING] Slow API Response**
- Request GET /users mất 1200ms, có thể do truy vấn SQL chậm.
- 🔹 Fix: Kiểm tra query optimization hoặc caching.
3️⃣ **[INFO] User Login Success**
- Không có vấn đề, nhưng cần kiểm tra nếu có nhiều login fail liên tiếp.

📌 **Security Check:**
- ✅ Không phát hiện lỗ hổng bảo mật, nhưng nên kiểm tra rate limiting với login API.

## **Tags**
#log-analysis #debugging #performance #monitoring #security