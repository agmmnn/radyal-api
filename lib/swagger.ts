import { createSwaggerSpec } from "next-swagger-doc";
import "server-only";

export const getApiDocs = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: "/pages/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "radyal-api Swagger API",
        version: "1.0",
      },
    },
  });
  return spec;
};
