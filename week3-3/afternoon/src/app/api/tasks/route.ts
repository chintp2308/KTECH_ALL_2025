import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next"; // Quan trọng: phải thêm `/next` khi dùng App Router
import { NextResponse } from "next/server";

// ✅ GET: Lấy danh sách task
export async function GET(request: Request) {
  // ✅ Truyền request vào getServerSession
  const session = await getServerSession({ req: request, ...authOptions });

  console.log("<<=== 🚀 Server session ===>>", session);

  if (!session || !session.user?.accessToken) {
    return NextResponse.json(
      { status: "fail", message: "You are not logged in" },
      { status: 401 }
    );
  }

  try {
    const response = await fetch("https://server.aptech.io/workspaces/tasks", {
      headers: {
        Authorization: `Bearer ${session.user.accessToken}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: "error", message: "Failed to fetch profile" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      status: "success",
      message: "Tasks fetched successfully",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "An error occurred" },
      { status: 500 }
    );
  }
}

// ✅ POST: Tạo mới task
export async function POST(request: Request) {
  const session = await getServerSession({ req: request, ...authOptions });

  if (!session || !session.user?.accessToken) {
    return NextResponse.json(
      { status: "fail", message: "You are not logged in" },
      { status: 401 }
    );
  }

  const body = await request.json();

  if (!body.title || !body.description) {
    return NextResponse.json(
      { status: "fail", message: "Missing title or description" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch("https://server.aptech.io/workspaces/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user.accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return NextResponse.json(
        { status: "error", message: "Failed to create task" },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json({
      status: "success",
      message: "Task created successfully",
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { status: "error", message: "An error occurred" },
      { status: 500 }
    );
  }
}
