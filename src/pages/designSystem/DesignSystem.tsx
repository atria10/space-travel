import Colors from "../../components/Colors";
import Typography from "../../components/Typography";
import "./DesignSystem.module.css";

const DesignSystem = () => {
  return (
    <div class="container">
      <h1 class="ff-sans-cond fs-700">Design System</h1>
      <div class="grid" style={'--gap:1rem; margin: 2rem 0'}>
        <Colors />
        <Typography />
      </div>
    </div>
  );
};

export default DesignSystem;
