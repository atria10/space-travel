import Colors from "../../components/Colors";
import Typography from "../../components/Typography";

const DesignSystem = () => {
  return (
    <div class="container">
      <h1 class="ff-sans-cond fs-700">Design System</h1>
      <div class="grid">
        <Colors />
        <Typography />
      </div>
    </div>
  );
};

export default DesignSystem;
