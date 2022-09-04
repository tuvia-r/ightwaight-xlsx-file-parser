export function times(n: number, action: Function) {
    let i = 0;
    while (i < n) {
      action();
      i++;
    }
  }