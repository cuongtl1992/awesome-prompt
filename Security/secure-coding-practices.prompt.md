# Secure Coding Practices  

## **Use Case**  
Sử dụng prompt này để **AI kiểm tra bảo mật trong code** và đề xuất cách khắc phục lỗ hổng.  
Hữu ích khi cần **đảm bảo an toàn cho ứng dụng web, API, hoặc hệ thống backend**.  

## **Prompt**  
Analyze the following code for security vulnerabilities in {{language}}:
{{code_snippet}}
Provide a detailed security assessment and recommended fixes.

## **Expected Output**  
- **Xác định các lỗ hổng bảo mật phổ biến**  
- **Gợi ý cách khắc phục theo chuẩn bảo mật OWASP**  
- **Tối ưu hoá xử lý input/output để tránh SQL Injection, XSS, CSRF**  

## **Tags**  
#security #vulnerability-analysis #owasp  
