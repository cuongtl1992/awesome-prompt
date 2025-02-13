# Simplify Complex Function  

## **Use Case**  
Sử dụng prompt này để **đơn giản hóa một hàm phức tạp** bằng cách **tối ưu hóa logic, giảm số dòng code, và cải thiện readability** mà vẫn giữ nguyên chức năng.  
Hữu ích khi cần **cải thiện maintainability, loại bỏ code dư thừa, hoặc tái cấu trúc code theo best practices**.  

## **Prompt**  
Analyze the following function and simplify it while preserving functionality.
Refactor it using best practices for {{language}}, improving readability, performance, and maintainability.
{{code_snippet}}


## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | Python / JavaScript / Go / C# |
| `{{code_snippet}}` | Hàm cần đơn giản hóa | Function dài, nhiều vòng lặp hoặc điều kiện lồng nhau |

## **Expected Output**  
- **Loại bỏ logic dư thừa hoặc trùng lặp**.  
- **Chia nhỏ code phức tạp thành các hàm dễ đọc hơn (Refactor)**.  
- **Sử dụng các phương pháp tối ưu như functional programming, caching, hoặc pattern phù hợp**.  
- **Giữ nguyên đầu ra của hàm nhưng tối ưu cách triển khai**.  

## **Tags**
#refactoring #clean-code #optimization #maintainability #best-practices