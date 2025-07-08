type Props = {
  categories: { id: number; name: string }[];
  selected: number | null;
  setSelected: (id: number) => void;
};

export default function SidebarFilter({
  categories,
  selected,
  setSelected,
}: Props) {
  return (
    <aside className="w-60 p-4 border-r">
      <h3 className="font-semibold mb-2">Bộ lọc</h3>
      {categories.map((c) => (
        <div key={c.id}>
          <label className="flex gap-2">
            <input
              type="checkbox"
              checked={selected === c.id}
              onChange={() => setSelected(c.id)}
            />
            {c.name}
          </label>
        </div>
      ))}
    </aside>
  );
}
