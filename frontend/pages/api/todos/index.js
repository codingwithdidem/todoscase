const url = "http://localhost:8001/todos";

export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      return fetch(url)
        .then((r) => r.json())
        .then((data) => {
          res.status(200).json(data);
        });
    case "POST":
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      })
        .then((r) => r.json())
        .then((data) => {
          res.status(200).json(data);
        });

    case "DELETE":
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((data) => {
          return res.status(200).json(data);
        });
  }
}
