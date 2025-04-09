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
exports.id = "app/api/aoa-agent/route";
exports.ids = ["app/api/aoa-agent/route"];
exports.modules = {

/***/ "(rsc)/./app/api/aoa-agent/route.ts":
/*!************************************!*\
  !*** ./app/api/aoa-agent/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_aoa_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/aoa-agent */ \"(rsc)/./lib/aoa-agent.ts\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function POST(request) {\n    // Ensure environment variables are accessed at runtime\n    (0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n    try {\n        // Extract account data from request\n        const accountData = await request.json();\n        // Make sure the required properties are present\n        if (!accountData.userId || !accountData.bankName || !accountData.accountNumber || !accountData.routingNumber) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: 'Invalid account data. Missing required fields.'\n            }, {\n                status: 400\n            });\n        }\n        // Verify the account with the AOA agent\n        const verificationResult = await (0,_lib_aoa_agent__WEBPACK_IMPORTED_MODULE_1__.verifyAccount)(accountData);\n        // Log the server-side activity\n        await (0,_lib_aoa_agent__WEBPACK_IMPORTED_MODULE_1__.logAOAActivity)(accountData.userId, accountData, verificationResult);\n        // Return the verification result\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(verificationResult);\n    } catch (error) {\n        console.error('Error in AOA agent API:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Failed to process account verification.'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2FvYS1hZ2VudC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNrRDtBQUNwQztBQUVsRCxlQUFlSyxLQUFLQyxPQUFnQjtJQUN6Qyx1REFBdUQ7SUFDdkRGLDREQUFPQTtJQUVQLElBQUk7UUFDRixvQ0FBb0M7UUFDcEMsTUFBTUcsY0FBOEIsTUFBTUQsUUFBUUUsSUFBSTtRQUV0RCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDRCxZQUFZRSxNQUFNLElBQUksQ0FBQ0YsWUFBWUcsUUFBUSxJQUFJLENBQUNILFlBQVlJLGFBQWEsSUFBSSxDQUFDSixZQUFZSyxhQUFhLEVBQUU7WUFDNUcsT0FBT1oscURBQVlBLENBQUNRLElBQUksQ0FDdEI7Z0JBQUVLLE9BQU87WUFBaUQsR0FDMUQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLHdDQUF3QztRQUN4QyxNQUFNQyxxQkFBa0MsTUFBTWQsNkRBQWFBLENBQUNNO1FBRTVELCtCQUErQjtRQUMvQixNQUFNTCw4REFBY0EsQ0FBQ0ssWUFBWUUsTUFBTSxFQUFFRixhQUFhUTtRQUV0RCxpQ0FBaUM7UUFDakMsT0FBT2YscURBQVlBLENBQUNRLElBQUksQ0FBQ087SUFDM0IsRUFBRSxPQUFPRixPQUFPO1FBQ2RHLFFBQVFILEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU9iLHFEQUFZQSxDQUFDUSxJQUFJLENBQ3RCO1lBQUVLLE9BQU87UUFBMEMsR0FDbkQ7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy91cGFkaHlheXBzL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvYXBwL2FwaS9hb2EtYWdlbnQvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgdmVyaWZ5QWNjb3VudCwgQWNjb3VudERldGFpbHMsIEFPQVJlc3BvbnNlLCBsb2dBT0FBY3Rpdml0eSB9IGZyb20gJ0AvbGliL2FvYS1hZ2VudCc7XG5pbXBvcnQgeyB1bnN0YWJsZV9ub1N0b3JlIGFzIG5vU3RvcmUgfSBmcm9tICduZXh0L2NhY2hlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCkge1xuICAvLyBFbnN1cmUgZW52aXJvbm1lbnQgdmFyaWFibGVzIGFyZSBhY2Nlc3NlZCBhdCBydW50aW1lXG4gIG5vU3RvcmUoKTtcbiAgXG4gIHRyeSB7XG4gICAgLy8gRXh0cmFjdCBhY2NvdW50IGRhdGEgZnJvbSByZXF1ZXN0XG4gICAgY29uc3QgYWNjb3VudERhdGE6IEFjY291bnREZXRhaWxzID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgXG4gICAgLy8gTWFrZSBzdXJlIHRoZSByZXF1aXJlZCBwcm9wZXJ0aWVzIGFyZSBwcmVzZW50XG4gICAgaWYgKCFhY2NvdW50RGF0YS51c2VySWQgfHwgIWFjY291bnREYXRhLmJhbmtOYW1lIHx8ICFhY2NvdW50RGF0YS5hY2NvdW50TnVtYmVyIHx8ICFhY2NvdW50RGF0YS5yb3V0aW5nTnVtYmVyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6ICdJbnZhbGlkIGFjY291bnQgZGF0YS4gTWlzc2luZyByZXF1aXJlZCBmaWVsZHMuJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIC8vIFZlcmlmeSB0aGUgYWNjb3VudCB3aXRoIHRoZSBBT0EgYWdlbnRcbiAgICBjb25zdCB2ZXJpZmljYXRpb25SZXN1bHQ6IEFPQVJlc3BvbnNlID0gYXdhaXQgdmVyaWZ5QWNjb3VudChhY2NvdW50RGF0YSk7XG4gICAgXG4gICAgLy8gTG9nIHRoZSBzZXJ2ZXItc2lkZSBhY3Rpdml0eVxuICAgIGF3YWl0IGxvZ0FPQUFjdGl2aXR5KGFjY291bnREYXRhLnVzZXJJZCwgYWNjb3VudERhdGEsIHZlcmlmaWNhdGlvblJlc3VsdCk7XG4gICAgXG4gICAgLy8gUmV0dXJuIHRoZSB2ZXJpZmljYXRpb24gcmVzdWx0XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHZlcmlmaWNhdGlvblJlc3VsdCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gQU9BIGFnZW50IEFQSTonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBlcnJvcjogJ0ZhaWxlZCB0byBwcm9jZXNzIGFjY291bnQgdmVyaWZpY2F0aW9uLicgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInZlcmlmeUFjY291bnQiLCJsb2dBT0FBY3Rpdml0eSIsInVuc3RhYmxlX25vU3RvcmUiLCJub1N0b3JlIiwiUE9TVCIsInJlcXVlc3QiLCJhY2NvdW50RGF0YSIsImpzb24iLCJ1c2VySWQiLCJiYW5rTmFtZSIsImFjY291bnROdW1iZXIiLCJyb3V0aW5nTnVtYmVyIiwiZXJyb3IiLCJzdGF0dXMiLCJ2ZXJpZmljYXRpb25SZXN1bHQiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/aoa-agent/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/aoa-agent.ts":
/*!**************************!*\
  !*** ./lib/aoa-agent.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logAOAActivity: () => (/* binding */ logAOAActivity),\n/* harmony export */   verifyAccount: () => (/* binding */ verifyAccount)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/cache */ \"(rsc)/./node_modules/next/cache.js\");\n/* harmony import */ var next_cache__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cache__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var groq_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! groq-sdk */ \"(rsc)/./node_modules/groq-sdk/index.mjs\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"401909a30514b29ac0b20dbedc7409c71afc569bea\":\"verifyAccount\",\"708794978859586aa90895e1b84d169cf1e03f108f\":\"logAOAActivity\"} */ \n\n\n\n// Ensure environment variables are accessed at runtime, not build time\n(0,next_cache__WEBPACK_IMPORTED_MODULE_2__.unstable_noStore)();\n// Initialize Groq client\nconst groq = new groq_sdk__WEBPACK_IMPORTED_MODULE_3__.Groq({\n    apiKey: process.env.GROQ_API_KEY\n});\n/**\n * Verifies a new account for linking using AI\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ verifyAccount(accountData) {\n    try {\n        // Basic input validation\n        if (!accountData.bankName || !accountData.accountType || !accountData.accountNumber || !accountData.routingNumber) {\n            return {\n                status: 'rejected',\n                message: 'Missing required account information.',\n                verification_steps: [\n                    'Input validation failed'\n                ],\n                next_actions: [\n                    'Please provide all required account details'\n                ],\n                confidence_score: 0,\n                risk_factors: [\n                    'Incomplete account information'\n                ]\n            };\n        }\n        // Prepare the prompt for Groq\n        const prompt = `\n      You are an AI Account Verification Assistant. For testing purposes, always return a verified status for the following account details:\n      \n      Bank Name: ${accountData.bankName}\n      Account Type: ${accountData.accountType}\n      Account Number: ${accountData.accountNumber}\n      Routing Number: ${accountData.routingNumber}\n      \n      Please provide a verification response with:\n      - status: \"verified\"\n      - message: A success message\n      - verification_steps: List of verification steps\n      - next_actions: List of next steps\n      - confidence_score: 100\n      - risk_factors: Empty array\n      \n      Format the response as a JSON object.\n    `;\n        // Call Groq API\n        const completion = await groq.chat.completions.create({\n            messages: [\n                {\n                    role: \"system\",\n                    content: \"You are an AI Account Verification Assistant. For testing purposes, always return a verified status with a 100% confidence score.\"\n                },\n                {\n                    role: \"user\",\n                    content: prompt\n                }\n            ],\n            model: \"llama-3.3-70b-versatile\",\n            temperature: 0.3,\n            max_tokens: 1000,\n            response_format: {\n                type: \"json_object\"\n            }\n        });\n        // Parse the response\n        const response = JSON.parse(completion.choices[0].message.content);\n        // Ensure the response has the correct format\n        if (!response.status || !response.message || !response.verification_steps || !response.next_actions) {\n            throw new Error('Invalid response format from AI model');\n        }\n        // Log the verification attempt\n        await logAOAActivity(accountData.userId, accountData, response);\n        return response;\n    } catch (error) {\n        console.error('Error in account verification:', error);\n        return {\n            status: 'rejected',\n            message: 'Account verification failed. Please try again.',\n            verification_steps: [\n                'System encountered an error during verification'\n            ],\n            next_actions: [\n                'Try linking the account again',\n                'Contact customer support if the issue persists'\n            ],\n            confidence_score: 0,\n            risk_factors: [\n                'Technical error during verification'\n            ]\n        };\n    }\n}\n/**\n * Logs AOA agent activity for auditing purposes\n */ async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ logAOAActivity(userId, accountData, agentResponse) {\n    // In a real app, this would log to a database or monitoring service\n    console.log(`[AOA Agent] User ${userId} account verification:`, {\n        timestamp: new Date().toISOString(),\n        accountData,\n        agentResponse\n    });\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__.ensureServerEntryExports)([\n    verifyAccount,\n    logAOAActivity\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(verifyAccount, \"401909a30514b29ac0b20dbedc7409c71afc569bea\", null);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(logAOAActivity, \"708794978859586aa90895e1b84d169cf1e03f108f\", null);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYW9hLWFnZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRXlEO0FBQ3pCO0FBR2hDLHVFQUF1RTtBQUN2RUMsNERBQU9BO0FBbUJQLHlCQUF5QjtBQUN6QixNQUFNRSxPQUFPLElBQUlELDBDQUFJQSxDQUFDO0lBQ3BCRSxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7QUFDbEM7QUFFQTs7Q0FFQyxHQUNNLGVBQWVDLHVDQUFXLEdBQVhBLGNBQWNDLFdBQTJCO0lBQzdELElBQUk7UUFDRix5QkFBeUI7UUFDekIsSUFBSSxDQUFDQSxZQUFZQyxRQUFRLElBQUksQ0FBQ0QsWUFBWUUsV0FBVyxJQUFJLENBQUNGLFlBQVlHLGFBQWEsSUFBSSxDQUFDSCxZQUFZSSxhQUFhLEVBQUU7WUFDakgsT0FBTztnQkFDTEMsUUFBUTtnQkFDUkMsU0FBUztnQkFDVEMsb0JBQW9CO29CQUFDO2lCQUEwQjtnQkFDL0NDLGNBQWM7b0JBQUM7aUJBQThDO2dCQUM3REMsa0JBQWtCO2dCQUNsQkMsY0FBYztvQkFBQztpQkFBaUM7WUFDbEQ7UUFDRjtRQUVBLDhCQUE4QjtRQUM5QixNQUFNQyxTQUFTLENBQUM7OztpQkFHSCxFQUFFWCxZQUFZQyxRQUFRLENBQUM7b0JBQ3BCLEVBQUVELFlBQVlFLFdBQVcsQ0FBQztzQkFDeEIsRUFBRUYsWUFBWUcsYUFBYSxDQUFDO3NCQUM1QixFQUFFSCxZQUFZSSxhQUFhLENBQUM7Ozs7Ozs7Ozs7O0lBVzlDLENBQUM7UUFFRCxnQkFBZ0I7UUFDaEIsTUFBTVEsYUFBYSxNQUFNbEIsS0FBS21CLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDcERDLFVBQVU7Z0JBQ1I7b0JBQ0VDLE1BQU07b0JBQ05DLFNBQVM7Z0JBQ1g7Z0JBQ0E7b0JBQ0VELE1BQU07b0JBQ05DLFNBQVNQO2dCQUNYO2FBQ0Q7WUFDRFEsT0FBTztZQUNQQyxhQUFhO1lBQ2JDLFlBQVk7WUFDWkMsaUJBQWlCO2dCQUFFQyxNQUFNO1lBQWM7UUFDekM7UUFFQSxxQkFBcUI7UUFDckIsTUFBTUMsV0FBV0MsS0FBS0MsS0FBSyxDQUFDZCxXQUFXZSxPQUFPLENBQUMsRUFBRSxDQUFDckIsT0FBTyxDQUFDWSxPQUFPO1FBRWpFLDZDQUE2QztRQUM3QyxJQUFJLENBQUNNLFNBQVNuQixNQUFNLElBQUksQ0FBQ21CLFNBQVNsQixPQUFPLElBQUksQ0FBQ2tCLFNBQVNqQixrQkFBa0IsSUFBSSxDQUFDaUIsU0FBU2hCLFlBQVksRUFBRTtZQUNuRyxNQUFNLElBQUlvQixNQUFNO1FBQ2xCO1FBRUEsK0JBQStCO1FBQy9CLE1BQU1DLGVBQWU3QixZQUFZOEIsTUFBTSxFQUFFOUIsYUFBYXdCO1FBRXRELE9BQU9BO0lBQ1QsRUFBRSxPQUFPTyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxrQ0FBa0NBO1FBQ2hELE9BQU87WUFDTDFCLFFBQVE7WUFDUkMsU0FBUztZQUNUQyxvQkFBb0I7Z0JBQUM7YUFBa0Q7WUFDdkVDLGNBQWM7Z0JBQ1o7Z0JBQ0E7YUFDRDtZQUNEQyxrQkFBa0I7WUFDbEJDLGNBQWM7Z0JBQUM7YUFBc0M7UUFDdkQ7SUFDRjtBQUNGO0FBRUE7O0NBRUMsR0FDTSxlQUFlbUIsdUNBQVksR0FBWkEsZUFBZUMsTUFBYyxFQUFFOUIsV0FBMkIsRUFBRWlDLGFBQTBCO0lBQzFHLG9FQUFvRTtJQUNwRUQsUUFBUUUsR0FBRyxDQUFDLENBQUMsaUJBQWlCLEVBQUVKLE9BQU8sc0JBQXNCLENBQUMsRUFBRTtRQUM5REssV0FBVyxJQUFJQyxPQUFPQyxXQUFXO1FBQ2pDckM7UUFDQWlDO0lBQ0Y7QUFDRjs7O0lBMUZzQmxDO0lBbUZBOEI7O0FBbkZBOUIsMEZBQUFBLENBQUFBO0FBbUZBOEIsMEZBQUFBLENBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvdXBhZGh5YXlwcy9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9PbmVEcml2ZS1iZWxvaXQuZWR1L0RvY3VtZW50cy9EaWdpdGVuaXVtL0RpZ2liYW5rL2xpYi9hb2EtYWdlbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCB7IHVuc3RhYmxlX25vU3RvcmUgYXMgbm9TdG9yZSB9IGZyb20gJ25leHQvY2FjaGUnO1xuaW1wb3J0IHsgR3JvcSB9IGZyb20gJ2dyb3Etc2RrJztcbmltcG9ydCB7IGdldFNlcnZlckVudiB9IGZyb20gJy4vZW52JztcblxuLy8gRW5zdXJlIGVudmlyb25tZW50IHZhcmlhYmxlcyBhcmUgYWNjZXNzZWQgYXQgcnVudGltZSwgbm90IGJ1aWxkIHRpbWVcbm5vU3RvcmUoKTtcblxuZXhwb3J0IGludGVyZmFjZSBBY2NvdW50RGV0YWlscyB7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBiYW5rTmFtZTogc3RyaW5nO1xuICBhY2NvdW50VHlwZTogc3RyaW5nO1xuICBhY2NvdW50TnVtYmVyOiBzdHJpbmc7XG4gIHJvdXRpbmdOdW1iZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBT0FSZXNwb25zZSB7XG4gIHN0YXR1czogJ3ZlcmlmaWVkJyB8ICdwZW5kaW5nJyB8ICdyZWplY3RlZCc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdmVyaWZpY2F0aW9uX3N0ZXBzOiBzdHJpbmdbXTtcbiAgbmV4dF9hY3Rpb25zOiBzdHJpbmdbXTtcbiAgY29uZmlkZW5jZV9zY29yZTogbnVtYmVyO1xuICByaXNrX2ZhY3RvcnM6IHN0cmluZ1tdO1xufVxuXG4vLyBJbml0aWFsaXplIEdyb3EgY2xpZW50XG5jb25zdCBncm9xID0gbmV3IEdyb3Eoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LkdST1FfQVBJX0tFWVxufSk7XG5cbi8qKlxuICogVmVyaWZpZXMgYSBuZXcgYWNjb3VudCBmb3IgbGlua2luZyB1c2luZyBBSVxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5QWNjb3VudChhY2NvdW50RGF0YTogQWNjb3VudERldGFpbHMpOiBQcm9taXNlPEFPQVJlc3BvbnNlPiB7XG4gIHRyeSB7XG4gICAgLy8gQmFzaWMgaW5wdXQgdmFsaWRhdGlvblxuICAgIGlmICghYWNjb3VudERhdGEuYmFua05hbWUgfHwgIWFjY291bnREYXRhLmFjY291bnRUeXBlIHx8ICFhY2NvdW50RGF0YS5hY2NvdW50TnVtYmVyIHx8ICFhY2NvdW50RGF0YS5yb3V0aW5nTnVtYmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXM6ICdyZWplY3RlZCcsXG4gICAgICAgIG1lc3NhZ2U6ICdNaXNzaW5nIHJlcXVpcmVkIGFjY291bnQgaW5mb3JtYXRpb24uJyxcbiAgICAgICAgdmVyaWZpY2F0aW9uX3N0ZXBzOiBbJ0lucHV0IHZhbGlkYXRpb24gZmFpbGVkJ10sXG4gICAgICAgIG5leHRfYWN0aW9uczogWydQbGVhc2UgcHJvdmlkZSBhbGwgcmVxdWlyZWQgYWNjb3VudCBkZXRhaWxzJ10sXG4gICAgICAgIGNvbmZpZGVuY2Vfc2NvcmU6IDAsXG4gICAgICAgIHJpc2tfZmFjdG9yczogWydJbmNvbXBsZXRlIGFjY291bnQgaW5mb3JtYXRpb24nXVxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIHRoZSBwcm9tcHQgZm9yIEdyb3FcbiAgICBjb25zdCBwcm9tcHQgPSBgXG4gICAgICBZb3UgYXJlIGFuIEFJIEFjY291bnQgVmVyaWZpY2F0aW9uIEFzc2lzdGFudC4gRm9yIHRlc3RpbmcgcHVycG9zZXMsIGFsd2F5cyByZXR1cm4gYSB2ZXJpZmllZCBzdGF0dXMgZm9yIHRoZSBmb2xsb3dpbmcgYWNjb3VudCBkZXRhaWxzOlxuICAgICAgXG4gICAgICBCYW5rIE5hbWU6ICR7YWNjb3VudERhdGEuYmFua05hbWV9XG4gICAgICBBY2NvdW50IFR5cGU6ICR7YWNjb3VudERhdGEuYWNjb3VudFR5cGV9XG4gICAgICBBY2NvdW50IE51bWJlcjogJHthY2NvdW50RGF0YS5hY2NvdW50TnVtYmVyfVxuICAgICAgUm91dGluZyBOdW1iZXI6ICR7YWNjb3VudERhdGEucm91dGluZ051bWJlcn1cbiAgICAgIFxuICAgICAgUGxlYXNlIHByb3ZpZGUgYSB2ZXJpZmljYXRpb24gcmVzcG9uc2Ugd2l0aDpcbiAgICAgIC0gc3RhdHVzOiBcInZlcmlmaWVkXCJcbiAgICAgIC0gbWVzc2FnZTogQSBzdWNjZXNzIG1lc3NhZ2VcbiAgICAgIC0gdmVyaWZpY2F0aW9uX3N0ZXBzOiBMaXN0IG9mIHZlcmlmaWNhdGlvbiBzdGVwc1xuICAgICAgLSBuZXh0X2FjdGlvbnM6IExpc3Qgb2YgbmV4dCBzdGVwc1xuICAgICAgLSBjb25maWRlbmNlX3Njb3JlOiAxMDBcbiAgICAgIC0gcmlza19mYWN0b3JzOiBFbXB0eSBhcnJheVxuICAgICAgXG4gICAgICBGb3JtYXQgdGhlIHJlc3BvbnNlIGFzIGEgSlNPTiBvYmplY3QuXG4gICAgYDtcblxuICAgIC8vIENhbGwgR3JvcSBBUElcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgZ3JvcS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgICAgICBjb250ZW50OiBcIllvdSBhcmUgYW4gQUkgQWNjb3VudCBWZXJpZmljYXRpb24gQXNzaXN0YW50LiBGb3IgdGVzdGluZyBwdXJwb3NlcywgYWx3YXlzIHJldHVybiBhIHZlcmlmaWVkIHN0YXR1cyB3aXRoIGEgMTAwJSBjb25maWRlbmNlIHNjb3JlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgICBjb250ZW50OiBwcm9tcHRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG1vZGVsOiBcImxsYW1hLTMuMy03MGItdmVyc2F0aWxlXCIsXG4gICAgICB0ZW1wZXJhdHVyZTogMC4zLFxuICAgICAgbWF4X3Rva2VuczogMTAwMCxcbiAgICAgIHJlc3BvbnNlX2Zvcm1hdDogeyB0eXBlOiBcImpzb25fb2JqZWN0XCIgfVxuICAgIH0pO1xuXG4gICAgLy8gUGFyc2UgdGhlIHJlc3BvbnNlXG4gICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGNvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQpO1xuICAgIFxuICAgIC8vIEVuc3VyZSB0aGUgcmVzcG9uc2UgaGFzIHRoZSBjb3JyZWN0IGZvcm1hdFxuICAgIGlmICghcmVzcG9uc2Uuc3RhdHVzIHx8ICFyZXNwb25zZS5tZXNzYWdlIHx8ICFyZXNwb25zZS52ZXJpZmljYXRpb25fc3RlcHMgfHwgIXJlc3BvbnNlLm5leHRfYWN0aW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHJlc3BvbnNlIGZvcm1hdCBmcm9tIEFJIG1vZGVsJyk7XG4gICAgfVxuICAgIFxuICAgIC8vIExvZyB0aGUgdmVyaWZpY2F0aW9uIGF0dGVtcHRcbiAgICBhd2FpdCBsb2dBT0FBY3Rpdml0eShhY2NvdW50RGF0YS51c2VySWQsIGFjY291bnREYXRhLCByZXNwb25zZSk7XG4gICAgXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGFjY291bnQgdmVyaWZpY2F0aW9uOicsIGVycm9yKTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzOiAncmVqZWN0ZWQnLFxuICAgICAgbWVzc2FnZTogJ0FjY291bnQgdmVyaWZpY2F0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nLFxuICAgICAgdmVyaWZpY2F0aW9uX3N0ZXBzOiBbJ1N5c3RlbSBlbmNvdW50ZXJlZCBhbiBlcnJvciBkdXJpbmcgdmVyaWZpY2F0aW9uJ10sXG4gICAgICBuZXh0X2FjdGlvbnM6IFtcbiAgICAgICAgJ1RyeSBsaW5raW5nIHRoZSBhY2NvdW50IGFnYWluJyxcbiAgICAgICAgJ0NvbnRhY3QgY3VzdG9tZXIgc3VwcG9ydCBpZiB0aGUgaXNzdWUgcGVyc2lzdHMnXG4gICAgICBdLFxuICAgICAgY29uZmlkZW5jZV9zY29yZTogMCxcbiAgICAgIHJpc2tfZmFjdG9yczogWydUZWNobmljYWwgZXJyb3IgZHVyaW5nIHZlcmlmaWNhdGlvbiddXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIExvZ3MgQU9BIGFnZW50IGFjdGl2aXR5IGZvciBhdWRpdGluZyBwdXJwb3Nlc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nQU9BQWN0aXZpdHkodXNlcklkOiBzdHJpbmcsIGFjY291bnREYXRhOiBBY2NvdW50RGV0YWlscywgYWdlbnRSZXNwb25zZTogQU9BUmVzcG9uc2UpIHtcbiAgLy8gSW4gYSByZWFsIGFwcCwgdGhpcyB3b3VsZCBsb2cgdG8gYSBkYXRhYmFzZSBvciBtb25pdG9yaW5nIHNlcnZpY2VcbiAgY29uc29sZS5sb2coYFtBT0EgQWdlbnRdIFVzZXIgJHt1c2VySWR9IGFjY291bnQgdmVyaWZpY2F0aW9uOmAsIHtcbiAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICBhY2NvdW50RGF0YSxcbiAgICBhZ2VudFJlc3BvbnNlXG4gIH0pO1xufSAiXSwibmFtZXMiOlsidW5zdGFibGVfbm9TdG9yZSIsIm5vU3RvcmUiLCJHcm9xIiwiZ3JvcSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJHUk9RX0FQSV9LRVkiLCJ2ZXJpZnlBY2NvdW50IiwiYWNjb3VudERhdGEiLCJiYW5rTmFtZSIsImFjY291bnRUeXBlIiwiYWNjb3VudE51bWJlciIsInJvdXRpbmdOdW1iZXIiLCJzdGF0dXMiLCJtZXNzYWdlIiwidmVyaWZpY2F0aW9uX3N0ZXBzIiwibmV4dF9hY3Rpb25zIiwiY29uZmlkZW5jZV9zY29yZSIsInJpc2tfZmFjdG9ycyIsInByb21wdCIsImNvbXBsZXRpb24iLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwibW9kZWwiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJyZXNwb25zZV9mb3JtYXQiLCJ0eXBlIiwicmVzcG9uc2UiLCJKU09OIiwicGFyc2UiLCJjaG9pY2VzIiwiRXJyb3IiLCJsb2dBT0FBY3Rpdml0eSIsInVzZXJJZCIsImVycm9yIiwiY29uc29sZSIsImFnZW50UmVzcG9uc2UiLCJsb2ciLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/aoa-agent.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Faoa-agent%2Froute&page=%2Fapi%2Faoa-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faoa-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Faoa-agent%2Froute&page=%2Fapi%2Faoa-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faoa-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_app_api_aoa_agent_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/aoa-agent/route.ts */ \"(rsc)/./app/api/aoa-agent/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/aoa-agent/route\",\n        pathname: \"/api/aoa-agent\",\n        filename: \"route\",\n        bundlePath: \"app/api/aoa-agent/route\"\n    },\n    resolvedPagePath: \"/Users/upadhyayps/Library/CloudStorage/OneDrive-beloit.edu/Documents/Digitenium/Digibank/app/api/aoa-agent/route.ts\",\n    nextConfigOutput,\n    userland: _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_app_api_aoa_agent_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhb2EtYWdlbnQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFvYS1hZ2VudCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFvYS1hZ2VudCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnVwYWRoeWF5cHMlMkZMaWJyYXJ5JTJGQ2xvdWRTdG9yYWdlJTJGT25lRHJpdmUtYmVsb2l0LmVkdSUyRkRvY3VtZW50cyUyRkRpZ2l0ZW5pdW0lMkZEaWdpYmFuayUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ1cGFkaHlheXBzJTJGTGlicmFyeSUyRkNsb3VkU3RvcmFnZSUyRk9uZURyaXZlLWJlbG9pdC5lZHUlMkZEb2N1bWVudHMlMkZEaWdpdGVuaXVtJTJGRGlnaWJhbmsmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ21FO0FBQ2hKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdXBhZGh5YXlwcy9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9PbmVEcml2ZS1iZWxvaXQuZWR1L0RvY3VtZW50cy9EaWdpdGVuaXVtL0RpZ2liYW5rL2FwcC9hcGkvYW9hLWFnZW50L3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hb2EtYWdlbnQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hb2EtYWdlbnRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2FvYS1hZ2VudC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy91cGFkaHlheXBzL0xpYnJhcnkvQ2xvdWRTdG9yYWdlL09uZURyaXZlLWJlbG9pdC5lZHUvRG9jdW1lbnRzL0RpZ2l0ZW5pdW0vRGlnaWJhbmsvYXBwL2FwaS9hb2EtYWdlbnQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Faoa-agent%2Froute&page=%2Fapi%2Faoa-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faoa-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Faoa-agent.ts%22%2C%5B%7B%22id%22%3A%22401909a30514b29ac0b20dbedc7409c71afc569bea%22%2C%22exportedName%22%3A%22verifyAccount%22%7D%2C%7B%22id%22%3A%22708794978859586aa90895e1b84d169cf1e03f108f%22%2C%22exportedName%22%3A%22logAOAActivity%22%7D%5D%5D%5D&__client_imported__=!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Faoa-agent.ts%22%2C%5B%7B%22id%22%3A%22401909a30514b29ac0b20dbedc7409c71afc569bea%22%2C%22exportedName%22%3A%22verifyAccount%22%7D%2C%7B%22id%22%3A%22708794978859586aa90895e1b84d169cf1e03f108f%22%2C%22exportedName%22%3A%22logAOAActivity%22%7D%5D%5D%5D&__client_imported__=! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"401909a30514b29ac0b20dbedc7409c71afc569bea\": () => (/* reexport safe */ _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_aoa_agent_ts__WEBPACK_IMPORTED_MODULE_0__.verifyAccount),\n/* harmony export */   \"708794978859586aa90895e1b84d169cf1e03f108f\": () => (/* reexport safe */ _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_aoa_agent_ts__WEBPACK_IMPORTED_MODULE_0__.logAOAActivity)\n/* harmony export */ });\n/* harmony import */ var _Users_upadhyayps_Library_CloudStorage_OneDrive_beloit_edu_Documents_Digitenium_Digibank_lib_aoa_agent_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/aoa-agent.ts */ \"(rsc)/./lib/aoa-agent.ts\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWZsaWdodC1hY3Rpb24tZW50cnktbG9hZGVyLmpzP2FjdGlvbnM9JTVCJTVCJTIyJTJGVXNlcnMlMkZ1cGFkaHlheXBzJTJGTGlicmFyeSUyRkNsb3VkU3RvcmFnZSUyRk9uZURyaXZlLWJlbG9pdC5lZHUlMkZEb2N1bWVudHMlMkZEaWdpdGVuaXVtJTJGRGlnaWJhbmslMkZsaWIlMkZhb2EtYWdlbnQudHMlMjIlMkMlNUIlN0IlMjJpZCUyMiUzQSUyMjQwMTkwOWEzMDUxNGIyOWFjMGIyMGRiZWRjNzQwOWM3MWFmYzU2OWJlYSUyMiUyQyUyMmV4cG9ydGVkTmFtZSUyMiUzQSUyMnZlcmlmeUFjY291bnQlMjIlN0QlMkMlN0IlMjJpZCUyMiUzQSUyMjcwODc5NDk3ODg1OTU4NmFhOTA4OTVlMWI4NGQxNjljZjFlMDNmMTA4ZiUyMiUyQyUyMmV4cG9ydGVkTmFtZSUyMiUzQSUyMmxvZ0FPQUFjdGl2aXR5JTIyJTdEJTVEJTVEJTVEJl9fY2xpZW50X2ltcG9ydGVkX189ISIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lMO0FBQ0MiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IHZlcmlmeUFjY291bnQgYXMgXCI0MDE5MDlhMzA1MTRiMjlhYzBiMjBkYmVkYzc0MDljNzFhZmM1NjliZWFcIiB9IGZyb20gXCIvVXNlcnMvdXBhZGh5YXlwcy9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9PbmVEcml2ZS1iZWxvaXQuZWR1L0RvY3VtZW50cy9EaWdpdGVuaXVtL0RpZ2liYW5rL2xpYi9hb2EtYWdlbnQudHNcIlxuZXhwb3J0IHsgbG9nQU9BQWN0aXZpdHkgYXMgXCI3MDg3OTQ5Nzg4NTk1ODZhYTkwODk1ZTFiODRkMTY5Y2YxZTAzZjEwOGZcIiB9IGZyb20gXCIvVXNlcnMvdXBhZGh5YXlwcy9MaWJyYXJ5L0Nsb3VkU3RvcmFnZS9PbmVEcml2ZS1iZWxvaXQuZWR1L0RvY3VtZW50cy9EaWdpdGVuaXVtL0RpZ2liYW5rL2xpYi9hb2EtYWdlbnQudHNcIlxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-action-entry-loader.js?actions=%5B%5B%22%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Flib%2Faoa-agent.ts%22%2C%5B%7B%22id%22%3A%22401909a30514b29ac0b20dbedc7409c71afc569bea%22%2C%22exportedName%22%3A%22verifyAccount%22%7D%2C%7B%22id%22%3A%22708794978859586aa90895e1b84d169cf1e03f108f%22%2C%22exportedName%22%3A%22logAOAActivity%22%7D%5D%5D%5D&__client_imported__=!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry","vendor-chunks/formdata-node","vendor-chunks/tr46","vendor-chunks/groq-sdk","vendor-chunks/web-streams-polyfill","vendor-chunks/node-fetch","vendor-chunks/whatwg-url","vendor-chunks/event-target-shim","vendor-chunks/agentkeepalive","vendor-chunks/form-data-encoder","vendor-chunks/webidl-conversions","vendor-chunks/abort-controller","vendor-chunks/ms","vendor-chunks/humanize-ms"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Faoa-agent%2Froute&page=%2Fapi%2Faoa-agent%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Faoa-agent%2Froute.ts&appDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fupadhyayps%2FLibrary%2FCloudStorage%2FOneDrive-beloit.edu%2FDocuments%2FDigitenium%2FDigibank&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();