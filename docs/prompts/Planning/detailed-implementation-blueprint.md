# Detailed Implementation Blueprint

## **Use Case**  
Use this prompt to **create an incremental development plan** for your software project.  
Helpful for **breaking down complex projects** into manageable, implementable steps.

## **Prompt**  
Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. review the results and make sure that the steps are small enough to be implemented safely, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project. From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step. Prioritize best practices, and incremental progress, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step. Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well. `{{SPEC}}`

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{SPEC}}` | Project specification to implement | "A task management web application with user authentication, task creation, assignment, and status tracking" |

## **Expected Output**  
- A **comprehensive implementation plan** with clear, logical steps
- Steps **broken down into manageable chunks** that build incrementally
- A **series of LLM prompts** for implementing each step
- Emphasis on **best practices** and **gradual complexity increase**
- All code **properly integrated** with no orphaned components
- Prompts **clearly separated and marked** with code tags

## **Tags**  
#implementation-plan #code-generation #incremental-development #best-practices

---

*Copyright: Inspired by [Harper's LLM Codegen Workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)*
