let url = "http://localhost:8001/todos";

export default function handler(req, res) {
  const { id } = req.query;

  switch (req.method) {
    case "GET":
      return fetch(`${url}?${id}`)
        .then((r) => r.json())
        .then((data) => {
          res.status(200).json(data);
        });

    case "PUT":
      return fetch(`${url}/${id}`, {
        method: "PUT",
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
      return fetch(`${url}/${id}`, {
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
