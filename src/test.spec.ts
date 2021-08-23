const axios = require('axios');

it("Works", async () => {
  let username = "Hello";

  const data = await axios.get(`http://localhost:${process.env.PORT || 3000}/banned/${username}`);

  expect(data.status).toBe(403);
});

it("Works but 2", async () => {
  let req = await axios.get("http://localhost:3000/ban/");

  expect(req.ok).toBeFalsy();
});
