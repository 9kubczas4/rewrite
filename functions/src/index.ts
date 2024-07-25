/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import cors from "cors";
import express from "express";
import {logger} from "firebase-functions/v2";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

const expressApp = express();
expressApp.use(cors({origin: true}));

expressApp.get("/api/users", async (req) => {
  logger.info("users : " + JSON.stringify(req.params));
  logger.info("users : " + JSON.stringify(req.query));
  return "Hello Users";
});

export const api = onRequest(expressApp);

