# Generate API Documentation  

## **Use Case**  
Sử dụng prompt này để **tự động tạo tài liệu API từ code hoặc mô tả API**.  
Hữu ích khi cần **document REST API, GraphQL API hoặc gRPC** một cách rõ ràng, chuẩn RESTful, OpenAPI, hoặc theo format Markdown.  

## **Prompt**  
Generate API documentation for the following`{{api_type}}` API written in`{{language}}`.
Ensure the documentation includes endpoints, request/response examples, authentication details, and error handling.
`{{api_code_or_description}}`


## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{api_type}}` | Loại API | REST / GraphQL / gRPC |
| `{{language}}` | Ngôn ngữ lập trình | Node.js / Go / Python / C# |
| `{{api_code_or_description}}` | Định nghĩa API (Swagger, OpenAPI, code) | Express.js hoặc FastAPI code |

## **Expected Output**  
- **Tài liệu API chi tiết, dễ hiểu**, bao gồm:  
  - Mô tả endpoint, phương thức HTTP  
  - Query parameters, request/response payload  
  - Authentication methods (JWT, OAuth, API Key)  
  - Error handling và response codes  
- **Cung cấp định dạng Markdown hoặc OpenAPI (YAML/JSON)**.  

## **Tags**
#api-documentation #swagger #openapi #rest #graphql #automation