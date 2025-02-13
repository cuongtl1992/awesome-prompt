# Find Security Issues  

## **Use Case**  
Sử dụng prompt này để **phát hiện các lỗ hổng bảo mật trong code**, giúp kiểm tra **các vấn đề liên quan đến SQL Injection, XSS, CSRF, hardcoded credentials, insecure dependencies, và logic bảo mật kém**.  
Hữu ích khi cần **review code trước khi deploy, kiểm tra bảo mật trong CI/CD pipeline hoặc audit hệ thống định kỳ**.  

## **Prompt**  
Analyze the following code for security vulnerabilities in`{{language}}`.
Identify potential risks, explain their impact, and provide secure alternatives.
`{{code_snippet}}`

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | Python / JavaScript / Go / C# |
| `{{code_snippet}}` | Đoạn code cần kiểm tra bảo mật | API, database queries, authentication logic |

## **Expected Output**  
- **Phát hiện các lỗ hổng bảo mật tiềm ẩn**.  
- **Giải thích rõ rủi ro của từng vấn đề** (ví dụ: SQL Injection có thể làm lộ dữ liệu).  
- **Cung cấp cách sửa lỗi và bảo vệ hệ thống tốt hơn**.  
- **Hướng dẫn best practices để tránh lỗi bảo mật tương tự trong tương lai**.  

## **Tags**
#security #vulnerability #secure-coding #sql-injection #xss #jwt #best-practices