# Check Performance Issues  

## **Use Case**  
Sử dụng prompt này để **phát hiện các vấn đề hiệu suất trong codebase** và đề xuất cách tối ưu hóa.  
Hữu ích khi cần **tối ưu hóa tốc độ thực thi, giảm memory usage, hoặc cải thiện database query performance**.  

## **Prompt**  
Analyze the following code for performance bottlenecks in`{{language}}`.
Identify inefficiencies and suggest optimizations for better execution speed and resource management.
`{{code_snippet}}`
Ensure the solution follows best practices and avoids unnecessary complexity.

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | JavaScript / GoLang / C# / Python |
| `{{code_snippet}}` | Đoạn mã cần phân tích | Function xử lý dữ liệu lớn |
| `{{optimization_goal}}` | Mục tiêu tối ưu | Giảm thời gian chạy / Giảm CPU load / Giảm memory footprint |

## **Expected Output**  
- **Xác định các bottleneck gây chậm hiệu suất**.  
- **Gợi ý cách tối ưu hóa**, ví dụ: cải thiện thuật toán, tránh vòng lặp dư thừa, caching dữ liệu.  
- **Đề xuất cách sử dụng công cụ profiling** (e.g., Chrome DevTools, pprof, BenchmarkDotNet).  
- **Kiểm tra memory leaks và race conditions nếu có**.  

## **Example Output**  
📌 **Phân tích hiệu suất của một function trong JavaScript:**  
```javascript
function slowFunction(arr) {
  return arr.filter(item => expensiveComputation(item));
}
```
🔍 Issue: expensiveComputation chạy trên toàn bộ mảng mà không caching kết quả.
✅ Optimized Version (Memoization & Parallel Processing):
```javascript
const cache = new Map();
function optimizedFunction(arr) {
  return arr.filter(item => {
    if (cache.has(item)) return cache.get(item);
    const result = expensiveComputation(item);
    cache.set(item, result);
    return result;
  });
}
```

## **Tags**
#performance #optimization #profiling #memory-usage #scalability