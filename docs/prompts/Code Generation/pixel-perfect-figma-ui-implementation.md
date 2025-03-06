# Pixel-Perfect Figma UI Implementation

## **Use Case**
Use this prompt to **generate pixel-perfect UI code** from Figma designs.  
Helpful for **implementing precise Figma designs** with exact visual matching and proper component architecture.

## **Prompt**
Implement this UI design from Figma with pixel-perfect accuracy, focusing exclusively on the app content and ignoring any device frame elements (status bar, home indicator, etc.).

Key requirements:

1. **EXACT VISUAL MATCHING**:
   - Match all colors precisely using hex codes from the design
   - Implement correct spacing, padding, and margins in dp/px as specified
   - Use the exact font styles (family, weight, size, line height)
   - Implement correct border radius values (4px for most elements)
   - Match component heights, widths, and proportions exactly

2. **COMPONENT IMPLEMENTATION**:
   - Create reusable components that match the design system
   - Implement proper state handling (normal, focused, error, disabled)
   - Ensure interactive elements have proper feedback states
   - Implement exact animations and transitions if specified

3. **ASSETS AND RESOURCES**:
   - CRITICAL: Download and implement all SVG assets directly from Figma using the export function
   - Verify SVG rendering in {{FRAMEWORK}} matches Figma exactly, especially for logos
   - If SVG implementation has issues, provide PNG alternatives at 1x, 2x, and 3x resolutions
   - Implement proper asset sizing with exact dimensions from the design
   - For logos, ensure proper spacing and alignment between logo mark and text components
   - Test all assets on different screen densities to ensure proper scaling

4. **TEXT AND TYPOGRAPHY**:
   - Use exact text content as shown in the design
   - Implement proper text truncation and overflow handling
   - Match text alignment and positioning precisely
   - Ensure font weights match exactly (400, 500, 600, 700)

5. **RESPONSIVE BEHAVIOR**:
   - Implement responsive layouts that maintain design integrity
   - Handle different screen sizes appropriately
   - Ensure touch targets meet minimum size requirements (48dp)
   - Test on both small and large screens to verify layout consistency

6. **ACCESSIBILITY**:
   - Implement proper semantic markup for accessibility
   - Ensure sufficient color contrast for text elements
   - Provide appropriate content descriptions for images

7. **TESTING AND VALIDATION**:
   - Include tests to verify visual accuracy
   - Validate implementation against design specifications
   - Test on multiple devices and screen sizes
   - Provide side-by-side comparison screenshots of implementation vs. design

8. **IMPLEMENTATION VERIFICATION**:
   - After implementing each major component, verify against Figma using overlay techniques
   - For complex components, provide progress updates with comparison screenshots
   - Address any visual discrepancies immediately before proceeding

9. **ASSET HANDLING**:
   - For complex graphical elements like logos, prefer using a single SVG file rather than breaking it into separate components
   - Download and use complete SVG exports directly from Figma when available
   - Only decompose graphics into separate files when animation or interactive behavior requires it

Please reference the Figma design at all times during implementation and verify each component against the design before completion. Do not include any device frame elements in the implementation.

Figma design URL: `{{DESIGN_URL}}`
Target framework: `{{FRAMEWORK}}`
Additional requirements: `{{REQUIREMENTS}}`

## **Variables**
| Variable | Description | Example Value |
|----------|------------|--------------|
| `{{DESIGN_URL}}` | URL or path to Figma design | "https://www.figma.com/file/abc123/MyDesign" |
| `{{FRAMEWORK}}` | Target framework for implementation | "Flutter", "React", "SwiftUI", "Jetpack Compose" |
| `{{REQUIREMENTS}}` | Additional project-specific requirements | "Dark mode support, RTL language support, specific platform considerations" |

## **Expected Output**
- **Pixel-perfect implementation** of the Figma design
- **Reusable components** that match the design system
- **Properly implemented assets** with exact visual rendering
- **Precise typography** matching all design specifications
- **Responsive layouts** that maintain design integrity across screen sizes
- **Accessible implementation** with proper semantic markup
- **Validation evidence** with comparison screenshots
- **Implementation notes** documenting any technical considerations or solutions

## **Tags**
#figma #ui-implementation #pixel-perfect #design-system #visual-accuracy #component-architecture