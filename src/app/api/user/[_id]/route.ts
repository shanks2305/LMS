import Users from "@/models/user";
import connectMongo from "@/utils/db connect";

export async function PUT(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    const body = await request.json();
    await connectMongo();
    const updateUser = await Users.findByIdAndUpdate(params._id, body, {
      new: true,
    });
    return Response.json({
      message: `User ${params._id} updated successfully`,
      success: true,
      updateUser,
    });
  } catch (error: any) {
    return Response.json({
      message: error.message,
    });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    await connectMongo();
    const user = await Users.findById(params._id);
    return Response.json(user);
  } catch (error: any) {
    return Response.json({
      message: error.message,
    });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { _id: string } }
) {
  try {
    await connectMongo();
    const deletedUser = await Users.findByIdAndDelete(params._id);
    return Response.json({
      message: `User ${params._id} deleted successfully`,
      success: true,
      deletedUser,
    });
  } catch (error: any) {
    return Response.json({
      message: error.message,
    });
  }
}
