import Colors from "../../components/Colors";
import InteractiveElements from "../../components/InteractiveElements";
import Typography from "../../components/Typography";

const DesignSystem = () => {
  return (
    <div class="container">
      <h1 class="ff-sans-cond fs-700">Design System</h1>
      <div class="grid" style={"--gap:1rem; margin: 2rem 0"}>
        <Colors />
        <Typography />
        <InteractiveElements />
      </div>
    </div>
  );
};

export default DesignSystem;
