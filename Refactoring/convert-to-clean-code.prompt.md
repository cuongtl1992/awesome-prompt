# Convert to Clean Code  

## **Use Case**  
Sử dụng prompt này để **tối ưu hóa code theo nguyên tắc Clean Code**, giúp cải thiện readability, maintainability và performance.  
Hữu ích khi cần **loại bỏ code trùng lặp, sử dụng tên biến/hàm hợp lý, tổ chức lại logic một cách rõ ràng và áp dụng best practices**.  

## **Prompt**  
Analyze the following code and refactor it to follow Clean Code principles.
Ensure better readability, maintainability, and performance while keeping the same functionality.
{{code_snippet}}
Provide a detailed explanation of the improvements and why they are beneficial.

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | Python / JavaScript / Go / C# |
| `{{code_snippet}}` | Đoạn mã cần tối ưu | Function chứa nhiều logic phức tạp, biến tên không rõ ràng |

## **Expected Output**  
- **Refactor code theo Clean Code principles**.  
- **Loại bỏ logic dư thừa, tên biến/hàm rõ ràng hơn**.  
- **Tách code phức tạp thành các hàm nhỏ hơn, dễ hiểu hơn**.  
- **Giữ nguyên đầu ra nhưng tổ chức lại cấu trúc hợp lý hơn**.  

## **Tags**
#clean-code #refactoring #best-practices #readability #maintainability