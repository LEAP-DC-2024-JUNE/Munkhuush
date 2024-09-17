export const Task1 = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>Logged in</div>;
  }
  return <div>Please log in</div>;
};
