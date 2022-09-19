# esbuild-graphql-tag

An esbuild plugin to parse `.graphql` files into an AST at compile time.

## Benchmark

Doing graphql AST parsing at compile time is ~1.58x faster.

- `node out.js` - compile time AST parsing
- `node runtime.js` - run time AST parsing

```sh
Benchmark 1: node out.js
  Time (mean ± σ):     157.3 ms ±   1.3 ms    [User: 179.8 ms, System: 26.1 ms]
  Range (min … max):   155.2 ms … 159.8 ms    18 runs

Benchmark 2: node runtime.js
  Time (mean ± σ):     249.0 ms ±   4.8 ms    [User: 275.8 ms, System: 41.4 ms]
  Range (min … max):   244.0 ms … 261.7 ms    12 runs

Summary
  'node out.js' ran
    1.58 ± 0.03 times faster than 'node runtime.js'
```
