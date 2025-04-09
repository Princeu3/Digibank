/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/ai-agent/route";
exports.ids = ["app/api/ai-agent/route"];
exports.modules = {

/***/ "(rsc)/./app/api/ai-agent/route.ts":
/*!***********************************!*\
  !*** ./app/api/ai-agent/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/ai-agent */ \"(rsc)/./lib/ai-agent.ts\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/env */ \"(rsc)/./lib/env.ts\");\n\n\n\n\nasync function POST(request) {\n    // Ensure environment variables are accessed at runtime\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n    try {\n        // Check API key availability\n        const { GROQ_API_KEY } = await (0,_lib_env__WEBPACK_IMPORTED_MODULE_3__.getServerEnv)();\n        if (!GROQ_API_KEY) {\n            console.error(\"GROQ_API_KEY not found in environment variables\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'AI service is currently unavailable.',\n                details: 'GROQ API key is missing. Please check your environment configuration.'\n            }, {\n                status: 503\n            });\n        }\n        // Extract transfer data from request\n        const transferData = await request.json();\n        // Validate required fields\n        if (!transferData.userId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'User ID is required.'\n            }, {\n                status: 400\n            });\n        }\n        if (!transferData.fromAccount || !transferData.toAccount) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Both source and destination accounts are required.'\n            }, {\n                status: 400\n            });\n        }\n        if (!transferData.amount) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Transfer amount is required.'\n            }, {\n                status: 400\n            });\n        }\n        // Analyze the transfer with the AI agent\n        const analysisResult = await (0,_lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__.analyzeTransfer)(transferData);\n        // Log the server-side activity\n        await (0,_lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__.logAgentActivity)(transferData.userId, transferData, analysisResult);\n        // Return the analysis result\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(analysisResult);\n    } catch (error) {\n        console.error('Error in AI agent API:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to process transfer with AI agent.',\n            details: error.message || 'An unexpected error occurred'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FpLWFnZW50L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUN3RDtBQUMxQztBQUNoQjtBQUVsQyxlQUFlTSxLQUFLQyxPQUFnQjtJQUN6Qyx1REFBdUQ7SUFDdkRILDREQUFPQTtJQUVQLElBQUk7UUFDRiw2QkFBNkI7UUFDN0IsTUFBTSxFQUFFSSxZQUFZLEVBQUUsR0FBRyxNQUFNSCxzREFBWUE7UUFDM0MsSUFBSSxDQUFDRyxjQUFjO1lBQ2pCQyxRQUFRQyxLQUFLLENBQUM7WUFDZCxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtnQkFDRUQsT0FBTztnQkFDUEUsU0FBUztZQUNYLEdBQ0E7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLHFDQUFxQztRQUNyQyxNQUFNQyxlQUFnQyxNQUFNUCxRQUFRSSxJQUFJO1FBRXhELDJCQUEyQjtRQUMzQixJQUFJLENBQUNHLGFBQWFDLE1BQU0sRUFBRTtZQUN4QixPQUFPZixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtnQkFBRUQsT0FBTztZQUF1QixHQUNoQztnQkFBRUcsUUFBUTtZQUFJO1FBRWxCO1FBRUEsSUFBSSxDQUFDQyxhQUFhRSxXQUFXLElBQUksQ0FBQ0YsYUFBYUcsU0FBUyxFQUFFO1lBQ3hELE9BQU9qQixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtnQkFBRUQsT0FBTztZQUFxRCxHQUM5RDtnQkFBRUcsUUFBUTtZQUFJO1FBRWxCO1FBRUEsSUFBSSxDQUFDQyxhQUFhSSxNQUFNLEVBQUU7WUFDeEIsT0FBT2xCLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO2dCQUFFRCxPQUFPO1lBQStCLEdBQ3hDO2dCQUFFRyxRQUFRO1lBQUk7UUFFbEI7UUFFQSx5Q0FBeUM7UUFDekMsTUFBTU0saUJBQWdDLE1BQU1sQiw4REFBZUEsQ0FBQ2E7UUFFNUQsK0JBQStCO1FBQy9CLE1BQU1aLCtEQUFnQkEsQ0FBQ1ksYUFBYUMsTUFBTSxFQUFFRCxjQUFjSztRQUUxRCw2QkFBNkI7UUFDN0IsT0FBT25CLHFEQUFZQSxDQUFDVyxJQUFJLENBQUNRO0lBQzNCLEVBQUUsT0FBT1QsT0FBTztRQUNkRCxRQUFRQyxLQUFLLENBQUMsMEJBQTBCQTtRQUN4QyxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtZQUNFRCxPQUFPO1lBQ1BFLFNBQVNGLE1BQU1VLE9BQU8sSUFBSTtRQUM1QixHQUNBO1lBQUVQLFFBQVE7UUFBSTtJQUVsQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvdXBhZGh5YXlwcy9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9PbmVEcml2ZS1iZWxvaXQuZWR1L0RvY3VtZW50cy9EaWdpdGVuaXVtL0RpZ2liYW5rL2FwcC9hcGkvYWktYWdlbnQvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgYW5hbHl6ZVRyYW5zZmVyLCBUcmFuc2ZlckRldGFpbHMsIEFnZW50UmVzcG9uc2UsIGxvZ0FnZW50QWN0aXZpdHkgfSBmcm9tICdAL2xpYi9haS1hZ2VudCc7XG5pbXBvcnQgeyB1bnN0YWJsZV9ub1N0b3JlIGFzIG5vU3RvcmUgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IGdldFNlcnZlckVudiB9IGZyb20gJ0AvbGliL2Vudic7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgLy8gRW5zdXJlIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgYWNjZXNzZWQgYXQgcnVudGltZVxuICBub1N0b3JlKCk7XG4gIFxuICB0cnkge1xuICAgIC8vIENoZWNrIEFQSSBrZXkgYXZhaWxhYmlsaXR5XG4gICAgY29uc3QgeyBHUk9RX0FQSV9LRVkgfSA9IGF3YWl0IGdldFNlcnZlckVudigpO1xuICAgIGlmICghR1JPUV9BUElfS0VZKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiR1JPUV9BUElfS0VZIG5vdCBmb3VuZCBpbiBlbnZpcm9ubWVudCB2YXJpYWJsZXNcIik7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgXG4gICAgICAgICAgZXJyb3I6ICdBSSBzZXJ2aWNlIGlzIGN1cnJlbnRseSB1bmF2YWlsYWJsZS4nLFxuICAgICAgICAgIGRldGFpbHM6ICdHUk9RIEFQSSBrZXkgaXMgbWlzc2luZy4gUGxlYXNlIGNoZWNrIHlvdXIgZW52aXJvbm1lbnQgY29uZmlndXJhdGlvbi4nXG4gICAgICAgIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDMgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gRXh0cmFjdCB0cmFuc2ZlciBkYXRhIGZyb20gcmVxdWVzdFxuICAgIGNvbnN0IHRyYW5zZmVyRGF0YTogVHJhbnNmZXJEZXRhaWxzID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgXG4gICAgLy8gVmFsaWRhdGUgcmVxdWlyZWQgZmllbGRzXG4gICAgaWYgKCF0cmFuc2ZlckRhdGEudXNlcklkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdVc2VyIElEIGlzIHJlcXVpcmVkLicgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIXRyYW5zZmVyRGF0YS5mcm9tQWNjb3VudCB8fCAhdHJhbnNmZXJEYXRhLnRvQWNjb3VudCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnQm90aCBzb3VyY2UgYW5kIGRlc3RpbmF0aW9uIGFjY291bnRzIGFyZSByZXF1aXJlZC4nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCF0cmFuc2ZlckRhdGEuYW1vdW50KSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdUcmFuc2ZlciBhbW91bnQgaXMgcmVxdWlyZWQuJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIEFuYWx5emUgdGhlIHRyYW5zZmVyIHdpdGggdGhlIEFJIGFnZW50XG4gICAgY29uc3QgYW5hbHlzaXNSZXN1bHQ6IEFnZW50UmVzcG9uc2UgPSBhd2FpdCBhbmFseXplVHJhbnNmZXIodHJhbnNmZXJEYXRhKTtcbiAgICBcbiAgICAvLyBMb2cgdGhlIHNlcnZlci1zaWRlIGFjdGl2aXR5XG4gICAgYXdhaXQgbG9nQWdlbnRBY3Rpdml0eSh0cmFuc2ZlckRhdGEudXNlcklkLCB0cmFuc2ZlckRhdGEsIGFuYWx5c2lzUmVzdWx0KTtcbiAgICBcbiAgICAvLyBSZXR1cm4gdGhlIGFuYWx5c2lzIHJlc3VsdFxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihhbmFseXNpc1Jlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gQUkgYWdlbnQgQVBJOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IFxuICAgICAgICBlcnJvcjogJ0ZhaWxlZCB0byBwcm9jZXNzIHRyYW5zZmVyIHdpdGggQUkgYWdlbnQuJyxcbiAgICAgICAgZGV0YWlsczogZXJyb3IubWVzc2FnZSB8fCAnQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZCdcbiAgICAgIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59ICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJhbmFseXplVHJhbnNmZXIiLCJsb2dBZ2VudEFjdGl2aXR5IiwidW5zdGFibGVfbm9TdG9yZSIsIm5vU3RvcmUiLCJnZXRTZXJ2ZXJFbnYiLCJQT1NUIiwicmVxdWVzdCIsIkdST1FfQVBJX0tFWSIsImNvbnNvbGUiLCJlcnJvciIsImpzb24iLCJkZXRhaWxzIiwic3RhdHVzIiwidHJhbnNmZXJEYXRhIiwidXNlcklkIiwiZnJvbUFjY291bnQiLCJ0b0FjY291bnQiLCJhbW91bnQiLCJhbmFseXNpc1Jlc3VsdCIsIm1lc3NhZ2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ai-agent/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/ai-agent.ts":
/*!*************************!*\
  !*** ./lib/ai-agent.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeTransfer: () => (/* binding */ analyzeTransfer),\n/* harmony export */   logAgentActivity: () => (/* binding */ logAgentActivity)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq-sdk */ \"(rsc)/./node_modules/groq-sdk/index.mjs\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ \"(rsc)/./lib/env.ts\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"40a6d0bc2f928d81a7101bd8b65a74ef63c8850daa\":\"analyzeTransfer\",\"7076a45ea4b4d08c1f21cfe011759d028cd3d44bd2\":\"logAgentActivity\"} */ \n\n\n\n\n// Ensure environment variables are accessed at runtime, not build time\n(0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n// Initialize the Groq client with environment variables\nlet groq;\n// Function to initialize the Groq client\nasync function initGroqClient() {\n    // Get API key from environment using our utility\n    const { GROQ_API_KEY } = await (0,_env__WEBPACK_IMPORTED_MODULE_3__.getServerEnv)();\n    if (!GROQ_API_KEY) {\n        throw new Error(\"GROQ_API_KEY is missing in environment variables\");\n    }\n    // Initialize the Groq client\n    return new groq_sdk__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n        apiKey: GROQ_API_KEY\n    });\n}\n// System prompt for the financial AI agent\nconst SYSTEM_PROMPT = `You are a financial AI agent that analyzes bank transfers and takes appropriate actions.\nYour job is to:\n1. Verify the transfer details for potential fraud or unusual activity\n2. Assess if this transfer matches the user's typical behavior\n3. Check for any red flags based on the transfer details\n4. Recommend next steps if any issues are detected\n\nRespond in JSON format with the following structure:\n{\n  \"risk_assessment\": \"low\" | \"medium\" | \"high\",\n  \"reasoning\": \"Brief explanation of your assessment\",\n  \"flags\": [\"List of any red flags detected\"],\n  \"recommendation\": \"Recommended action\",\n  \"next_steps\": [\"List of suggested next steps\"]\n}\n\nKeep your reasoning concise and focused on financial safety and security.`;\n/**\n * Analyzes a bank transfer for potential risks and provides recommendations\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ analyzeTransfer(transferData) {\n    try {\n        // Initialize the Groq client if not already initialized\n        if (!groq) {\n            groq = await initGroqClient();\n        }\n        // Convert the transfer details into a message format for the AI\n        const userMessage = `Please analyze this bank transfer:\n    \nFrom Account: ${transferData.fromAccount.name} (${transferData.fromAccount.accountType})\nAccount Number: ${transferData.fromAccount.accountNumber}\nTo Account: ${transferData.toAccount.name} (${transferData.toAccount.accountType})\nAccount Number: ${transferData.toAccount.accountNumber}\nAmount: $${transferData.amount}\nMemo: ${transferData.memo || \"No memo provided\"}\n`;\n        // Make the API call to Groq\n        const completion = await groq.chat.completions.create({\n            messages: [\n                {\n                    role: \"system\",\n                    content: SYSTEM_PROMPT\n                },\n                {\n                    role: \"user\",\n                    content: userMessage\n                }\n            ],\n            model: \"llama3-8b-8192\",\n            temperature: 0.5,\n            max_tokens: 800,\n            response_format: {\n                type: \"json_object\"\n            }\n        });\n        // Parse the response\n        const responseContent = completion.choices[0]?.message?.content || '';\n        if (!responseContent) {\n            throw new Error(\"Empty response from AI model\");\n        }\n        const parsedResponse = JSON.parse(responseContent);\n        // Validate the response structure\n        if (!parsedResponse.risk_assessment || !parsedResponse.reasoning) {\n            throw new Error(\"Invalid response format from AI model\");\n        }\n        return parsedResponse;\n    } catch (error) {\n        console.error('Error analyzing transfer with AI agent:', error);\n        // Return a more detailed error response\n        return {\n            risk_assessment: 'medium',\n            reasoning: `AI analysis failed: ${error.message}`,\n            flags: [\n                'AI service unavailable'\n            ],\n            recommendation: 'Please review the transfer manually or try again later.',\n            next_steps: [\n                'Check your internet connection',\n                'Try again in a few minutes',\n                'Contact support if the issue persists'\n            ]\n        };\n    }\n}\n/**\n * Logs AI agent activity for auditing purposes\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logAgentActivity(userId, transferData, agentResponse) {\n    // In a real app, this would log to a database or monitoring service\n    console.log(`[AI Agent] User ${userId} transfer analysis:`, {\n        timestamp: new Date().toISOString(),\n        transferData,\n        agentResponse\n    });\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__.ensureServerEntryExports)([\n    analyzeTransfer,\n    logAgentActivity\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(analyzeTransfer, \"40a6d0bc2f928d81a7101bd8b65a74ef63c8850daa\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(logAgentActivity, \"7076a45ea4b4d08c1f21cfe011759d028cd3d44bd2\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ckM7SUFnRUFtQzs7QUFoRUFuQywwRkFBQUEsQ0FBQUE7QUFnRUFtQywwRkFBQUEsQ0FBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGFkaHlheXBzL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvbGliL2FpLWFnZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgR3JvcSBmcm9tICdncm9xLXNkayc7XG5pbXBvcnQgeyB1bnN0YWJsZV9ub1N0b3JlIGFzIG5vU3RvcmUgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IGdldFNlcnZlckVudiB9IGZyb20gJy4vZW52JztcblxuLy8gRW5zdXJlIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgYWNjZXNzZWQgYXQgcnVudGltZSwgbm90IGJ1aWxkIHRpbWVcbm5vU3RvcmUoKTtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgR3JvcSBjbGllbnQgd2l0aCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbmxldCBncm9xOiBHcm9xO1xuXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBHcm9xIGNsaWVudFxuYXN5bmMgZnVuY3Rpb24gaW5pdEdyb3FDbGllbnQoKSB7XG4gIC8vIEdldCBBUEkga2V5IGZyb20gZW52aXJvbm1lbnQgdXNpbmcgb3VyIHV0aWxpdHlcbiAgY29uc3QgeyBHUk9RX0FQSV9LRVkgfSA9IGF3YWl0IGdldFNlcnZlckVudigpO1xuXG4gIGlmICghR1JPUV9BUElfS0VZKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiR1JPUV9BUElfS0VZIGlzIG1pc3NpbmcgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSB0aGUgR3JvcSBjbGllbnRcbiAgcmV0dXJuIG5ldyBHcm9xKHtcbiAgICBhcGlLZXk6IEdST1FfQVBJX0tFWVxuICB9KTtcbn1cblxuLy8gU3lzdGVtIHByb21wdCBmb3IgdGhlIGZpbmFuY2lhbCBBSSBhZ2VudFxuY29uc3QgU1lTVEVNX1BST01QVCA9IGBZb3UgYXJlIGEgZmluYW5jaWFsIEFJIGFnZW50IHRoYXQgYW5hbHl6ZXMgYmFuayB0cmFuc2ZlcnMgYW5kIHRha2VzIGFwcHJvcHJpYXRlIGFjdGlvbnMuXG5Zb3VyIGpvYiBpcyB0bzpcbjEuIFZlcmlmeSB0aGUgdHJhbnNmZXIgZGV0YWlscyBmb3IgcG90ZW50aWFsIGZyYXVkIG9yIHVudXN1YWwgYWN0aXZpdHlcbjIuIEFzc2VzcyBpZiB0aGlzIHRyYW5zZmVyIG1hdGNoZXMgdGhlIHVzZXIncyB0eXBpY2FsIGJlaGF2aW9yXG4zLiBDaGVjayBmb3IgYW55IHJlZCBmbGFncyBiYXNlZCBvbiB0aGUgdHJhbnNmZXIgZGV0YWlsc1xuNC4gUmVjb21tZW5kIG5leHQgc3RlcHMgaWYgYW55IGlzc3VlcyBhcmUgZGV0ZWN0ZWRcblxuUmVzcG9uZCBpbiBKU09OIGZvcm1hdCB3aXRoIHRoZSBmb2xsb3dpbmcgc3RydWN0dXJlOlxue1xuICBcInJpc2tfYXNzZXNzbWVudFwiOiBcImxvd1wiIHwgXCJtZWRpdW1cIiB8IFwiaGlnaFwiLFxuICBcInJlYXNvbmluZ1wiOiBcIkJyaWVmIGV4cGxhbmF0aW9uIG9mIHlvdXIgYXNzZXNzbWVudFwiLFxuICBcImZsYWdzXCI6IFtcIkxpc3Qgb2YgYW55IHJlZCBmbGFncyBkZXRlY3RlZFwiXSxcbiAgXCJyZWNvbW1lbmRhdGlvblwiOiBcIlJlY29tbWVuZGVkIGFjdGlvblwiLFxuICBcIm5leHRfc3RlcHNcIjogW1wiTGlzdCBvZiBzdWdnZXN0ZWQgbmV4dCBzdGVwc1wiXVxufVxuXG5LZWVwIHlvdXIgcmVhc29uaW5nIGNvbmNpc2UgYW5kIGZvY3VzZWQgb24gZmluYW5jaWFsIHNhZmV0eSBhbmQgc2VjdXJpdHkuYDtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2ZlckRldGFpbHMge1xuICB1c2VySWQ6IHN0cmluZztcbiAgZnJvbUFjY291bnQ6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhY2NvdW50VHlwZTogc3RyaW5nO1xuICAgIGFjY291bnROdW1iZXI6IHN0cmluZztcbiAgfTtcbiAgdG9BY2NvdW50OiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWNjb3VudFR5cGU6IHN0cmluZztcbiAgICBhY2NvdW50TnVtYmVyOiBzdHJpbmc7XG4gIH07XG4gIGFtb3VudDogc3RyaW5nO1xuICBtZW1vOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWdlbnRSZXNwb25zZSB7XG4gIHJpc2tfYXNzZXNzbWVudDogJ2xvdycgfCAnbWVkaXVtJyB8ICdoaWdoJztcbiAgcmVhc29uaW5nOiBzdHJpbmc7XG4gIGZsYWdzOiBzdHJpbmdbXTtcbiAgcmVjb21tZW5kYXRpb246IHN0cmluZztcbiAgbmV4dF9zdGVwczogc3RyaW5nW107XG59XG5cbi8qKlxuICogQW5hbHl6ZXMgYSBiYW5rIHRyYW5zZmVyIGZvciBwb3RlbnRpYWwgcmlza3MgYW5kIHByb3ZpZGVzIHJlY29tbWVuZGF0aW9uc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYW5hbHl6ZVRyYW5zZmVyKHRyYW5zZmVyRGF0YTogVHJhbnNmZXJEZXRhaWxzKTogUHJvbWlzZTxBZ2VudFJlc3BvbnNlPiB7XG4gIHRyeSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgR3JvcSBjbGllbnQgaWYgbm90IGFscmVhZHkgaW5pdGlhbGl6ZWRcbiAgICBpZiAoIWdyb3EpIHtcbiAgICAgIGdyb3EgPSBhd2FpdCBpbml0R3JvcUNsaWVudCgpO1xuICAgIH1cbiAgICBcbiAgICAvLyBDb252ZXJ0IHRoZSB0cmFuc2ZlciBkZXRhaWxzIGludG8gYSBtZXNzYWdlIGZvcm1hdCBmb3IgdGhlIEFJXG4gICAgY29uc3QgdXNlck1lc3NhZ2UgPSBgUGxlYXNlIGFuYWx5emUgdGhpcyBiYW5rIHRyYW5zZmVyOlxuICAgIFxuRnJvbSBBY2NvdW50OiAke3RyYW5zZmVyRGF0YS5mcm9tQWNjb3VudC5uYW1lfSAoJHt0cmFuc2ZlckRhdGEuZnJvbUFjY291bnQuYWNjb3VudFR5cGV9KVxuQWNjb3VudCBOdW1iZXI6ICR7dHJhbnNmZXJEYXRhLmZyb21BY2NvdW50LmFjY291bnROdW1iZXJ9XG5UbyBBY2NvdW50OiAke3RyYW5zZmVyRGF0YS50b0FjY291bnQubmFtZX0gKCR7dHJhbnNmZXJEYXRhLnRvQWNjb3VudC5hY2NvdW50VHlwZX0pXG5BY2NvdW50IE51bWJlcjogJHt0cmFuc2ZlckRhdGEudG9BY2NvdW50LmFjY291bnROdW1iZXJ9XG5BbW91bnQ6ICQke3RyYW5zZmVyRGF0YS5hbW91bnR9XG5NZW1vOiAke3RyYW5zZmVyRGF0YS5tZW1vIHx8IFwiTm8gbWVtbyBwcm92aWRlZFwifVxuYDtcblxuICAgIC8vIE1ha2UgdGhlIEFQSSBjYWxsIHRvIEdyb3FcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgZ3JvcS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7IHJvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFNZU1RFTV9QUk9NUFQgfSxcbiAgICAgICAgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogdXNlck1lc3NhZ2UgfVxuICAgICAgXSxcbiAgICAgIG1vZGVsOiBcImxsYW1hMy04Yi04MTkyXCIsIC8vIFVzaW5nIExMQU1BIDMgOEIgbW9kZWxcbiAgICAgIHRlbXBlcmF0dXJlOiAwLjUsXG4gICAgICBtYXhfdG9rZW5zOiA4MDAsXG4gICAgICByZXNwb25zZV9mb3JtYXQ6IHsgdHlwZTogXCJqc29uX29iamVjdFwiIH1cbiAgICB9KTtcblxuICAgIC8vIFBhcnNlIHRoZSByZXNwb25zZVxuICAgIGNvbnN0IHJlc3BvbnNlQ29udGVudCA9IGNvbXBsZXRpb24uY2hvaWNlc1swXT8ubWVzc2FnZT8uY29udGVudCB8fCAnJztcbiAgICBpZiAoIXJlc3BvbnNlQ29udGVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgcmVzcG9uc2UgZnJvbSBBSSBtb2RlbFwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJzZWRSZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2VDb250ZW50KSBhcyBBZ2VudFJlc3BvbnNlO1xuICAgIFxuICAgIC8vIFZhbGlkYXRlIHRoZSByZXNwb25zZSBzdHJ1Y3R1cmVcbiAgICBpZiAoIXBhcnNlZFJlc3BvbnNlLnJpc2tfYXNzZXNzbWVudCB8fCAhcGFyc2VkUmVzcG9uc2UucmVhc29uaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCBmcm9tIEFJIG1vZGVsXCIpO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcGFyc2VkUmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYW5hbHl6aW5nIHRyYW5zZmVyIHdpdGggQUkgYWdlbnQ6JywgZXJyb3IpO1xuICAgIC8vIFJldHVybiBhIG1vcmUgZGV0YWlsZWQgZXJyb3IgcmVzcG9uc2VcbiAgICByZXR1cm4ge1xuICAgICAgcmlza19hc3Nlc3NtZW50OiAnbWVkaXVtJyxcbiAgICAgIHJlYXNvbmluZzogYEFJIGFuYWx5c2lzIGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWAsXG4gICAgICBmbGFnczogWydBSSBzZXJ2aWNlIHVuYXZhaWxhYmxlJ10sXG4gICAgICByZWNvbW1lbmRhdGlvbjogJ1BsZWFzZSByZXZpZXcgdGhlIHRyYW5zZmVyIG1hbnVhbGx5IG9yIHRyeSBhZ2FpbiBsYXRlci4nLFxuICAgICAgbmV4dF9zdGVwczogW1xuICAgICAgICAnQ2hlY2sgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uJyxcbiAgICAgICAgJ1RyeSBhZ2FpbiBpbiBhIGZldyBtaW51dGVzJyxcbiAgICAgICAgJ0NvbnRhY3Qgc3VwcG9ydCBpZiB0aGUgaXNzdWUgcGVyc2lzdHMnXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIExvZ3MgQUkgYWdlbnQgYWN0aXZpdHkgZm9yIGF1ZGl0aW5nIHB1cnBvc2VzXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dBZ2VudEFjdGl2aXR5KHVzZXJJZDogc3RyaW5nLCB0cmFuc2ZlckRhdGE6IFRyYW5zZmVyRGV0YWlscywgYWdlbnRSZXNwb25zZTogQWdlbnRSZXNwb25zZSkge1xuICAvLyBJbiBhIHJlYWwgYXBwLCB0aGlzIHdvdWxkIGxvZyB0byBhIGRhdGFiYXNlIG9yIG1vbml0b3Jpbmcgc2VydmljZVxuICBjb25zb2xlLmxvZyhgW0FJIEFnZW50XSBVc2VyICR7dXNlcklkfSB0cmFuc2ZlciBhbmFseXNpczpgLCB7XG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgdHJhbnNmZXJEYXRhLFxuICAgIGFnZW50UmVzcG9uc2VcbiAgfSk7XG59ICJdLCJuYW1lcyI6WyJHcm9xIiwidW5zdGFibGVfbm9TdG9yZSIsIm5vU3RvcmUiLCJnZXRTZXJ2ZXJFbnYiLCJncm9xIiwiaW5pdEdyb3FDbGllbnQiLCJHUk9RX0FQSV9LRVkiLCJFcnJvciIsImFwaUtleSIsIlNZU1RFTV9QUk9NUFQiLCJhbmFseXplVHJhbnNmZXIiLCJ0cmFuc2ZlckRhdGEiLCJ1c2VyTWVzc2FnZSIsImZyb21BY2NvdW50IiwibmFtZSIsImFjY291bnRUeXBlIiwiYWNjb3VudE51bWJlciIsInRvQWNjb3VudCIsImFtb3VudCIsIm1lbW8iLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwicmVzcG9uc2VfZm9ybWF0IiwidHlwZSIsInJlc3BvbnNlQ29udGVudCIsImNob2ljZXMiLCJtZXNzYWdlIiwicGFyc2VkUmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJyaXNrX2Fzc2Vzc21lbnQiLCJyZWFzb25pbmciLCJlcnJvciIsImNvbnNvbGUiLCJmbGFncyIsInJlY29tbWVuZGF0aW9uIiwibmV4dF9zdGVwcyIsImxvZ0FnZW50QWN0aXZpdHkiLCJ1c2VySWQiLCJhZ2VudFJlc3BvbnNlIiwibG9nIiwidGltZXN0YW1wIiwiRGF0ZSIsInRvSVNPU3RyaW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/ai-agent.ts\n");

