# Figma MCP to UI Code Generator

## **Use Case**  
Use this prompt to **generate high-quality, reusable UI code** from Figma designs.  
Helpful for **converting Figma designs to maintainable code** with proper component architecture.

## **Prompt**  
Analyze the provided Figma design and generate complete, production-ready code that follows component-based architecture best practices. Create reusable widgets and a comprehensive UI component kit suitable for a large-scale application.

Key requirements:
1. Extract the design system's color palette, typography, spacing, and other design tokens into configurable theme variables - avoid hardcoded values.
2. Identify repeating UI patterns and create reusable components with appropriate props/parameters.
3. Structure the code to be maintainable with proper separation of concerns (presentation, logic, theming).
4. Handle image assets and resources systematically, including guidance for asset management.
   - Name all SVG and asset files with semantic, human-readable names (e.g., "login_background.svg" instead of "image_12.svg")
   - Organize assets into logical folders based on their purpose or related components
5. Implement proper localization for text content:
   - Scan the current project structure to identify the existing localization system
   - For text in designs, search for matching keys in existing localization files
   - If a matching text value exists in localization files, use that key instead of hardcoding the string
   - If no matching value exists, suggest adding a new localization key with a semantic name
6. Include clear documentation for the component API and usage examples.

Follow a systematic approach:
1. First, analyze the design to identify the component hierarchy and design patterns
2. Extract all design tokens (colors, typography, spacing, etc.) into a theme system
3. Scan the project for existing localization framework and patterns
4. Process and organize all assets with semantic naming conventions
5. Create base/primitive components that serve as building blocks
6. Implement composite components using the primitives
   - Use localization keys for all text content when possible
   - Reference assets using the organized structure
7. Assemble page layouts using the component library
8. Document the component API and provide usage examples

Programming language/framework to use: {{FRAMEWORK}}
Design URL or file: {{DESIGN_URL}}
Additional requirements: {{REQUIREMENTS}}

## **Variables**  
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{FRAMEWORK}}` | Target framework for code generation | "Flutter", "React with Tailwind", "HTML/CSS/JS" |
| `{{DESIGN_URL}}` | URL or path to Figma design | "https://www.figma.com/file/abc123/MyDesign" |
| `{{REQUIREMENTS}}` | Additional project-specific requirements | "Support dark mode, responsive design, accessibility compliance" |

## **Expected Output**  
- A **complete UI component kit** with reusable widgets
- **Theme system** with extracted design tokens (colors, typography, spacing)
- **Proper file structure** for maintainable code
- **Asset management strategy** with:
  - Human-readable, semantic naming for all assets
  - Logical folder organization
  - Guidelines for asset usage in components
- **Integrated localization** that:
  - Uses existing localization framework in the project
  - Maps design text to existing localization keys when available
  - Suggests new localization keys for unmapped text
  - Avoids hardcoded strings whenever possible
- **Component documentation** with API details and usage examples
- **No hardcoded values** for styles or dimensions
- **Responsive and adaptive** UI implementation

## **Tags**  
#figma #ui-development #component-based-architecture #design-system #code-generation
