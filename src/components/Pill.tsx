export const Pill = ({ value, id }: { value: string; id?: string }) => (
  <div
    id={id}
    className="flex items-center py-0.5 px-2 text-xs text-center text-white align-middle rounded-full bg-grey400"
  >
    {value}
  </div>
);
