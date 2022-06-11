# udt-assignment

<hr>
<h2>Change test case</h2>

Open file name `src/solution/resolveData.ts` and import other JSON file from the folder `src/input`

For instance, import test case 1:
`import * as data from "../input/case-1.json";`

<hr>
<h2>Run the project</h2>

Install dependency: `npm install`

Run app: `npm start`

<h2>Output</h2>
The log should looks like
```2022-06-11 16:19:29.752  INFO  Trying with Brute Force...
2022-06-11 16:19:29.754  INFO  [Contract with] Container renter B 2 container, price: 10
2022-06-11 16:19:29.755  INFO  [Contract with] Container renter C 2 container, price: 3
2022-06-11 16:19:29.755  INFO  [Contract with] Container renter A 5 container, price: 5
2022-06-11 16:19:29.755  INFO  Not enough containers
2022-06-11 16:19:29.756  INFO  [Summary] total cost 18
```
