# Explain Codebase  

## **Use Case**  
Sử dụng prompt này để **phân tích và giải thích một codebase hoặc một phần code lớn**, giúp developer nhanh chóng hiểu được **cấu trúc, luồng dữ liệu, và các thành phần chính**.  
Hữu ích khi cần **onboard developer mới, review dự án cũ, hoặc hiểu nhanh cách hệ thống hoạt động** mà không cần đọc từng dòng code.  

## **Prompt**  
Analyze and explain the following codebase written in`{{language}}`.
Provide an overview of its architecture, main components, and how they interact.
Identify key functions, dependencies, and any notable patterns or best practices used.
`{{code_snippet}}`

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | Python / JavaScript / Go / C# |
| `{{code_snippet}}` | Codebase hoặc module cần giải thích | Một file hoặc nhiều file code |

## **Expected Output**  
- **Tóm tắt tổng quan về kiến trúc của codebase**.  
- **Mô tả cách các module/class/function chính tương tác với nhau**.  
- **Liệt kê các thư viện và dependency quan trọng**.  
- **Phân tích các pattern hoặc best practices đang được áp dụng**.  
- **Gợi ý cách cải thiện codebase nếu cần**.  

## **Tags**  
#codebase-explanation #architecture #best-practices #onboarding #software-design  
