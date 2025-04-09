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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/ai-agent */ \"(rsc)/./lib/ai-agent.ts\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/env */ \"(rsc)/./lib/env.ts\");\n\n\n\n\nasync function POST(request) {\n    // Ensure environment variables are accessed at runtime\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n    // Check API key availability - properly await the async function call\n    const { GROQ_API_KEY } = await (0,_lib_env__WEBPACK_IMPORTED_MODULE_3__.getServerEnv)();\n    if (!GROQ_API_KEY) {\n        console.warn(\"GROQ_API_KEY not found in environment variables when handling request\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'AI service is currently unavailable.'\n        }, {\n            status: 503\n        });\n    }\n    try {\n        // Extract transfer data from request\n        const transferData = await request.json();\n        // Make sure the required properties are present\n        if (!transferData.userId || !transferData.fromAccount || !transferData.toAccount || !transferData.amount) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Invalid transfer data. Missing required fields.'\n            }, {\n                status: 400\n            });\n        }\n        // Analyze the transfer with the AI agent\n        const analysisResult = await (0,_lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__.analyzeTransfer)(transferData);\n        // Log the server-side activity\n        await (0,_lib_ai_agent__WEBPACK_IMPORTED_MODULE_1__.logAgentActivity)(transferData.userId, transferData, analysisResult);\n        // Return the analysis result\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(analysisResult);\n    } catch (error) {\n        console.error('Error in AI agent API:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to process transfer with AI agent.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FpLWFnZW50L3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQUN3RDtBQUMxQztBQUNoQjtBQUVsQyxlQUFlTSxLQUFLQyxPQUFnQjtJQUN6Qyx1REFBdUQ7SUFDdkRILDREQUFPQTtJQUVQLHNFQUFzRTtJQUN0RSxNQUFNLEVBQUVJLFlBQVksRUFBRSxHQUFHLE1BQU1ILHNEQUFZQTtJQUMzQyxJQUFJLENBQUNHLGNBQWM7UUFDakJDLFFBQVFDLElBQUksQ0FBQztRQUNiLE9BQU9WLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBdUMsR0FDaEQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0lBRUEsSUFBSTtRQUNGLHFDQUFxQztRQUNyQyxNQUFNQyxlQUFnQyxNQUFNUCxRQUFRSSxJQUFJO1FBRXhELGdEQUFnRDtRQUNoRCxJQUFJLENBQUNHLGFBQWFDLE1BQU0sSUFBSSxDQUFDRCxhQUFhRSxXQUFXLElBQUksQ0FBQ0YsYUFBYUcsU0FBUyxJQUFJLENBQUNILGFBQWFJLE1BQU0sRUFBRTtZQUN4RyxPQUFPbEIscURBQVlBLENBQUNXLElBQUksQ0FDdEI7Z0JBQUVDLE9BQU87WUFBa0QsR0FDM0Q7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLHlDQUF5QztRQUN6QyxNQUFNTSxpQkFBZ0MsTUFBTWxCLDhEQUFlQSxDQUFDYTtRQUU1RCwrQkFBK0I7UUFDL0IsTUFBTVosK0RBQWdCQSxDQUFDWSxhQUFhQyxNQUFNLEVBQUVELGNBQWNLO1FBRTFELDZCQUE2QjtRQUM3QixPQUFPbkIscURBQVlBLENBQUNXLElBQUksQ0FBQ1E7SUFDM0IsRUFBRSxPQUFPUCxPQUFPO1FBQ2RILFFBQVFHLEtBQUssQ0FBQywwQkFBMEJBO1FBQ3hDLE9BQU9aLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVDLE9BQU87UUFBNEMsR0FDckQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGFkaHlheXBzL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvYXBwL2FwaS9haS1hZ2VudC9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBhbmFseXplVHJhbnNmZXIsIFRyYW5zZmVyRGV0YWlscywgQWdlbnRSZXNwb25zZSwgbG9nQWdlbnRBY3Rpdml0eSB9IGZyb20gJ0AvbGliL2FpLWFnZW50JztcbmltcG9ydCB7IHVuc3RhYmxlX25vU3RvcmUgYXMgbm9TdG9yZSB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgZ2V0U2VydmVyRW52IH0gZnJvbSAnQC9saWIvZW52JztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICAvLyBFbnN1cmUgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBhY2Nlc3NlZCBhdCBydW50aW1lXG4gIG5vU3RvcmUoKTtcbiAgXG4gIC8vIENoZWNrIEFQSSBrZXkgYXZhaWxhYmlsaXR5IC0gcHJvcGVybHkgYXdhaXQgdGhlIGFzeW5jIGZ1bmN0aW9uIGNhbGxcbiAgY29uc3QgeyBHUk9RX0FQSV9LRVkgfSA9IGF3YWl0IGdldFNlcnZlckVudigpO1xuICBpZiAoIUdST1FfQVBJX0tFWSkge1xuICAgIGNvbnNvbGUud2FybihcIkdST1FfQVBJX0tFWSBub3QgZm91bmQgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzIHdoZW4gaGFuZGxpbmcgcmVxdWVzdFwiKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiAnQUkgc2VydmljZSBpcyBjdXJyZW50bHkgdW5hdmFpbGFibGUuJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMyB9XG4gICAgKTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICAvLyBFeHRyYWN0IHRyYW5zZmVyIGRhdGEgZnJvbSByZXF1ZXN0XG4gICAgY29uc3QgdHJhbnNmZXJEYXRhOiBUcmFuc2ZlckRldGFpbHMgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcbiAgICBcbiAgICAvLyBNYWtlIHN1cmUgdGhlIHJlcXVpcmVkIHByb3BlcnRpZXMgYXJlIHByZXNlbnRcbiAgICBpZiAoIXRyYW5zZmVyRGF0YS51c2VySWQgfHwgIXRyYW5zZmVyRGF0YS5mcm9tQWNjb3VudCB8fCAhdHJhbnNmZXJEYXRhLnRvQWNjb3VudCB8fCAhdHJhbnNmZXJEYXRhLmFtb3VudCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IGVycm9yOiAnSW52YWxpZCB0cmFuc2ZlciBkYXRhLiBNaXNzaW5nIHJlcXVpcmVkIGZpZWxkcy4nIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQW5hbHl6ZSB0aGUgdHJhbnNmZXIgd2l0aCB0aGUgQUkgYWdlbnRcbiAgICBjb25zdCBhbmFseXNpc1Jlc3VsdDogQWdlbnRSZXNwb25zZSA9IGF3YWl0IGFuYWx5emVUcmFuc2Zlcih0cmFuc2ZlckRhdGEpO1xuICAgIFxuICAgIC8vIExvZyB0aGUgc2VydmVyLXNpZGUgYWN0aXZpdHlcbiAgICBhd2FpdCBsb2dBZ2VudEFjdGl2aXR5KHRyYW5zZmVyRGF0YS51c2VySWQsIHRyYW5zZmVyRGF0YSwgYW5hbHlzaXNSZXN1bHQpO1xuICAgIFxuICAgIC8vIFJldHVybiB0aGUgYW5hbHlzaXMgcmVzdWx0XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGFuYWx5c2lzUmVzdWx0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBBSSBhZ2VudCBBUEk6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6ICdGYWlsZWQgdG8gcHJvY2VzcyB0cmFuc2ZlciB3aXRoIEFJIGFnZW50LicgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImFuYWx5emVUcmFuc2ZlciIsImxvZ0FnZW50QWN0aXZpdHkiLCJ1bnN0YWJsZV9ub1N0b3JlIiwibm9TdG9yZSIsImdldFNlcnZlckVudiIsIlBPU1QiLCJyZXF1ZXN0IiwiR1JPUV9BUElfS0VZIiwiY29uc29sZSIsIndhcm4iLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJ0cmFuc2ZlckRhdGEiLCJ1c2VySWQiLCJmcm9tQWNjb3VudCIsInRvQWNjb3VudCIsImFtb3VudCIsImFuYWx5c2lzUmVzdWx0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/ai-agent/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/ai-agent.ts":
/*!*************************!*\
  !*** ./lib/ai-agent.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   analyzeTransfer: () => (/* binding */ analyzeTransfer),\n/* harmony export */   logAgentActivity: () => (/* binding */ logAgentActivity)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! groq-sdk */ \"(rsc)/./node_modules/groq-sdk/index.mjs\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./env */ \"(rsc)/./lib/env.ts\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"40a6d0bc2f928d81a7101bd8b65a74ef63c8850daa\":\"analyzeTransfer\",\"7076a45ea4b4d08c1f21cfe011759d028cd3d44bd2\":\"logAgentActivity\"} */ \n\n\n\n\n// Ensure environment variables are accessed at runtime, not build time\n(0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n// Initialize the Groq client with environment variables\nlet groq;\n// Function to initialize the Groq client\nasync function initGroqClient() {\n    // Get API key from environment using our utility\n    const { GROQ_API_KEY } = await (0,_env__WEBPACK_IMPORTED_MODULE_3__.getServerEnv)();\n    if (!GROQ_API_KEY) {\n        console.error(\"GROQ_API_KEY is missing in environment variables\");\n    }\n    // Log the API key state (for debugging only - remove in production)\n    console.log(\"API Key Available:\", !!GROQ_API_KEY);\n    // Initialize the Groq client\n    return new groq_sdk__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n        apiKey: GROQ_API_KEY || '' // API key must be provided via environment variables\n    });\n}\n// System prompt for the financial AI agent\nconst SYSTEM_PROMPT = `You are a financial AI agent that analyzes bank transfers and takes appropriate actions.\nYour job is to:\n1. Verify the transfer details for potential fraud or unusual activity\n2. Assess if this transfer matches the user's typical behavior\n3. Check for any red flags based on the transfer details\n4. Recommend next steps if any issues are detected\n\nRespond in JSON format with the following structure:\n{\n  \"risk_assessment\": \"low\" | \"medium\" | \"high\",\n  \"reasoning\": \"Brief explanation of your assessment\",\n  \"flags\": [\"List of any red flags detected\"],\n  \"recommendation\": \"Recommended action\",\n  \"next_steps\": [\"List of suggested next steps\"]\n}\n\nKeep your reasoning concise and focused on financial safety and security.`;\n/**\n * Analyzes a bank transfer for potential risks and provides recommendations\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ analyzeTransfer(transferData) {\n    try {\n        // Initialize the Groq client if not already initialized\n        if (!groq) {\n            groq = await initGroqClient();\n        }\n        // Convert the transfer details into a message format for the AI\n        const userMessage = `Please analyze this bank transfer:\n    \nFrom Account: ${transferData.fromAccount.name} (${transferData.fromAccount.accountType})\nAccount Number: ${transferData.fromAccount.accountNumber}\nTo Account: ${transferData.toAccount.name} (${transferData.toAccount.accountType})\nAccount Number: ${transferData.toAccount.accountNumber}\nAmount: $${transferData.amount}\nMemo: ${transferData.memo || \"No memo provided\"}\n`;\n        // Make the API call to Groq\n        const completion = await groq.chat.completions.create({\n            messages: [\n                {\n                    role: \"system\",\n                    content: SYSTEM_PROMPT\n                },\n                {\n                    role: \"user\",\n                    content: userMessage\n                }\n            ],\n            model: \"llama3-8b-8192\",\n            temperature: 0.5,\n            max_tokens: 800,\n            response_format: {\n                type: \"json_object\"\n            }\n        });\n        // Parse the response\n        const responseContent = completion.choices[0]?.message?.content || '';\n        const parsedResponse = JSON.parse(responseContent);\n        return parsedResponse;\n    } catch (error) {\n        console.error('Error analyzing transfer with AI agent:', error);\n        // Return a fallback response in case of error\n        return {\n            risk_assessment: 'low',\n            reasoning: 'Unable to complete analysis due to service error.',\n            flags: [],\n            recommendation: 'Proceed with caution.',\n            next_steps: [\n                'Review transaction details manually.'\n            ]\n        };\n    }\n}\n/**\n * Logs AI agent activity for auditing purposes\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logAgentActivity(userId, transferData, agentResponse) {\n    // In a real app, this would log to a database or monitoring service\n    console.log(`[AI Agent] User ${userId} transfer analysis:`, {\n        timestamp: new Date().toISOString(),\n        transferData,\n        agentResponse\n    });\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_5__.ensureServerEntryExports)([\n    analyzeTransfer,\n    logAgentActivity\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(analyzeTransfer, \"40a6d0bc2f928d81a7101bd8b65a74ef63c8850daa\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(logAgentActivity, \"7076a45ea4b4d08c1f21cfe011759d028cd3d44bd2\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dS9Eb2N1bWVudHMvRGlnaXRlbml1bS9EaWdpYmFuay9saWIvYWktYWdlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBHcm9xIGZyb20gJ2dyb3Etc2RrJztcbmltcG9ydCB7IHVuc3RhYmxlX25vU3RvcmUgYXMgbm9TdG9yZSB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgZ2V0U2VydmVyRW52IH0gZnJvbSAnLi9lbnYnO1xuXG4vLyBFbnN1cmUgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBhY2Nlc3NlZCBhdCBydW50aW1lLCBub3QgYnVpbGQgdGltZVxubm9TdG9yZSgpO1xuXG4vLyBJbml0aWFsaXplIHRoZSBHcm9xIGNsaWVudCB3aXRoIGVudmlyb25tZW50IHZhcmlhYmxlc1xubGV0IGdyb3E6IEdyb3E7XG5cbi8vIEZ1bmN0aW9uIHRvIGluaXRpYWxpemUgdGhlIEdyb3EgY2xpZW50XG5hc3luYyBmdW5jdGlvbiBpbml0R3JvcUNsaWVudCgpIHtcbiAgLy8gR2V0IEFQSSBrZXkgZnJvbSBlbnZpcm9ubWVudCB1c2luZyBvdXIgdXRpbGl0eVxuICBjb25zdCB7IEdST1FfQVBJX0tFWSB9ID0gYXdhaXQgZ2V0U2VydmVyRW52KCk7XG5cbiAgaWYgKCFHUk9RX0FQSV9LRVkpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiR1JPUV9BUElfS0VZIGlzIG1pc3NpbmcgaW4gZW52aXJvbm1lbnQgdmFyaWFibGVzXCIpO1xuICB9XG5cbiAgLy8gTG9nIHRoZSBBUEkga2V5IHN0YXRlIChmb3IgZGVidWdnaW5nIG9ubHkgLSByZW1vdmUgaW4gcHJvZHVjdGlvbilcbiAgY29uc29sZS5sb2coXCJBUEkgS2V5IEF2YWlsYWJsZTpcIiwgISFHUk9RX0FQSV9LRVkpO1xuXG4gIC8vIEluaXRpYWxpemUgdGhlIEdyb3EgY2xpZW50XG4gIHJldHVybiBuZXcgR3JvcSh7XG4gICAgYXBpS2V5OiBHUk9RX0FQSV9LRVkgfHwgJycgLy8gQVBJIGtleSBtdXN0IGJlIHByb3ZpZGVkIHZpYSBlbnZpcm9ubWVudCB2YXJpYWJsZXNcbiAgfSk7XG59XG5cbi8vIFN5c3RlbSBwcm9tcHQgZm9yIHRoZSBmaW5hbmNpYWwgQUkgYWdlbnRcbmNvbnN0IFNZU1RFTV9QUk9NUFQgPSBgWW91IGFyZSBhIGZpbmFuY2lhbCBBSSBhZ2VudCB0aGF0IGFuYWx5emVzIGJhbmsgdHJhbnNmZXJzIGFuZCB0YWtlcyBhcHByb3ByaWF0ZSBhY3Rpb25zLlxuWW91ciBqb2IgaXMgdG86XG4xLiBWZXJpZnkgdGhlIHRyYW5zZmVyIGRldGFpbHMgZm9yIHBvdGVudGlhbCBmcmF1ZCBvciB1bnVzdWFsIGFjdGl2aXR5XG4yLiBBc3Nlc3MgaWYgdGhpcyB0cmFuc2ZlciBtYXRjaGVzIHRoZSB1c2VyJ3MgdHlwaWNhbCBiZWhhdmlvclxuMy4gQ2hlY2sgZm9yIGFueSByZWQgZmxhZ3MgYmFzZWQgb24gdGhlIHRyYW5zZmVyIGRldGFpbHNcbjQuIFJlY29tbWVuZCBuZXh0IHN0ZXBzIGlmIGFueSBpc3N1ZXMgYXJlIGRldGVjdGVkXG5cblJlc3BvbmQgaW4gSlNPTiBmb3JtYXQgd2l0aCB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZTpcbntcbiAgXCJyaXNrX2Fzc2Vzc21lbnRcIjogXCJsb3dcIiB8IFwibWVkaXVtXCIgfCBcImhpZ2hcIixcbiAgXCJyZWFzb25pbmdcIjogXCJCcmllZiBleHBsYW5hdGlvbiBvZiB5b3VyIGFzc2Vzc21lbnRcIixcbiAgXCJmbGFnc1wiOiBbXCJMaXN0IG9mIGFueSByZWQgZmxhZ3MgZGV0ZWN0ZWRcIl0sXG4gIFwicmVjb21tZW5kYXRpb25cIjogXCJSZWNvbW1lbmRlZCBhY3Rpb25cIixcbiAgXCJuZXh0X3N0ZXBzXCI6IFtcIkxpc3Qgb2Ygc3VnZ2VzdGVkIG5leHQgc3RlcHNcIl1cbn1cblxuS2VlcCB5b3VyIHJlYXNvbmluZyBjb25jaXNlIGFuZCBmb2N1c2VkIG9uIGZpbmFuY2lhbCBzYWZldHkgYW5kIHNlY3VyaXR5LmA7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNmZXJEZXRhaWxzIHtcbiAgdXNlcklkOiBzdHJpbmc7XG4gIGZyb21BY2NvdW50OiB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYWNjb3VudFR5cGU6IHN0cmluZztcbiAgICBhY2NvdW50TnVtYmVyOiBzdHJpbmc7XG4gIH07XG4gIHRvQWNjb3VudDoge1xuICAgIGlkOiBudW1iZXI7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFjY291bnRUeXBlOiBzdHJpbmc7XG4gICAgYWNjb3VudE51bWJlcjogc3RyaW5nO1xuICB9O1xuICBhbW91bnQ6IHN0cmluZztcbiAgbWVtbzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZW50UmVzcG9uc2Uge1xuICByaXNrX2Fzc2Vzc21lbnQ6ICdsb3cnIHwgJ21lZGl1bScgfCAnaGlnaCc7XG4gIHJlYXNvbmluZzogc3RyaW5nO1xuICBmbGFnczogc3RyaW5nW107XG4gIHJlY29tbWVuZGF0aW9uOiBzdHJpbmc7XG4gIG5leHRfc3RlcHM6IHN0cmluZ1tdO1xufVxuXG4vKipcbiAqIEFuYWx5emVzIGEgYmFuayB0cmFuc2ZlciBmb3IgcG90ZW50aWFsIHJpc2tzIGFuZCBwcm92aWRlcyByZWNvbW1lbmRhdGlvbnNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFuYWx5emVUcmFuc2Zlcih0cmFuc2ZlckRhdGE6IFRyYW5zZmVyRGV0YWlscyk6IFByb21pc2U8QWdlbnRSZXNwb25zZT4ge1xuICB0cnkge1xuICAgIC8vIEluaXRpYWxpemUgdGhlIEdyb3EgY2xpZW50IGlmIG5vdCBhbHJlYWR5IGluaXRpYWxpemVkXG4gICAgaWYgKCFncm9xKSB7XG4gICAgICBncm9xID0gYXdhaXQgaW5pdEdyb3FDbGllbnQoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gQ29udmVydCB0aGUgdHJhbnNmZXIgZGV0YWlscyBpbnRvIGEgbWVzc2FnZSBmb3JtYXQgZm9yIHRoZSBBSVxuICAgIGNvbnN0IHVzZXJNZXNzYWdlID0gYFBsZWFzZSBhbmFseXplIHRoaXMgYmFuayB0cmFuc2ZlcjpcbiAgICBcbkZyb20gQWNjb3VudDogJHt0cmFuc2ZlckRhdGEuZnJvbUFjY291bnQubmFtZX0gKCR7dHJhbnNmZXJEYXRhLmZyb21BY2NvdW50LmFjY291bnRUeXBlfSlcbkFjY291bnQgTnVtYmVyOiAke3RyYW5zZmVyRGF0YS5mcm9tQWNjb3VudC5hY2NvdW50TnVtYmVyfVxuVG8gQWNjb3VudDogJHt0cmFuc2ZlckRhdGEudG9BY2NvdW50Lm5hbWV9ICgke3RyYW5zZmVyRGF0YS50b0FjY291bnQuYWNjb3VudFR5cGV9KVxuQWNjb3VudCBOdW1iZXI6ICR7dHJhbnNmZXJEYXRhLnRvQWNjb3VudC5hY2NvdW50TnVtYmVyfVxuQW1vdW50OiAkJHt0cmFuc2ZlckRhdGEuYW1vdW50fVxuTWVtbzogJHt0cmFuc2ZlckRhdGEubWVtbyB8fCBcIk5vIG1lbW8gcHJvdmlkZWRcIn1cbmA7XG5cbiAgICAvLyBNYWtlIHRoZSBBUEkgY2FsbCB0byBHcm9xXG4gICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IGdyb3EuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBTWVNURU1fUFJPTVBUIH0sXG4gICAgICAgIHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IHVzZXJNZXNzYWdlIH1cbiAgICAgIF0sXG4gICAgICBtb2RlbDogXCJsbGFtYTMtOGItODE5MlwiLCAvLyBVc2luZyBMTEFNQSAzIDhCIG1vZGVsXG4gICAgICB0ZW1wZXJhdHVyZTogMC41LFxuICAgICAgbWF4X3Rva2VuczogODAwLFxuICAgICAgcmVzcG9uc2VfZm9ybWF0OiB7IHR5cGU6IFwianNvbl9vYmplY3RcIiB9XG4gICAgfSk7XG5cbiAgICAvLyBQYXJzZSB0aGUgcmVzcG9uc2VcbiAgICBjb25zdCByZXNwb25zZUNvbnRlbnQgPSBjb21wbGV0aW9uLmNob2ljZXNbMF0/Lm1lc3NhZ2U/LmNvbnRlbnQgfHwgJyc7XG4gICAgY29uc3QgcGFyc2VkUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlc3BvbnNlQ29udGVudCkgYXMgQWdlbnRSZXNwb25zZTtcbiAgICBcbiAgICByZXR1cm4gcGFyc2VkUmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgYW5hbHl6aW5nIHRyYW5zZmVyIHdpdGggQUkgYWdlbnQ6JywgZXJyb3IpO1xuICAgIC8vIFJldHVybiBhIGZhbGxiYWNrIHJlc3BvbnNlIGluIGNhc2Ugb2YgZXJyb3JcbiAgICByZXR1cm4ge1xuICAgICAgcmlza19hc3Nlc3NtZW50OiAnbG93JyxcbiAgICAgIHJlYXNvbmluZzogJ1VuYWJsZSB0byBjb21wbGV0ZSBhbmFseXNpcyBkdWUgdG8gc2VydmljZSBlcnJvci4nLFxuICAgICAgZmxhZ3M6IFtdLFxuICAgICAgcmVjb21tZW5kYXRpb246ICdQcm9jZWVkIHdpdGggY2F1dGlvbi4nLFxuICAgICAgbmV4dF9zdGVwczogWydSZXZpZXcgdHJhbnNhY3Rpb24gZGV0YWlscyBtYW51YWxseS4nXVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBMb2dzIEFJIGFnZW50IGFjdGl2aXR5IGZvciBhdWRpdGluZyBwdXJwb3Nlc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nQWdlbnRBY3Rpdml0eSh1c2VySWQ6IHN0cmluZywgdHJhbnNmZXJEYXRhOiBUcmFuc2ZlckRldGFpbHMsIGFnZW50UmVzcG9uc2U6IEFnZW50UmVzcG9uc2UpIHtcbiAgLy8gSW4gYSByZWFsIGFwcCwgdGhpcyB3b3VsZCBsb2cgdG8gYSBkYXRhYmFzZSBvciBtb25pdG9yaW5nIHNlcnZpY2VcbiAgY29uc29sZS5sb2coYFtBSSBBZ2VudF0gVXNlciAke3VzZXJJZH0gdHJhbnNmZXIgYW5hbHlzaXM6YCwge1xuICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIHRyYW5zZmVyRGF0YSxcbiAgICBhZ2VudFJlc3BvbnNlXG4gIH0pO1xufSAiXSwibmFtZXMiOlsiR3JvcSIsInVuc3RhYmxlX25vU3RvcmUiLCJub1N0b3JlIiwiZ2V0U2VydmVyRW52IiwiZ3JvcSIsImluaXRHcm9xQ2xpZW50IiwiR1JPUV9BUElfS0VZIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwiYXBpS2V5IiwiU1lTVEVNX1BST01QVCIsImFuYWx5emVUcmFuc2ZlciIsInRyYW5zZmVyRGF0YSIsInVzZXJNZXNzYWdlIiwiZnJvbUFjY291bnQiLCJuYW1lIiwiYWNjb3VudFR5cGUiLCJhY2NvdW50TnVtYmVyIiwidG9BY2NvdW50IiwiYW1vdW50IiwibWVtbyIsImNvbXBsZXRpb24iLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJyZXNwb25zZV9mb3JtYXQiLCJ0eXBlIiwicmVzcG9uc2VDb250ZW50IiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJwYXJzZWRSZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJpc2tfYXNzZXNzbWVudCIsInJlYXNvbmluZyIsImZsYWdzIiwicmVjb21tZW5kYXRpb24iLCJuZXh0X3N0ZXBzIiwibG9nQWdlbnRBY3Rpdml0eSIsInVzZXJJZCIsImFnZW50UmVzcG9uc2UiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/ai-agent.ts\n");

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