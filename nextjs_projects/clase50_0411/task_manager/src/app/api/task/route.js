import { NextResponse } from "next/server";
import { getTasks } from "@/lib/db";

export const GET = async () => {
  try {
    const tasks = await getTasks();
    return NextResponse.json(tasks);
  } catch (err) {
    return NextResponse.json(
      { error: "Error fetching tasks" },
      { status: 500 },
    );
  }
};
