import { prisma } from "@/lib/db";
import { v7 } from "uuid";

const Admin = async () => {
  const categories = await prisma.category.findMany();

  const handleCategory = async (formData: FormData) => {
    "use server";

    const name = formData.get("name");
    const slug = formData.get("slug");

    if (!name || !slug) {
      return;
    }

    await prisma.category.upsert({
      create: {
        id: v7(),
        name: name.toString(),
        slug: slug.toString(),
      },
      update: {
        name: name.toString(),
        slug: slug.toString(),
      },
      where: {
        id: formData.get("id")?.toString(),
      },
    });
  };

  return (
    <div>
      <form action={handleCategory}>
        <input
          type="text"
          name="name"
          placeholder="category name"
          className="text-background"
        />
        <input
          type="text"
          name="slug"
          placeholder="category slug"
          className="text-background"
        />
        <button type="submit">Add Category</button>
      </form>
      {categories.map((category) => (
        <form key={category.id} action={handleCategory}>
          <input type="hidden" name="id" value={category.id} />
          <input
            type="text"
            name="name"
            placeholder="category name"
            className="text-background"
            defaultValue={category.name}
          />
          <input
            type="text"
            name="slug"
            placeholder="category slug"
            className="text-background"
            defaultValue={category.slug}
          />
          <button type="submit">Edit Category</button>
        </form>
      ))}
    </div>
  );
};

export default Admin;
