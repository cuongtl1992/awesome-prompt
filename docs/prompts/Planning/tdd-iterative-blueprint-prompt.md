# Iterative Project Implementation Blueprint

## **Use Case**  
Use this prompt to **build a detailed roadmap** for a software development project.  
Helpful when you need to **break down a project** into steps that can be easily implemented and tested.

## **Prompt**  
Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. Review the results and make sure that the steps are small enough to be implemented safely with strong testing, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project.  From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step in a test-driven manner. Prioritize best practices, incremental progress, and early testing, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.  Make sure and separate each prompt section. Use markdown. Each prompt should be tagged as text using code tags. The goal is to output prompts, but context, etc is important as well.  `{{spec}}`

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{spec}}` | Project specification to be broken down | "A RESTful API for a blog with user authentication, post creation/editing, and commenting functionality" |

## **Expected Output**  
- **Detailed implementation plan** for the project
- Steps **broken down into small parts**, building on each other
- Each step **small enough for safe testing**, **large enough to move the project forward**
- List of **separate prompts** for an LLM to implement each step
- Emphasis on **best practices**, **incremental progress**, and **early testing**
- Each prompt **marked with code tags**
- No **hanging or orphaned code** that isn't integrated into a previous step

## **Tags**  
#project-planning #implementation #tdd #incremental-development

---

*Copyright: Inspired by [Harper's LLM Codegen Workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)*