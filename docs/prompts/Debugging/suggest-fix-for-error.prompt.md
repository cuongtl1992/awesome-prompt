# Suggest Fix for Error  

## **Use Case**  
Sử dụng prompt này để **phân tích lỗi trong code hoặc log và đề xuất cách khắc phục**.  
Hữu ích khi cần **tìm nguyên nhân lỗi, đề xuất cách sửa, và tối ưu hóa code để tránh lỗi tương tự trong tương lai**.  

## **Prompt**  
Analyze the following error message from`{{language}}` and suggest a fix.
Explain the root cause and provide an improved version of the code if applicable.
`{{error_message}}`

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình hoặc hệ thống | Python / JavaScript / Go / C# |
| `{{error_message}}` | Lỗi cần phân tích | "TypeError: cannot read property 'x' of undefined" |

## **Expected Output**  
- **Phân tích nguyên nhân gây lỗi** và giải thích chi tiết.  
- **Cung cấp mã sửa lỗi nếu có thể**.  
- **Gợi ý best practices để tránh lỗi tương tự trong tương lai**.  
- **Nếu lỗi liên quan đến môi trường (dependency, runtime), đề xuất cách kiểm tra và sửa**.  

## **Tags**
#error-fixing #debugging #troubleshooting #bugfix #best-practices