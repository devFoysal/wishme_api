import { Application, Request, Response } from "express";
import path from 'path';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import config from "../config";
import { logger } from "../shared/logger";
// import log from "./logger";

const modulesPath = path.resolve(__dirname, 'src/app/modules');

console.log(`${modulesPath}/**/*.routes.ts`, 'modulesPath')


const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Wish Me REST API Docs",
      version: '1.0.0',
      description: 'Wish me API description',
    },
    servers: [
      { url: `http://127.0.0.1:${config.port}/api/v1` }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "https",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/app/modules/auth/*.routes.ts"],
  // apis: [`${modulesPath}/**/*.routes.ts`],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Application, port: number) {
  // Swagger page
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Docs in JSON format
  app.get("/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  logger.info(`Docs available at http://localhost:${port}/api-docs`);
}

export default swaggerDocs;
