import Users from "@/models/user";
import connectMongo from "@/utils/db connect";
import bcrypt from "bcrypt";

const saltRounds = 10;

export async function GET() {
  try {
    await connectMongo();
    const data = await Users.find();
    return Response.json(data);
  } catch (error: any) {
    return Response.json({
      message: error.message,
    });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectMongo();
    const user = new Users(body);
    user.password = await bcrypt.hash(user.password, saltRounds);
    await user.save();
    delete user.password;
    return Response.json({
      message: "User registered",
    });
  } catch (error: any) {
    return Response.json({
      message: error.message,
    });
  }
}
