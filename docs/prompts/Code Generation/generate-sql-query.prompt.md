# Generate SQL Query  

## **Use Case**  
Sử dụng prompt này để **tạo truy vấn SQL tự động** dựa trên yêu cầu cụ thể.  
Hữu ích khi cần **tạo nhanh các truy vấn SELECT, INSERT, UPDATE, DELETE, JOIN**, hoặc tối ưu hóa SQL query.  

## **Prompt**  
Generate an SQL query for`{{operation}}` on the`{{table_name}}` table.
The query should`{{conditions}}` and use`{{joins}}` if applicable.
Ensure the query is optimized for`{{database_type}}`.


## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{operation}}` | Loại truy vấn | SELECT / INSERT / UPDATE / DELETE |
| `{{table_name}}` | Bảng dữ liệu | users / orders / transactions |
| `{{conditions}}` | Điều kiện lọc dữ liệu | WHERE age > 30 AND status = 'active' |
| `{{joins}}` | Kiểu JOIN (nếu có) | LEFT JOIN orders ON users.id = orders.user_id |
| `{{database_type}}` | Loại database | MySQL / PostgreSQL / SQL Server / SQLite |

## **Expected Output**  
- Một **SQL query hoàn chỉnh** dựa trên yêu cầu đầu vào.  
- **Tối ưu hóa truy vấn** cho loại database được chọn.  
- **Thêm index, tránh truy vấn dư thừa**, nếu cần.  
- **Gợi ý cách cải thiện hiệu suất** (nếu truy vấn phức tạp).  

## **Example Output**  

📌 **Truy vấn SELECT đơn giản:**  
```sql
SELECT id, name, email FROM users WHERE age > 30 AND status = 'active';
```

📌 **Truy vấn có JOIN:**
```sql
SELECT users.name, orders.total_price  
FROM users  
LEFT JOIN orders ON users.id = orders.user_id  
WHERE users.status = 'active';
```

📌 **Tối ưu hóa với INDEX (MySQL/PostgreSQL):**

```sql
CREATE INDEX idx_users_status ON users(status);
```

## **Tags**
#sql #database #query-generation #performance #automation
