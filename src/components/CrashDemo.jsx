function CrashDemo() {
  throw new Error("Something went wrong!");

  return <h2>This will not be displayed</h2>;
}

export default CrashDemo;