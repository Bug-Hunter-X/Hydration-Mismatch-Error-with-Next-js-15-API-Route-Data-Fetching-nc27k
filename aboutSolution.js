```javascript
import { Suspense } from 'react';

const MyComponent = ({ data }) => {
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>About Page</h1>
      <p>Some data from the API: {data.text}</p>
    </div>
  );
};

export default function About() {
  const data = fetch('/api/data').then(res => res.json());

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MyComponent data={data} />
    </Suspense>
  );
}
```