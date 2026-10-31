import Card from "./Card";

function CompositionDemo() {
  return (
    <div>
      <h1>Component Composition</h1>

      <Card>
        <h2>Developer Card</h2>
        <p>Name: Yamini</p>
        <p>Role: Frontend Developer</p>
      </Card>

      <Card>
        <h2>Another Card</h2>
        <p>This content is different.</p>
      </Card>
    </div>
  );
}

export default CompositionDemo;