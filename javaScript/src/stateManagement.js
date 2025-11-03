this.state = {
  // 초기 상태 값들
};

this.setState = (nextState) => {
  this.state = nextState;
  // 상태 업데이트 후 렌더링
  this.render();
};

this.render() {
  // UI 렌더링 로직
};
