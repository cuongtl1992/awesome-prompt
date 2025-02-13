"use strict";(self.webpackChunkawesome_prompt_library=self.webpackChunkawesome_prompt_library||[]).push([[9927],{7963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"prompts/Code Review/check-performance-issues.prompt","title":"Check Performance Issues","description":"Use Case","source":"@site/docs/prompts/Code Review/check-performance-issues.prompt.md","sourceDirName":"prompts/Code Review","slug":"/prompts/Code Review/check-performance-issues.prompt","permalink":"/docs/prompts/Code Review/check-performance-issues.prompt","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"sidebar","previous":{"title":"Generate Unit Tests","permalink":"/docs/prompts/Code Generation/generate-unit-tests.prompt"},"next":{"title":"AI Code Quality Review","permalink":"/docs/prompts/Code Review/review-code-quality.prompt"}}');var s=t(4848),i=t(8453);const c={},o="Check Performance Issues",l={},a=[{value:"<strong>Use Case</strong>",id:"use-case",level:2},{value:"<strong>Prompt</strong>",id:"prompt",level:2},{value:"<strong>Variables</strong>",id:"variables",level:2},{value:"<strong>Expected Output</strong>",id:"expected-output",level:2},{value:"<strong>Example Output</strong>",id:"example-output",level:2},{value:"<strong>Tags</strong>",id:"tags",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"check-performance-issues",children:"Check Performance Issues"})}),"\n",(0,s.jsx)(n.h2,{id:"use-case",children:(0,s.jsx)(n.strong,{children:"Use Case"})}),"\n",(0,s.jsxs)(n.p,{children:["S\u1eed d\u1ee5ng prompt n\xe0y \u0111\u1ec3 ",(0,s.jsx)(n.strong,{children:"ph\xe1t hi\u1ec7n c\xe1c v\u1ea5n \u0111\u1ec1 hi\u1ec7u su\u1ea5t trong codebase"})," v\xe0 \u0111\u1ec1 xu\u1ea5t c\xe1ch t\u1ed1i \u01b0u h\xf3a.",(0,s.jsx)(n.br,{}),"\n","H\u1eefu \xedch khi c\u1ea7n ",(0,s.jsx)(n.strong,{children:"t\u1ed1i \u01b0u h\xf3a t\u1ed1c \u0111\u1ed9 th\u1ef1c thi, gi\u1ea3m memory usage, ho\u1eb7c c\u1ea3i thi\u1ec7n database query performance"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"prompt",children:(0,s.jsx)(n.strong,{children:"Prompt"})}),"\n",(0,s.jsxs)(n.p,{children:["Analyze the following code for performance bottlenecks in",(0,s.jsx)(n.code,{children:"{{language}}"}),".\nIdentify inefficiencies and suggest optimizations for better execution speed and resource management.\n",(0,s.jsx)(n.code,{children:"{{code_snippet}}"}),"\nEnsure the solution follows best practices and avoids unnecessary complexity."]}),"\n",(0,s.jsx)(n.h2,{id:"variables",children:(0,s.jsx)(n.strong,{children:"Variables"})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Example Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{{language}}"})}),(0,s.jsx)(n.td,{children:"Ng\xf4n ng\u1eef l\u1eadp tr\xecnh"}),(0,s.jsx)(n.td,{children:"JavaScript / GoLang / C# / Python"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{{code_snippet}}"})}),(0,s.jsx)(n.td,{children:"\u0110o\u1ea1n m\xe3 c\u1ea7n ph\xe2n t\xedch"}),(0,s.jsx)(n.td,{children:"Function x\u1eed l\xfd d\u1eef li\u1ec7u l\u1edbn"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{{optimization_goal}}"})}),(0,s.jsx)(n.td,{children:"M\u1ee5c ti\xeau t\u1ed1i \u01b0u"}),(0,s.jsx)(n.td,{children:"Gi\u1ea3m th\u1eddi gian ch\u1ea1y / Gi\u1ea3m CPU load / Gi\u1ea3m memory footprint"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"expected-output",children:(0,s.jsx)(n.strong,{children:"Expected Output"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"X\xe1c \u0111\u1ecbnh c\xe1c bottleneck g\xe2y ch\u1eadm hi\u1ec7u su\u1ea5t"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"G\u1ee3i \xfd c\xe1ch t\u1ed1i \u01b0u h\xf3a"}),", v\xed d\u1ee5: c\u1ea3i thi\u1ec7n thu\u1eadt to\xe1n, tr\xe1nh v\xf2ng l\u1eb7p d\u01b0 th\u1eeba, caching d\u1eef li\u1ec7u."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u0110\u1ec1 xu\u1ea5t c\xe1ch s\u1eed d\u1ee5ng c\xf4ng c\u1ee5 profiling"})," (e.g., Chrome DevTools, pprof, BenchmarkDotNet)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ki\u1ec3m tra memory leaks v\xe0 race conditions n\u1ebfu c\xf3"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example-output",children:(0,s.jsx)(n.strong,{children:"Example Output"})}),"\n",(0,s.jsxs)(n.p,{children:["\ud83d\udccc ",(0,s.jsx)(n.strong,{children:"Ph\xe2n t\xedch hi\u1ec7u su\u1ea5t c\u1ee7a m\u1ed9t function trong JavaScript:"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function slowFunction(arr) {\n  return arr.filter(item => expensiveComputation(item));\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"\ud83d\udd0d Issue: expensiveComputation ch\u1ea1y tr\xean to\xe0n b\u1ed9 m\u1ea3ng m\xe0 kh\xf4ng caching k\u1ebft qu\u1ea3.\n\u2705 Optimized Version (Memoization & Parallel Processing):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const cache = new Map();\nfunction optimizedFunction(arr) {\n  return arr.filter(item => {\n    if (cache.has(item)) return cache.get(item);\n    const result = expensiveComputation(item);\n    cache.set(item, result);\n    return result;\n  });\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tags",children:(0,s.jsx)(n.strong,{children:"Tags"})}),"\n",(0,s.jsx)(n.p,{children:"#performance #optimization #profiling #memory-usage #scalability"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);