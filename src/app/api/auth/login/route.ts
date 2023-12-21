import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Users from "@/models/user";
import connectMongo from "@/utils/db connect";
import { config } from "@/utils/config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await connectMongo();
    const user = await Users.findOne({ email: body.email });
    if (!user) {
      throw new Error("Invalid credentials");
    }
    let check = await bcrypt.compare(body.password, user.password);
    if (!check) {
      throw new Error("Invalid credentials");
    }
    return Response.json({
      token: jwt.sign({ id: user._id }, config.secret),
      user: {
        _id: user._id,
        name: user.firstName + user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: any) {
    return Response.json({
      message: error.message,
    });
  }
}
