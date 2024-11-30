import { ShelfCard } from "@/components/ShelfCard";

// Dados mockados para exemplo
const mockShelves = [
  { id: 1, name: "Prateleira A1", capacity: 100, usedSpace: 75 },
  { id: 2, name: "Prateleira B1", capacity: 100, usedSpace: 92 },
  { id: 3, name: "Prateleira C1", capacity: 100, usedSpace: 45 },
  { id: 4, name: "Prateleira D1", capacity: 100, usedSpace: 60 },
  { id: 5, name: "Prateleira E1", capacity: 100, usedSpace: 30 },
  { id: 6, name: "Prateleira F1", capacity: 100, usedSpace: 88 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Dashboard de Prateleiras</h1>
          <p className="text-gray-600 mt-2">Gerencie suas prateleiras e monitore a capacidade</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockShelves.map((shelf) => (
            <ShelfCard
              key={shelf.id}
              id={shelf.id}
              name={shelf.name}
              capacity={shelf.capacity}
              usedSpace={shelf.usedSpace}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;