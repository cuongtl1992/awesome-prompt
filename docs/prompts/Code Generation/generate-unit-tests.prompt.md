# Generate Unit Tests  

## **Use Case**  
Sử dụng prompt này để **tự động tạo unit test** cho một đoạn mã cụ thể.  
Hữu ích khi cần **đảm bảo tính đúng đắn của code mà không viết test thủ công**.  

## **Prompt**  
Generate unit tests for the following function in`{{language}}` using`{{testing_framework}}`:
`{{code_snippet}}`
Ensure all edge cases and expected behavior are tested.

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{language}}` | Ngôn ngữ lập trình | C# / GoLang / JavaScript |
| `{{testing_framework}}` | Framework kiểm thử | xUnit / Jest / PyTest |

## **Expected Output**  
- Tạo unit test đầy đủ với **mocking/stubbing nếu cần**  
- Bao gồm **các trường hợp kiểm thử quan trọng**  
- Tích hợp **assertions để xác thực đầu ra**  

## **Tags**  
#unit-testing #test-automation #tdd  
