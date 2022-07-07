import "./styles.css";

import SearchAppBar from "./components/card";

import Media from "./components/header";

import CardLayout from "./components/cardLayout"


export default function App() {
  return (
    <div>
      <SearchAppBar />

      <Media />

      <CardLayout />

    </div>
  );
}
