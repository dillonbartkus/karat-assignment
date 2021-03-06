# To run:

- Navigate to the root of project in terminal
- `npm i`
- `cd client && npm i`
- `cd ..`
- `npm run dev`

## What I would do if I had more time:

- Finish filter and sort functionality

- Do some network benchmarking / discovery to see if it is faster to do one all-in-one graphQL call,
or do a waterfall style data flow (i.e. grab user id, then grab cards using that id, then grab transactions using card id)

- Change the component hierarchy to match the granular data style. Take full advantage of the flexibility of graphQL.

- Fill out skeletons, optimize UI, UX / info architecture

- Make more realistic simulation of dashboard, e.g. have user ID in the URL pathname, then grab that ID and pass it to the graphQL call, etc.

## Feedback

I spent about 10 - 12 hours on this project. I had a very busy week at work, so I did not get to work as much as I had hoped on the project.

The most interesting part was building a full stack app from scratch, especially React. I have not done that in a few years, and I
definitely had to get back in the groove of things. I didn't work that extensively with GraphQL either, so I had to re-learn the queries as well.
Finding the graphql-json server was pretty cool, I wasn't sure how to fetch my mock data but that seemed like the fastest / easiest way. Also
the typescript Node server was a good learning experience, and I felt safe knowing my server was protected from type errors.

The least interesting things were definitely mocking the data, and obsessing over the React architecture. The stripe API response was confusing to me at first because
each chunk of information is seperate from each other, and I assumed the cards and transactions would be child data of the user. I usually like to do one container
component where I fetch the data, then render the UI component once I have the data. But the granular style of the data response doesn't really match that method.
I haven't used React in a while, it eventually came back to me but I spent too much time re-organizing my component structure.
I initally thought I had to do both the back end and front end assignments, so I wasted a lot of time setting up an MVC back end.