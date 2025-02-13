# Suggest Best Practices  

## **Use Case**  
Sử dụng prompt này để **AI tự động phân tích code và đề xuất các best practices** phù hợp với **ngôn ngữ lập trình, framework, và tiêu chuẩn phát triển**.  
Hữu ích khi cần **cải thiện chất lượng code, đảm bảo maintainability, security, và performance** theo các tiêu chuẩn phổ biến như **SOLID, DRY, KISS, OWASP**.  

## **Prompt**  
Analyze the following code written in`{{language}}`.
Suggest improvements based on best practices for`{{focus_areas}}`.
Provide clear explanations and alternative implementations if necessary.
`{{code_snippet}}`

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | JavaScript / Python / Go / C# |
| `{{focus_areas}}` | Các tiêu chí cần tối ưu | Security, Performance, Code Readability |
| `{{code_snippet}}` | Đoạn mã cần phân tích | Function xử lý dữ liệu API |

## **Expected Output**  
- **Phân tích code dựa trên best practices** cho từng ngôn ngữ/framework.  
- **Đề xuất cải tiến giúp code dễ bảo trì, nhanh hơn, và bảo mật hơn**.  
- **Cung cấp ví dụ alternative implementation theo chuẩn best practices**.  
- **Nêu rõ lý do tại sao nên áp dụng cách tối ưu đó**.  

## **Tags**
#best-practices #clean-code #security #performance #maintainability