type PillProps = {
  value: string;
  id?: string;
  hidden?: boolean;
};

export const Pill = (props: PillProps) => (
  <div
    id={props.id}
    aria-hidden={props.hidden}
    className="flex items-center py-0.5 px-2 text-xs text-center text-white align-middle rounded-full bg-grey400"
  >
    {props.value}
  </div>
);
