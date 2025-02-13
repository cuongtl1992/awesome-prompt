# Generate CI/CD Script  

## **Use Case**  
Sử dụng prompt này để **tạo script CI/CD** giúp tự động hóa quá trình build, test, và deploy phần mềm.  
Hữu ích khi cần **cấu hình pipeline CI/CD** cho **GitHub Actions, GitLab CI/CD, Jenkins, CircleCI, hoặc n8n workflows**.  

## **Prompt**  
Generate a CI/CD pipeline script for`{{ci_cd_tool}}` to automate
the`{{pipeline_stages}}` for a`{{project_type}}` project using`{{language}}`.
Ensure best practices and security standards are followed.

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{ci_cd_tool}}` | Công cụ CI/CD | GitHub Actions / GitLab CI/CD / Jenkins / CircleCI |
| `{{pipeline_stages}}` | Các bước trong pipeline | Build, Test, Deploy |
| `{{project_type}}` | Loại dự án | Web App / API / Mobile App |
| `{{language}}` | Ngôn ngữ lập trình | JavaScript / GoLang / C# |
| `{{deployment_target}}` | Môi trường triển khai | AWS / Azure / Kubernetes / Docker |

## **Expected Output**  
- **Tạo pipeline hoàn chỉnh** dựa trên CI/CD tool được chọn.  
- **Bao gồm các bước quan trọng**: Build, Test, Deploy.  
- **Tích hợp security checks & performance optimizations**.  
- **Hỗ trợ deploy trên các môi trường AWS, Azure, Kubernetes, Docker**.  

## **Example Output**  

📌 **GitLab CI/CD - Deploy Dockerized App:**  
```yaml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - docker build -t my-app:${CI_COMMIT_SHA} .

test:
  stage: test
  script:
    - docker run --rm my-app:${CI_COMMIT_SHA} npm test

deploy:
  stage: deploy
  only:
    - main
  script:
    - docker push my-app:${CI_COMMIT_SHA}
    - kubectl apply -f k8s/deployment.yaml
```

## **Tags**
#ci-cd #automation #devops #github-actions #gitlab-ci #jenkins