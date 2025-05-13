function* range(start, end, step = 1) {
  while (start < end) {
    yield start;
    start += step;
  }
}