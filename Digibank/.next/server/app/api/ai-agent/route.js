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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/ai-agent */ \"(rsc)/./lib/ai-agent.ts\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/env */ \"(rsc)/./lib/env.ts\");\n\n\n\n\nasync function POST(request) {\n    // Ensure environment variables are accessed at runtime\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n    // Check API key availability - properly await the async function call\n    const { GROQ_API_KEY } = await (0,_lib_env__WEBPACK_IMPORTED_MODULE_3__.getServerEnv)();\n    if (!GROQ_API_KEY) {\n        console.warn(\"GROQ_API_KEY not found in environment variables when handling request\");\n    }\n    try {\n        // Extract transfer data from request\n        const transferData = await request.json();\n        // Make sure the required properties are present\n        if (!transferData.userId || !transferData.fromAccount || !transferData.toAccount || !transferData.amount) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Invalid transfer data. Missing required fields.'\n            }, {\n                status: 400\n            });\n        }\n        // Analyze the transfer with the AI agent\n        const analysisResult = await (0,_lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__.analyzeTransfer)(transferData);\n        // Return the analysis result\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(analysisResult);\n    } catch (error) {\n        console.error('Error in AI agent API:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to process transfer with AI agent.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FpLWFnZW50L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUNzQztBQUN4QjtBQUNoQjtBQUVsQyxlQUFlSyxLQUFLQyxPQUFnQjtJQUN6Qyx1REFBdUQ7SUFDdkRILDREQUFPQTtJQUVQLHNFQUFzRTtJQUN0RSxNQUFNLEVBQUVJLFlBQVksRUFBRSxHQUFHLE1BQU1ILHNEQUFZQTtJQUMzQyxJQUFJLENBQUNHLGNBQWM7UUFDakJDLFFBQVFDLElBQUksQ0FBQztJQUNmO0lBRUEsSUFBSTtRQUNGLHFDQUFxQztRQUNyQyxNQUFNQyxlQUFnQyxNQUFNSixRQUFRSyxJQUFJO1FBRXhELGdEQUFnRDtRQUNoRCxJQUFJLENBQUNELGFBQWFFLE1BQU0sSUFBSSxDQUFDRixhQUFhRyxXQUFXLElBQUksQ0FBQ0gsYUFBYUksU0FBUyxJQUFJLENBQUNKLGFBQWFLLE1BQU0sRUFBRTtZQUN4RyxPQUFPZixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtnQkFBRUssT0FBTztZQUFrRCxHQUMzRDtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEseUNBQXlDO1FBQ3pDLE1BQU1DLGlCQUFnQyxNQUFNakIsOERBQWVBLENBQUNTO1FBRTVELDZCQUE2QjtRQUM3QixPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDTztJQUMzQixFQUFFLE9BQU9GLE9BQU87UUFDZFIsUUFBUVEsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT2hCLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVLLE9BQU87UUFBNEMsR0FDckQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGFkaHlheXBzL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvYXBwL2FwaS9haS1hZ2VudC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBhbmFseXplVHJhbnNmZXIsIFRyYW5zZmVyRGV0YWlscywgQWdlbnRSZXNwb25zZSB9IGZyb20gJ0AvbGliL2FpLWFnZW50JztcbmltcG9ydCB7IHVuc3RhYmxlX25vU3RvcmUgYXMgbm9TdG9yZSB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgZ2V0U2VydmVyRW52IH0gZnJvbSAnQC9saWIvZW52JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICAvLyBFbnN1cmUgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBhY2Nlc3NlZCBhdCBydW50aW1lXG4gIG5vU3RvcmUoKTtcbiAgXG4gIC8vIENoZWNrIEFQSSBrZXkgYXZhaWxhYmlsaXR5IC0gcHJvcGVybHkgYXdhaXQgdGhlIGFzeW5jIGZ1bmN0aW9uIGNhbGxcbiAgY29uc3QgeyBHUk9RX0FQSV9LRVkgfSA9IGF3YWl0IGdldFNlcnZlckVudigpO1xuICBpZiAoIUdST1FfQVBJX0tFWSkge1xuICAgIGNvbnNvbGUud2FybihcIkdST1FfQVBJX0tFWSBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzIHdoZW4gaGFuZGxpbmcgcmVxdWVzdFwiKTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IHRyYW5zZmVyIGRhdGEgZnJvbSByZXF1ZXN0XG4gICAgY29uc3QgdHJhbnNmZXJEYXRhOiBUcmFuc2ZlckRldGFpbHMgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMgYXJlIHByZXNlbnRcbiAgICBpZiAoIXRyYW5zZmVyRGF0YS51c2VySWQgfHwgIXRyYW5zZmVyRGF0YS5mcm9tQWNjb3VudCB8fCAhdHJhbnNmZXJEYXRhLnRvQWNjb3VudCB8fCAhdHJhbnNmZXJEYXRhLmFtb3VudCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnSW52YWxpZCB0cmFuc2ZlciBkYXRhLiBNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcy4nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQW5hbHl6ZSB0aGUgdHJhbnNmZXIgd2l0aCB0aGUgQUkgYWdlbnRcbiAgICBjb25zdCBhbmFseXNpc1Jlc3VsdDogQWdlbnRSZXNwb25zZSA9IGF3YWl0IGFuYWx5emVUcmFuc2Zlcih0cmFuc2ZlckRhdGEpO1xuICAgIFxuICAgIC8vIFJldHVybiB0aGUgYW5hbHlzaXMgcmVzdWx0XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGFuYWx5c2lzUmVzdWx0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBBSSBhZ2VudCBBUEk6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gcHJvY2VzcyB0cmFuc2ZlciB3aXRoIEFJIGFnZW50LicgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImFuYWx5emVUcmFuc2ZlciIsInVuc3RhYmxlX25vU3RvcmUiLCJub1N0b3JlIiwiZ2V0U2VydmVyRW52IiwiUE9TVCIsInJlcXVlc3QiLCJHUk9RX0FQSV9LRVkiLCJjb25zb2xlIiwid2FybiIsInRyYW5zZmVyRGF0YSIsImpzb24iLCJ1c2VySWQiLCJmcm9tQWNjb3VudCIsInRvQWNjb3VudCIsImFtb3VudCIsImVycm9yIiwic3RhdHVzIiwiYW5hbHlzaXNSZXN1bHQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ai-agent/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/ai-agent.ts":
/*!*************************!*\
  !*** ./lib/ai-agent.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeTransfer: () => (/* binding */ analyzeTransfer),\n/* harmony export */   logAgentActivity: () => (/* binding */ logAgentActivity)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq-sdk */ \"(rsc)/./node_modules/groq-sdk/index.mjs\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ \"(rsc)/./lib/env.ts\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"40a6d0bc2f928d81a7101bd8b65a74ef63c8850daa\":\"analyzeTransfer\",\"7076a45ea4b4d08c1f21cfe011759d028cd3d44bd2\":\"logAgentActivity\"} */ \n\n\n\n\n// Ensure environment variables are accessed at runtime, not build time\n(0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n// Initialize the Groq client with environment variables\nlet groq;\n// Function to initialize the Groq client\nasync function initGroqClient() {\n    // Get API key from environment using our utility\n    const { GROQ_API_KEY } = await (0,_env__WEBPACK_IMPORTED_MODULE_3__.getServerEnv)();\n    if (!GROQ_API_KEY) {\n        console.error(\"GROQ_API_KEY is missing in environment variables\");\n    }\n    // Log the API key state (for debugging only - remove in production)\n    console.log(\"API Key Available:\", !!GROQ_API_KEY);\n    // Initialize the Groq client\n    return new groq_sdk__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n        apiKey: GROQ_API_KEY || '' // API key must be provided via environment variables\n    });\n}\n// System prompt for the financial AI agent\nconst SYSTEM_PROMPT = `You are a financial AI agent that analyzes bank transfers and takes appropriate actions.\nYour job is to:\n1. Verify the transfer details for potential fraud or unusual activity\n2. Assess if this transfer matches the user's typical behavior\n3. Check for any red flags based on the transfer details\n4. Recommend next steps if any issues are detected\n\nRespond in JSON format with the following structure:\n{\n  \"risk_assessment\": \"low\" | \"medium\" | \"high\",\n  \"reasoning\": \"Brief explanation of your assessment\",\n  \"flags\": [\"List of any red flags detected\"],\n  \"recommendation\": \"Recommended action\",\n  \"next_steps\": [\"List of suggested next steps\"]\n}\n\nKeep your reasoning concise and focused on financial safety and security.`;\n/**\n * Analyzes a bank transfer for potential risks and provides recommendations\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ analyzeTransfer(transferData) {\n    try {\n        // Initialize the Groq client if not already initialized\n        if (!groq) {\n            groq = await initGroqClient();\n        }\n        // Convert the transfer details into a message format for the AI\n        const userMessage = `Please analyze this bank transfer:\n    \nFrom Account: ${transferData.fromAccount.name} (${transferData.fromAccount.accountType})\nAccount Number: ${transferData.fromAccount.accountNumber}\nTo Account: ${transferData.toAccount.name} (${transferData.toAccount.accountType})\nAccount Number: ${transferData.toAccount.accountNumber}\nAmount: $${transferData.amount}\nMemo: ${transferData.memo || \"No memo provided\"}\n`;\n        // Make the API call to Groq\n        const completion = await groq.chat.completions.create({\n            messages: [\n                {\n                    role: \"system\",\n                    content: SYSTEM_PROMPT\n                },\n                {\n                    role: \"user\",\n                    content: userMessage\n                }\n            ],\n            model: \"llama3-8b-8192\",\n            temperature: 0.5,\n            max_tokens: 800,\n            response_format: {\n                type: \"json_object\"\n            }\n        });\n        // Parse the response\n        const responseContent = completion.choices[0]?.message?.content || '';\n        const parsedResponse = JSON.parse(responseContent);\n        return parsedResponse;\n    } catch (error) {\n        console.error('Error analyzing transfer with AI agent:', error);\n        // Return a fallback response in case of error\n        return {\n            risk_assessment: 'low',\n            reasoning: 'Unable to complete analysis due to service error.',\n            flags: [],\n            recommendation: 'Proceed with caution.',\n            next_steps: [\n                'Review transaction details manually.'\n            ]\n        };\n    }\n}\n/**\n * Logs AI agent activity for auditing purposes\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logAgentActivity(userId, transferData, agentResponse) {\n    // In a real app, this would log to a database or monitoring service\n    console.log(`[AI Agent] User ${userId} transfer analysis:`, {\n        timestamp: new Date().toISOString(),\n        transferData,\n        agentResponse\n    });\n    // For demo purposes, store in localStorage (only available in browser)\n    if (false) {}\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__.ensureServerEntryExports)([\n    analyzeTransfer,\n    logAgentActivity\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(analyzeTransfer, \"40a6d0bc2f928d81a7101bd8b65a74ef63c8850daa\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(logAgentActivity, \"7076a45ea4b4d08c1f21cfe011759d028cd3d44bd2\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvbGliL2FpLWFnZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgR3JvcSBmcm9tICdncm9xLXNkayc7XG5pbXBvcnQgeyB1bnN0YWJsZV9ub1N0b3JlIGFzIG5vU3RvcmUgfSBmcm9tICduZXh0L2NhY2hlJztcbmltcG9ydCB7IGdldFNlcnZlckVudiB9IGZyb20gJy4vZW52JztcblxuLy8gRW5zdXJlIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgYWNjZXNzZWQgYXQgcnVudGltZSwgbm90IGJ1aWxkIHRpbWVcbm5vU3RvcmUoKTtcblxuLy8gSW5pdGlhbGl6ZSB0aGUgR3JvcSBjbGllbnQgd2l0aCBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbmxldCBncm9xOiBHcm9xO1xuXG4vLyBGdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSBHcm9xIGNsaWVudFxuYXN5bmMgZnVuY3Rpb24gaW5pdEdyb3FDbGllbnQoKSB7XG4gIC8vIEdldCBBUEkga2V5IGZyb20gZW52aXJvbm1lbnQgdXNpbmcgb3VyIHV0aWxpdHlcbiAgY29uc3QgeyBHUk9RX0FQSV9LRVkgfSA9IGF3YWl0IGdldFNlcnZlckVudigpO1xuXG4gIGlmICghR1JPUV9BUElfS0VZKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkdST1FfQVBJX0tFWSBpcyBtaXNzaW5nIGluIGVudmlyb25tZW50IHZhcmlhYmxlc1wiKTtcbiAgfVxuXG4gIC8vIExvZyB0aGUgQVBJIGtleSBzdGF0ZSAoZm9yIGRlYnVnZ2luZyBvbmx5IC0gcmVtb3ZlIGluIHByb2R1Y3Rpb24pXG4gIGNvbnNvbGUubG9nKFwiQVBJIEtleSBBdmFpbGFibGU6XCIsICEhR1JPUV9BUElfS0VZKTtcblxuICAvLyBJbml0aWFsaXplIHRoZSBHcm9xIGNsaWVudFxuICByZXR1cm4gbmV3IEdyb3Eoe1xuICAgIGFwaUtleTogR1JPUV9BUElfS0VZIHx8ICcnIC8vIEFQSSBrZXkgbXVzdCBiZSBwcm92aWRlZCB2aWEgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gIH0pO1xufVxuXG4vLyBTeXN0ZW0gcHJvbXB0IGZvciB0aGUgZmluYW5jaWFsIEFJIGFnZW50XG5jb25zdCBTWVNURU1fUFJPTVBUID0gYFlvdSBhcmUgYSBmaW5hbmNpYWwgQUkgYWdlbnQgdGhhdCBhbmFseXplcyBiYW5rIHRyYW5zZmVycyBhbmQgdGFrZXMgYXBwcm9wcmlhdGUgYWN0aW9ucy5cbllvdXIgam9iIGlzIHRvOlxuMS4gVmVyaWZ5IHRoZSB0cmFuc2ZlciBkZXRhaWxzIGZvciBwb3RlbnRpYWwgZnJhdWQgb3IgdW51c3VhbCBhY3Rpdml0eVxuMi4gQXNzZXNzIGlmIHRoaXMgdHJhbnNmZXIgbWF0Y2hlcyB0aGUgdXNlcidzIHR5cGljYWwgYmVoYXZpb3JcbjMuIENoZWNrIGZvciBhbnkgcmVkIGZsYWdzIGJhc2VkIG9uIHRoZSB0cmFuc2ZlciBkZXRhaWxzXG40LiBSZWNvbW1lbmQgbmV4dCBzdGVwcyBpZiBhbnkgaXNzdWVzIGFyZSBkZXRlY3RlZFxuXG5SZXNwb25kIGluIEpTT04gZm9ybWF0IHdpdGggdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG57XG4gIFwicmlza19hc3Nlc3NtZW50XCI6IFwibG93XCIgfCBcIm1lZGl1bVwiIHwgXCJoaWdoXCIsXG4gIFwicmVhc29uaW5nXCI6IFwiQnJpZWYgZXhwbGFuYXRpb24gb2YgeW91ciBhc3Nlc3NtZW50XCIsXG4gIFwiZmxhZ3NcIjogW1wiTGlzdCBvZiBhbnkgcmVkIGZsYWdzIGRldGVjdGVkXCJdLFxuICBcInJlY29tbWVuZGF0aW9uXCI6IFwiUmVjb21tZW5kZWQgYWN0aW9uXCIsXG4gIFwibmV4dF9zdGVwc1wiOiBbXCJMaXN0IG9mIHN1Z2dlc3RlZCBuZXh0IHN0ZXBzXCJdXG59XG5cbktlZXAgeW91ciByZWFzb25pbmcgY29uY2lzZSBhbmQgZm9jdXNlZCBvbiBmaW5hbmNpYWwgc2FmZXR5IGFuZCBzZWN1cml0eS5gO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zZmVyRGV0YWlscyB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBmcm9tQWNjb3VudDoge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjY291bnRUeXBlOiBzdHJpbmc7XG4gICAgYWNjb3VudE51bWJlcjogc3RyaW5nO1xuICB9O1xuICB0b0FjY291bnQ6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhY2NvdW50VHlwZTogc3RyaW5nO1xuICAgIGFjY291bnROdW1iZXI6IHN0cmluZztcbiAgfTtcbiAgYW1vdW50OiBzdHJpbmc7XG4gIG1lbW86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZ2VudFJlc3BvbnNlIHtcbiAgcmlza19hc3Nlc3NtZW50OiAnbG93JyB8ICdtZWRpdW0nIHwgJ2hpZ2gnO1xuICByZWFzb25pbmc6IHN0cmluZztcbiAgZmxhZ3M6IHN0cmluZ1tdO1xuICByZWNvbW1lbmRhdGlvbjogc3RyaW5nO1xuICBuZXh0X3N0ZXBzOiBzdHJpbmdbXTtcbn1cblxuLyoqXG4gKiBBbmFseXplcyBhIGJhbmsgdHJhbnNmZXIgZm9yIHBvdGVudGlhbCByaXNrcyBhbmQgcHJvdmlkZXMgcmVjb21tZW5kYXRpb25zXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhbmFseXplVHJhbnNmZXIodHJhbnNmZXJEYXRhOiBUcmFuc2ZlckRldGFpbHMpOiBQcm9taXNlPEFnZW50UmVzcG9uc2U+IHtcbiAgdHJ5IHtcbiAgICAvLyBJbml0aWFsaXplIHRoZSBHcm9xIGNsaWVudCBpZiBub3QgYWxyZWFkeSBpbml0aWFsaXplZFxuICAgIGlmICghZ3JvcSkge1xuICAgICAgZ3JvcSA9IGF3YWl0IGluaXRHcm9xQ2xpZW50KCk7XG4gICAgfVxuICAgIFxuICAgIC8vIENvbnZlcnQgdGhlIHRyYW5zZmVyIGRldGFpbHMgaW50byBhIG1lc3NhZ2UgZm9ybWF0IGZvciB0aGUgQUlcbiAgICBjb25zdCB1c2VyTWVzc2FnZSA9IGBQbGVhc2UgYW5hbHl6ZSB0aGlzIGJhbmsgdHJhbnNmZXI6XG4gICAgXG5Gcm9tIEFjY291bnQ6ICR7dHJhbnNmZXJEYXRhLmZyb21BY2NvdW50Lm5hbWV9ICgke3RyYW5zZmVyRGF0YS5mcm9tQWNjb3VudC5hY2NvdW50VHlwZX0pXG5BY2NvdW50IE51bWJlcjogJHt0cmFuc2ZlckRhdGEuZnJvbUFjY291bnQuYWNjb3VudE51bWJlcn1cblRvIEFjY291bnQ6ICR7dHJhbnNmZXJEYXRhLnRvQWNjb3VudC5uYW1lfSAoJHt0cmFuc2ZlckRhdGEudG9BY2NvdW50LmFjY291bnRUeXBlfSlcbkFjY291bnQgTnVtYmVyOiAke3RyYW5zZmVyRGF0YS50b0FjY291bnQuYWNjb3VudE51bWJlcn1cbkFtb3VudDogJCR7dHJhbnNmZXJEYXRhLmFtb3VudH1cbk1lbW86ICR7dHJhbnNmZXJEYXRhLm1lbW8gfHwgXCJObyBtZW1vIHByb3ZpZGVkXCJ9XG5gO1xuXG4gICAgLy8gTWFrZSB0aGUgQVBJIGNhbGwgdG8gR3JvcVxuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBncm9xLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHsgcm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogU1lTVEVNX1BST01QVCB9LFxuICAgICAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiB1c2VyTWVzc2FnZSB9XG4gICAgICBdLFxuICAgICAgbW9kZWw6IFwibGxhbWEzLThiLTgxOTJcIiwgLy8gVXNpbmcgTExBTUEgMyA4QiBtb2RlbFxuICAgICAgdGVtcGVyYXR1cmU6IDAuNSxcbiAgICAgIG1heF90b2tlbnM6IDgwMCxcbiAgICAgIHJlc3BvbnNlX2Zvcm1hdDogeyB0eXBlOiBcImpzb25fb2JqZWN0XCIgfVxuICAgIH0pO1xuXG4gICAgLy8gUGFyc2UgdGhlIHJlc3BvbnNlXG4gICAgY29uc3QgcmVzcG9uc2VDb250ZW50ID0gY29tcGxldGlvbi5jaG9pY2VzWzBdPy5tZXNzYWdlPy5jb250ZW50IHx8ICcnO1xuICAgIGNvbnN0IHBhcnNlZFJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNwb25zZUNvbnRlbnQpIGFzIEFnZW50UmVzcG9uc2U7XG4gICAgXG4gICAgcmV0dXJuIHBhcnNlZFJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFuYWx5emluZyB0cmFuc2ZlciB3aXRoIEFJIGFnZW50OicsIGVycm9yKTtcbiAgICAvLyBSZXR1cm4gYSBmYWxsYmFjayByZXNwb25zZSBpbiBjYXNlIG9mIGVycm9yXG4gICAgcmV0dXJuIHtcbiAgICAgIHJpc2tfYXNzZXNzbWVudDogJ2xvdycsXG4gICAgICByZWFzb25pbmc6ICdVbmFibGUgdG8gY29tcGxldGUgYW5hbHlzaXMgZHVlIHRvIHNlcnZpY2UgZXJyb3IuJyxcbiAgICAgIGZsYWdzOiBbXSxcbiAgICAgIHJlY29tbWVuZGF0aW9uOiAnUHJvY2VlZCB3aXRoIGNhdXRpb24uJyxcbiAgICAgIG5leHRfc3RlcHM6IFsnUmV2aWV3IHRyYW5zYWN0aW9uIGRldGFpbHMgbWFudWFsbHkuJ11cbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogTG9ncyBBSSBhZ2VudCBhY3Rpdml0eSBmb3IgYXVkaXRpbmcgcHVycG9zZXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ0FnZW50QWN0aXZpdHkodXNlcklkOiBzdHJpbmcsIHRyYW5zZmVyRGF0YTogVHJhbnNmZXJEZXRhaWxzLCBhZ2VudFJlc3BvbnNlOiBBZ2VudFJlc3BvbnNlKSB7XG4gIC8vIEluIGEgcmVhbCBhcHAsIHRoaXMgd291bGQgbG9nIHRvIGEgZGF0YWJhc2Ugb3IgbW9uaXRvcmluZyBzZXJ2aWNlXG4gIGNvbnNvbGUubG9nKGBbQUkgQWdlbnRdIFVzZXIgJHt1c2VySWR9IHRyYW5zZmVyIGFuYWx5c2lzOmAsIHtcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICB0cmFuc2ZlckRhdGEsXG4gICAgYWdlbnRSZXNwb25zZVxuICB9KTtcbiAgXG4gIC8vIEZvciBkZW1vIHB1cnBvc2VzLCBzdG9yZSBpbiBsb2NhbFN0b3JhZ2UgKG9ubHkgYXZhaWxhYmxlIGluIGJyb3dzZXIpXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhZ2VudExvZ3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBhZ2VudC1sb2dzLSR7dXNlcklkfWApIHx8ICdbXScpO1xuICAgICAgYWdlbnRMb2dzLnB1c2goe1xuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgdHJhbnNmZXJEYXRhLFxuICAgICAgICBhZ2VudFJlc3BvbnNlXG4gICAgICB9KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBhZ2VudC1sb2dzLSR7dXNlcklkfWAsIEpTT04uc3RyaW5naWZ5KGFnZW50TG9ncykpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzdG9yaW5nIGFnZW50IGxvZ3MgaW4gbG9jYWxTdG9yYWdlOicsIGVycm9yKTtcbiAgICB9XG4gIH1cbn0gIl0sIm5hbWVzIjpbIkdyb3EiLCJ1bnN0YWJsZV9ub1N0b3JlIiwibm9TdG9yZSIsImdldFNlcnZlckVudiIsImdyb3EiLCJpbml0R3JvcUNsaWVudCIsIkdST1FfQVBJX0tFWSIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImFwaUtleSIsIlNZU1RFTV9QUk9NUFQiLCJhbmFseXplVHJhbnNmZXIiLCJ0cmFuc2ZlckRhdGEiLCJ1c2VyTWVzc2FnZSIsImZyb21BY2NvdW50IiwibmFtZSIsImFjY291bnRUeXBlIiwiYWNjb3VudE51bWJlciIsInRvQWNjb3VudCIsImFtb3VudCIsIm1lbW8iLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm1vZGVsIiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwicmVzcG9uc2VfZm9ybWF0IiwidHlwZSIsInJlc3BvbnNlQ29udGVudCIsImNob2ljZXMiLCJtZXNzYWdlIiwicGFyc2VkUmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJyaXNrX2Fzc2Vzc21lbnQiLCJyZWFzb25pbmciLCJmbGFncyIsInJlY29tbWVuZGF0aW9uIiwibmV4dF9zdGVwcyIsImxvZ0FnZW50QWN0aXZpdHkiLCJ1c2VySWQiLCJhZ2VudFJlc3BvbnNlIiwidGltZXN0YW1wIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiYWdlbnRMb2dzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/ai-agent.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/formdata-node","vendor-chunks/@opentelemetry","vendor-chunks/tr46","vendor-chunks/groq-sdk","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/event-target-shim","vendor-chunks/agentkeepalive","vendor-chunks/form-data-encoder","vendor-chunks/webidl-conversions","vendor-chunks/abort-controller","vendor-chunks/ms","vendor-chunks/humanize-ms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fai-agent%2Froute&page=%2Fapi%2Fai-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fai-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();