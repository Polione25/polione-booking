export const Calendar = ({ selected, onSelect }: any) => (
  <input
    type="date"
    className="p-2 rounded text-black w-full"
    onChange={(e) => onSelect(new Date(e.target.value))}
  />
);
