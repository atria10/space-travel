type Props = {
  number: number | string;
  title: string;
};

const NumberedTitle = ({ number, title }: Props) => {
  return (
    <h2
      class={`text-sans-cond text-lg uppercase tracking-wider
 text-center text-white`}
    >
      <span class="text-[hsl(0_0%_100%_/_25%)] mr-0.5">{number}</span> {title}
    </h2>
  );
};

export default NumberedTitle;
