import { redirect } from "next/navigation";

const defaultCategory = "01";

const HomePage = () => {
  redirect(`/category/${defaultCategory}`);
};

export default HomePage;
