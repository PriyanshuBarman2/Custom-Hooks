# useTime Hook

A simple React hook that provides live up-to-date current time of any timezone and also converts Unix timestamps into human-readable time formats for any timezone. The time automatically updates every minute so you always see the up-to-date current time.

## Features

**(1) Get Live Time of anywhere by providing IANA timezone ID (e.g., "America/New_York")**

- 0️⃣ **Zero Config**: No arguments needed to get user's/browser's/device's current time. e.g, `useTime()`
- 🕰️ **Live Time**: Get the current time of any timezone, just provide the timezone (e.g., `useTime("America/New_York")`).
- 🕒 **Automatic Updates**: Updates every minute (e.g., `2:15 PM` → `2:16 PM`) so you always get the up-to-date time.
- ⚡ **Optimized Performance**: Only re-renders when the minute changes not every seconds (optimized using useRef ).
- 🌍 **Timezone Support**: Uses IANA timezone IDs (e.g., `"Asia/Tokyo"`).

**(2) Converts Unix timestamps into human-readable time formats for any timezone.**

- ♻️ **Timestamp converter** Convert Unix timestamps to readable time for any timezone
- 📅 **Formatting**: Formats time in 12-hour format (e.g., `2:15 PM`). (customizable)

---

## Installation

```bash
# Just copy the useTime.js file to your hooks directory
```

Then, import the hook into your React component:

```jsx
import { useTime } from "./hooks/useTime"; // adjust the path as necessary
```

### Usage Examples (Feature 1)

Below are examples for various use cases.

1. Without Any TimeZone or Timestamp
   If no timeZone is provided, the hook defaults to the user's/browser's/device's local timezone.
   ## updates automatically every minute (e.g., `2:15 PM` → `2:16 PM`).

```jsx
function LocalClock() {
  // Provides user's local time
  const { time } = useTime();

  return (
    <div>
      <h1>Local Time: {time} </h1>
    </div>
  );
}

export default LocalClock;
```

2. With Only TimeZone
   Specify a timeZone to get the current time of that timeZone.
   ## updates automatically every minute (e.g., `2:15 PM` → `2:16 PM`).

```js
function TimeZoneClock() {
  // Provides London's current time
  const { time } = useTime("Europe/London");

  return (
    <div>
      <h1>London Time: {time} </h1>
    </div>
  );
}

export default TimeZoneClock;
```

### Usage Examples (Feature 2)

1. With Both TimeZone and Timestamp
   Provide an initial timestamp (in seconds) and a timeZone.
   Note: If you have a timestamp in milliseconds, divide it by 1,000 before passing it in.

```jsx
function FutureClock() {
  // Example: 1633072800 is a Unix timestamp in seconds.
  // Convert Unix timestamp to New York timezone
  const { time } = useTime("America/New_York", 1633072800);

  return (
    <div>
      <h1>New York Future Time: {time} </h1>
    </div>
  );
}
export default FutureClock;
```

4. With Only Timestamp
   Provide an initial timestamp (in seconds) .
   Note: If you have a timestamp in milliseconds, divide it by 1,000 before passing it in.

```jsx
function FutureClock() {
  // Example: 1633072800 is a Unix timestamp in seconds.
  // Convert Unix timestamp to user's local timezone
  const { time } = useTime(1633072800);

  return (
    <div>
      <h1> Future Time: {time} </h1>
    </div>
  );
}

export default FutureClock;
```

## API Reference

### Parameters

    | Parameter | Type   | Description                                     | Required  |
    | --------- | ------ | ----------------------------------------------- | ----------|
    | timeZone  | string | IANA timezone string (e.g., "America/New_York") | optional  |
    | timestamp | number | Unix timestamp in seconds                       | optional  |

    ### Return Value

    The hook returns an object with the following properties:

    | Property | Type   | Description                                                |
    | -------- | ------ | ---------------------------------------------------------- |
    | time     | string | Formatted time string in 12-hour format (e.g., "10:30 AM") |
    | hour     | number | current hour format (e.g., 10)                          |
    | minute   | number | current minute format (e.g., 30)                        |

## Performance

This hook is designed to be efficient:

- Uses `useRef` to track time internally without causing re-renders every second
- Only updates the component state when the minute changes
- Cleans up the interval when the component unmounts

## How It Works

The `useTime` hook:

1. Updates a ref (useRef) every second to avoid unnecessary re-renders
2. Only triggers a re-render when the minute changes
3. Formats the time according to the British English locale in 12-hour format , but you can change it to your desired format
4. Cleans up the interval when the component unmounts, ensuring no memory leaks

## Note

- Timestamps must be in seconds. If you have the timestamp in milliseconds, divide it by 1,000 before passing to the hook.

## License

MIT

```

```
