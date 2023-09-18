# Reproduce RTK Query TS Perf Issues

See reproduction video here https://cln.sh/bHBsDGGm.

**STR:**

1. Open `./src/store.ts`
2. Start typing `store.getState().` and wait for intellisense to show up

Expected:

Immediate results (< 300ms).

Actual:

Results take >2 seconds to show up.

I think I found a possible reason. If you open `./node_modules/@reduxjs/toolkit/dist/query/react/module.d.ts` and in line 23, remove `HooksWithUniqueNames`:

```ts
} & HooksWithUniqueNames<Definitions>;
```

Change to:

```ts
}
```

Then follow the STR above, you'll get instant results.

**Tip:**

If you want to get accurate timings, open the Command Palette in VSCode and choose "TypeScript: Open TS Server log", it might ask you enable TS logging, approve and then copy the path to the tsserver.log file that just opened (command palette -> "File: Copy Path of Active File"), now start a terminal and run:

```
tail -f "<path_to_tsserver.log>" | grep "completionInfo: elapsed time"
```