/***/ }),

/***/ "(rsc)/./lib/env.ts":
/*!********************!*\
  !*** ./lib/env.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getServerEnv: () => (/* binding */ getServerEnv)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"008075e8e75506eff3ddf191a4109d60a57161121b\":\"getServerEnv\"} */ \n\n\nasync function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getServerEnv() {\n    // Ensure environment variables are accessed at runtime, not build time\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n    return {\n        GROQ_API_KEY: process.env.GROQ_API_KEY\n    };\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_3__.ensureServerEntryExports)([\n    getServerEnv\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(getServerEnv, \"008075e8e75506eff3ddf191a4109d60a57161121b\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZW52LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUV5RDtBQUVsRCxlQUFlRSx1Q0FBVSxHQUFWQTtJQUNwQix1RUFBdUU7SUFDdkVELDREQUFPQTtJQUVQLE9BQU87UUFDTEUsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixZQUFZO0lBRXhDO0FBQ0Y7OztJQVJzQkQ7O0FBQUFBLDBGQUFBQSxDQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3VwYWRoeWF5cHMvTGlicmFyeS9DbG91ZFN0b3JhZ2UvT25lRHJpdmUtYmVsb2l0LmVkdS9Eb2N1bWVudHMvRGlnaXRlbml1bS9EaWdpYmFuay9saWIvZW52LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyB1bnN0YWJsZV9ub1N0b3JlIGFzIG5vU3RvcmUgfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlckVudigpIHtcbiAgLy8gRW5zdXJlIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgYWNjZXNzZWQgYXQgcnVudGltZSwgbm90IGJ1aWxkIHRpbWVcbiAgbm9TdG9yZSgpO1xuXG4gIHJldHVybiB7XG4gICAgR1JPUV9BUElfS0VZOiBwcm9jZXNzLmVudi5HUk9RX0FQSV9LRVksXG4gICAgLy8gQWRkIG90aGVyIHNlcnZlci1vbmx5IGVudmlyb25tZW50IHZhcmlhYmxlcyBoZXJlXG4gIH07XG59ICJdLCJuYW1lcyI6WyJ1bnN0YWJsZV9ub1N0b3JlIiwibm9TdG9yZSIsImdldFNlcnZlckVudiIsIkdST1FfQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/env.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai-agent%2Froute&page=%2Fapi%2Fai-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai-agent%2Froute&page=%2Fapi%2Fai-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_app_api_ai_agent_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/ai-agent/route.ts */ \"(rsc)/./app/api/ai-agent/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/ai-agent/route\",\n        pathname: \"/api/ai-agent\",\n        filename: \"route\",\n        bundlePath: \"app/api/ai-agent/route\"\n    },\n    resolvedPagePath: \"/Users/upadhyayps/Library/CloudStorage/OneDrive-beloit.edu/Documents/Digitenium/Digibank/app/api/ai-agent/route.ts\",\n    nextConfigOutput,\n    userland: _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_app_api_ai_agent_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhaS1hZ2VudCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYWktYWdlbnQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhaS1hZ2VudCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnVwYWRoeWF5cHMlMkZMaWJyYXJ5JTJGQ2xvdWRTdG9yYWdlJTJGT25lRHJpdmUtYmVsb2l0LmVkdSUyRkRvY3VtZW50cyUyRkRpZ2l0ZW5pdW0lMkZEaWdpYmFuayUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ1cGFkaHlheXBzJTJGTGlicmFyeSUyRkNsb3VkU3RvcmFnZSUyRk9uZURyaXZlLWJlbG9pdC5lZHUlMkZEb2N1bWVudHMlMkZEaWdpdGVuaXVtJTJGRGlnaWJhbmsmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tFO0FBQy9JO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdXBhZGh5YXlwcy9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9PbmVEcml2ZS1iZWxvaXQuZWR1L0RvY3VtZW50cy9EaWdpdGVuaXVtL0RpZ2liYW5rL2FwcC9hcGkvYWktYWdlbnQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2FpLWFnZW50L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWktYWdlbnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FpLWFnZW50L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3VwYWRoeWF5cHMvTGlicmFyeS9DbG91ZFN0b3JhZ2UvT25lRHJpdmUtYmVsb2l0LmVkdS9Eb2N1bWVudHMvRGlnaXRlbml1bS9EaWdpYmFuay9hcHAvYXBpL2FpLWFnZW50L3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai-agent%2Froute&page=%2Fapi%2Fai-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Fai-agent.ts%22%2C%5B%7B%22id%22%3A%2240a6d0bc2f928d81a7101bd8b65a74ef63c8850daa%22%2C%22exportedName%22%3A%22analyzeTransfer%22%7D%2C%7B%22id%22%3A%227076a45ea4b4d08c1f21cfe011759d028cd3d44bd2%22%2C%22exportedName%22%3A%22logAgentActivity%22%7D%5D%5D%2C%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Fenv.ts%22%2C%5B%7B%22id%22%3A%22008075e8e75506eff3ddf191a4109d60a57161121b%22%2C%22exportedName%22%3A%22getServerEnv%22%7D%5D%5D%5D&__client_imported__=!":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Fai-agent.ts%22%2C%5B%7B%22id%22%3A%2240a6d0bc2f928d81a7101bd8b65a74ef63c8850daa%22%2C%22exportedName%22%3A%22analyzeTransfer%22%7D%2C%7B%22id%22%3A%227076a45ea4b4d08c1f21cfe011759d028cd3d44bd2%22%2C%22exportedName%22%3A%22logAgentActivity%22%7D%5D%5D%2C%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Fenv.ts%22%2C%5B%7B%22id%22%3A%22008075e8e75506eff3ddf191a4109d60a57161121b%22%2C%22exportedName%22%3A%22getServerEnv%22%7D%5D%5D%5D&__client_imported__=! ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"008075e8e75506eff3ddf191a4109d60a57161121b\": () => (/* reexport safe */ _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_env_ts__WEBPACK_IMPORTED_MODULE_1__.getServerEnv),\n/* harmony export */   \"40a6d0bc2f928d81a7101bd8b65a74ef63c8850daa\": () => (/* reexport safe */ _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_ai_agent_ts__WEBPACK_IMPORTED_MODULE_0__.analyzeTransfer),\n/* harmony export */   \"7076a45ea4b4d08c1f21cfe011759d028cd3d44bd2\": () => (/* reexport safe */ _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_ai_agent_ts__WEBPACK_IMPORTED_MODULE_0__.logAgentActivity)\n/* harmony export */ });\n/* harmony import */ var _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_ai_agent_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ai-agent.ts */ \"(rsc)/./lib/ai-agent.ts\");\n/* harmony import */ var _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_env_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/env.ts */ \"(rsc)/./lib/env.ts\");\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1hY3Rpb24tZW50cnktbG9hZGVyLmpzP2FjdGlvbnM9JTVCJTVCJTIyJTJGVXNlcnMlMkZ1cGFkaHlheXBzJTJGTGlicmFyeSUyRkNsb3VkU3RvcmFnZSUyRk9uZURyaXZlLWJlbG9pdC5lZHUlMkZEb2N1bWVudHMlMkZEaWdpdGVuaXVtJTJGRGlnaWJhbmslMkZsaWIlMkZhaS1hZ2VudC50cyUyMiUyQyU1QiU3QiUyMmlkJTIyJTNBJTIyNDBhNmQwYmMyZjkyOGQ4MWE3MTAxYmQ4YjY1YTc0ZWY2M2M4ODUwZGFhJTIyJTJDJTIyZXhwb3J0ZWROYW1lJTIyJTNBJTIyYW5hbHl6ZVRyYW5zZmVyJTIyJTdEJTJDJTdCJTIyaWQlMjIlM0ElMjI3MDc2YTQ1ZWE0YjRkMDhjMWYyMWNmZTAxMTc1OWQwMjhjZDNkNDRiZDIlMjIlMkMlMjJleHBvcnRlZE5hbWUlMjIlM0ElMjJsb2dBZ2VudEFjdGl2aXR5JTIyJTdEJTVEJTVEJTJDJTVCJTIyJTJGVXNlcnMlMkZ1cGFkaHlheXBzJTJGTGlicmFyeSUyRkNsb3VkU3RvcmFnZSUyRk9uZURyaXZlLWJlbG9pdC5lZHUlMkZEb2N1bWVudHMlMkZEaWdpdGVuaXVtJTJGRGlnaWJhbmslMkZsaWIlMkZlbnYudHMlMjIlMkMlNUIlN0IlMjJpZCUyMiUzQSUyMjAwODA3NWU4ZTc1NTA2ZWZmM2RkZjE5MWE0MTA5ZDYwYTU3MTYxMTIxYiUyMiUyQyUyMmV4cG9ydGVkTmFtZSUyMiUzQSUyMmdldFNlcnZlckVudiUyMiU3RCU1RCU1RCU1RCZfX2NsaWVudF9pbXBvcnRlZF9fPSEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzBMO0FBQ0M7QUFDVCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgYW5hbHl6ZVRyYW5zZmVyIGFzIFwiNDBhNmQwYmMyZjkyOGQ4MWE3MTAxYmQ4YjY1YTc0ZWY2M2M4ODUwZGFhXCIgfSBmcm9tIFwiL1VzZXJzL3VwYWRoeWF5cHMvTGlicmFyeS9DbG91ZFN0b3JhZ2UvT25lRHJpdmUtYmVsb2l0LmVkdS9Eb2N1bWVudHMvRGlnaXRlbml1bS9EaWdpYmFuay9saWIvYWktYWdlbnQudHNcIlxuZXhwb3J0IHsgbG9nQWdlbnRBY3Rpdml0eSBhcyBcIjcwNzZhNDVlYTRiNGQwOGMxZjIxY2ZlMDExNzU5ZDAyOGNkM2Q0NGJkMlwiIH0gZnJvbSBcIi9Vc2Vycy91cGFkaHlheXBzL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvbGliL2FpLWFnZW50LnRzXCJcbmV4cG9ydCB7IGdldFNlcnZlckVudiBhcyBcIjAwODA3NWU4ZTc1NTA2ZWZmM2RkZjE5MWE0MTA5ZDYwYTU3MTYxMTIxYlwiIH0gZnJvbSBcIi9Vc2Vycy91cGFkaHlheXBzL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvbGliL2Vudi50c1wiXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Fai-agent.ts%22%2C%5B%7B%22id%22%3A%2240a6d0bc2f928d81a7101bd8b65a74ef63c8850daa%22%2C%22exportedName%22%3A%22analyzeTransfer%22%7D%2C%7B%22id%22%3A%227076a45ea4b4d08c1f21cfe011759d028cd3d44bd2%22%2C%22exportedName%22%3A%22logAgentActivity%22%7D%5D%5D%2C%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Fenv.ts%22%2C%5B%7B%22id%22%3A%22008075e8e75506eff3ddf191a4109d60a57161121b%22%2C%22exportedName%22%3A%22getServerEnv%22%7D%5D%5D%5D&__client_imported__=!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "node:stream/web":
/*!**********************************!*\
  !*** external "node:stream/web" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream/web");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "worker_threads":
/*!*********************************!*\
  !*** external "worker_threads" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("worker_threads");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/formdata-node","vendor-chunks/tr46","vendor-chunks/groq-sdk","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/event-target-shim","vendor-chunks/agentkeepalive","vendor-chunks/form-data-encoder","vendor-chunks/webidl-conversions","vendor-chunks/abort-controller","vendor-chunks/ms","vendor-chunks/humanize-ms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai-agent%2Froute&page=%2Fapi%2Fai-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();