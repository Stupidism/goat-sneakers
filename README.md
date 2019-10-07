# Take-Home Exercise
Thank you for taking the time to complete this coding exercise! 

We don’t just give out take-home tests for our own benefit; it saves you time as well. We hope that this allows you the opportunity to showcase your best work under more realistic working scenarios. Our take-home test can be completed on your own schedule. More importantly, we know that writing code live can be nerve-wracking and it can be hard to do a great job under pressure. We don't expect this will take more than 3 hours, but submitting something you're proud of is far more important than any amount of time spent or not spent on the challenge; make sure you're happy with the result! It should run without errors in the latest version of Chrome.

## Objective
Design a grid view to showcase a collection of sneakers. When clicking on a sneaker, the application displays a detail view of the sneaker.

## Acceptance
- It is a React application.
- The collection shows 20 shoes initially.
- The user can take an action to load more shoes.
- Clicking on a shoe shows a detail view of the shoe.
- The project includes a `README.md` documenting setup and execution steps for your applicaton, as well as any assumptions you've made to complete this task. Do aim to over communicate, as we will setup and run your project.
- **BONUS**: Document your testing strategy - how do you know it works? Better yet, include unit tests!

Beyond these acceptance, we encourage you to make as many assumptions as you need to complete this task. When doing so, please document these assumptions either in a comment above the code or in the project's `README.md`.

For reference, a more robust version of this exercise:
[https://www.goat.com/sneakers](https://www.goat.com/sneakers)


## Self-Grading
- Are setup and execution instructions for the project clear?
- Is the application mobile-friendly?
- Is the application well tested?
- Is the application organized in logical concepts, e.g. components, containers, higher-order components, etc.?

## Submitting
Please submit a `.zip` file of your project (or a link to a `.zip` file). Also, please be sure to include setup and execution instructions. We will download your `.zip` file and run the application.

---

# API
We've included a mock JSON API server to support this coding exercise. 

To start the server:

```sh
npm install
npm start
```

By default, the API is available at `0.0.0.0:5000`.

For more information, please see [json-server](https://github.com/typicode/json-server)

## Documentation
### Fetch

```
GET /sneakers
GET /sneakers/335047
```

### Filter

```
GET /sneakers?shoe_condition=used
```

Add _like to filter (RegExp supported)

```
GET /sneakers?name_like=Air%20Jordan%201
```

### Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.


```
GET /sneakers?_page=1
GET /sneakers?_page=1&_limit=20
```

_10 items are returned by default_

### Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /sneakers?_sort=retail_price_cents&_order=asc
```

For multiple fields, use the following format:

```
GET /sneakers?_sort=retail_price_cents,release_date_unix&_order=desc,asc
```

### Slice

Add `_start` and `_end` or `_limit` (an `X-Total-Count` header is included in the response)

```
GET /sneakers?_start=20&_end=30
```

_Works exactly as [Array.slice](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) (i.e. `_start` is inclusive and `_end` exclusive)_
