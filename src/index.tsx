import { createServer, Model } from "miragejs";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Salário",
          value: 2000,
          type: "deposit",
          category: "salary",
          createdAt: new Date("2020-01-01 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          value: 500,
          type: "withdraw",
          category: "rent",
          createdAt: new Date("2020-01-02 09:00:00"),
        },
        {
          id: 3,
          title: "Luz",
          value: 100,
          type: "withdraw",
          category: "utilities",
          createdAt: new Date("2020-01-03 09:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      const transaction = schema.create("transaction", data);

      return transaction;
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
