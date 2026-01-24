import { useState } from "react";
import { Plus } from "lucide-react";
import { AddItemModal } from "@/app/components/AddItemModal";

export function WardrobePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<WardrobeItem[]>([
  {
    id: 1,
    name: "Organic Cotton Shirt",
    category: "Tops",
    condition: "Excellent",
    image: "https://i.postimg.cc/5y8p6MVM/OIP.webp",
  },
  {
    id: 2,
    name: "Linen Pants",
    category: "Bottoms",
    condition: "Good",
    image: "https://i.postimg.cc/mkNf5WWP/OIP-(2).webp",
  },
  {
    id: 3,
    name: "Denim Jacket",
    category: "Outerwear",
    condition: "Very Good",
    image: "https://i.postimg.cc/CKQFG0wF/OIP-(1).webp",
  },
  {
    id: 4,
    name: "Hemp Summer Dress",
    category: "Dresses",
    condition: "Excellent",
    image: "https://i.postimg.cc/W4QBp12p/OIP-(3).webp",
  },
  {
    id: 4,
    name: "Pink Dress",
    category: "Dresses",
    condition: "Excellent",
    image: "https://i.postimg.cc/sDQ57fzt/istockphoto-1440977634-612x612.jpg",
  },
  {
    id: 4,
    name: "Rayon Shirt",
    category: "Tops",
    condition: "Good",
    image: "https://i.postimg.cc/zvLHC7s7/download.webp",
  },
  {
    id: 4,
    name: "Shrug",
    category: "Outerwear",
    condition: "Average",
    image: "https://i.postimg.cc/SxL2fJPq/OIP-(5).webp",
  },
]);


  const handleAddItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Wardrobe</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex gap-2 rounded bg-primary px-4 py-2 text-white"
        >
          <Plus /> Add Item
        </button>
      </div>

      {items.length === 0 ? (
        <p>No items yet</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="rounded border overflow-hidden">
              <img src={item.image} className="h-40 w-full object-cover" />
              <div className="p-3">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <span className="text-xs bg-green-100 px-2 py-1 rounded">
                  {item.condition}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <AddItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddItem}
      />
    </div>
  );
}
