import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/db";

export const PATCH = async (req, { params }) => {
  try {
    const { id } = params;
    const { status } = await req.json();

    console.log(id, status);

    const query = "UPDATE task SET status = ? WHERE id = ?";
    await executeQuery(query, [status, id]);

    return NextResponse.json({ message: "Tarea actualizada" });
  } catch (err) {
    return NextResponse.json(
      { error: "Error actualizando la tarea" },
      { status: 500 },
    );
  }
};
