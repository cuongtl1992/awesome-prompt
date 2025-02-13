# Generate API Endpoint  

## **Use Case**  
Sử dụng prompt này để **tạo một API endpoint hoàn chỉnh** theo yêu cầu.  
Hữu ích khi cần **tạo nhanh endpoint REST/GraphQL** theo chuẩn best practices.  

## **Prompt**  
Generate a`{{api_type}}` API endpoint in`{{language}}` using`{{framework}}`.
It should handle`{{http_method}}` requests at`{{endpoint}}`,
and interact with the`{{database}}` using`{{orm_library}}`.

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{api_type}}` | Loại API | REST / GraphQL |
| `{{language}}` | Ngôn ngữ lập trình | GoLang / JavaScript |
| `{{framework}}` | Framework API | Gin / Express.js |
| `{{http_method}}` | Loại request | GET / POST / PUT / DELETE |
| `{{endpoint}}` | URL endpoint | `/users/login` |
| `{{database}}` | Cơ sở dữ liệu | PostgreSQL |
| `{{orm_library}}` | Thư viện ORM | GORM / Prisma |

## **Expected Output**  
- Một API endpoint **hoàn chỉnh** theo thông số đã cung cấp  
- Tích hợp **validation** và **error handling**  
- Hỗ trợ **authentication & authorization** nếu cần  

## **Tags**  
#api #code-generation #backend
