# Q.
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

# A)
```c
int past(int h, int m, int s) {
  return 1000 * (s + 60 * (m + (h * 60)));
}
