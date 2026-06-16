
function Camera() {
  const shoot = (a, b) => {
    alert(a);

  }

  return (
    <button onClick={(e) => shoot("Goal!", e)}>Take the shot!</button>
  );
}

export default Camera;