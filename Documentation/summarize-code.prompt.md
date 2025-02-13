# Summarize Code  

## **Use Case**  
Sử dụng prompt này để **tóm tắt code một cách ngắn gọn và dễ hiểu**, giúp developer nhanh chóng nắm bắt chức năng, logic và mục đích của đoạn mã.  
Hữu ích khi cần **đọc code cũ, review pull request, hoặc hiểu một codebase lớn** mà không mất nhiều thời gian.  

## **Prompt**  
Summarize the following code written in {{language}}.
Provide a brief explanation of its functionality, key logic, and potential improvements if necessary.
{{code_snippet}}

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | Python / JavaScript / Go / C# |
| `{{code_snippet}}` | Đoạn code cần tóm tắt | Function hoặc Class code |

## **Expected Output**  
- **Mô tả tổng quan về chức năng của code**.  
- **Giải thích các bước quan trọng trong logic code**.  
- **Nêu ra các điểm mạnh hoặc hạn chế** (nếu có thể tối ưu hơn).  
- **Tóm tắt theo cách dễ hiểu, tránh quá kỹ thuật nếu không cần thiết**.  

## **Tags**
#code-summary #code-explanation #readability #understanding-code