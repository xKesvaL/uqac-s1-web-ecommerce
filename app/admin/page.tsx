import { prisma } from "@/lib/db";
import { v7 } from "uuid";

const Admin = async () => {
  const categories = await prisma.category.findMany();

  const handleAddCategory = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");

    if (!name) {
      return;
    }

    console.log(prisma);

    await prisma.category.create({
      data: {
        id: v7(),
        name: name.toString(),
      },
    });
  };

  return (
    <div>
      <form action={handleAddCategory}>
        <input
          type="text"
          name="name"
          placeholder="category name"
          className="text-background"
        />
        <button type="submit">Add Category</button>
      </form>
      {categories.map((category) => (
        <div key={category.id}>
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Admin;
