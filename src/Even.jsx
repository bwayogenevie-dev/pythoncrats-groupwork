function Even({ number }) {
  return (
    <p>
      {number % 2 === 0 ? "Even" : "Odd"}
    </p>
  );
}

export default Even;
