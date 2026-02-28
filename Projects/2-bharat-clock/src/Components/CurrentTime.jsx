function CurrentTime() {
  let currentDate = new Date();

  return (
    <p>
      This is the current time: {currentDate.toLocaleDateString()} - {currentDate.toLocaleTimeString()}
    </p>
  );
}

export default CurrentTime;
