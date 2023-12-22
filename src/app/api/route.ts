import { config } from "@/utils/config";

export async function GET(request: Request) {
  console.log("config.db_uri");
  console.log(config.db_uri);
  console.log("config.db_uri");
  return Response.json({
    message: config.db_uri,
  });
}
