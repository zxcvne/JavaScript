import TabBar from "./components/TabBar";
import Content from "./components/Content";

export default function App($app) {
  this.state = {
    // 현재 눌린 버튼의 값
    currentTab: "all",
    photos: [],
  };
  const tabBar = new TabBar({
    initialState: "",
    onClick: (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos,
      });
    },
  });
  const content = new Content();

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab);
    tabBar.setState(this.state.photos);
  };
}
