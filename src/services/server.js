import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    models: {
      education: Model,
    },
    routes() {
      this.namespace = "/api";
      // get request for educations
      this.get("/educations", () => ({
          educations: [
            {
              id: 1,
              date: 2021,
              title: "Title 1",
              text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
            },
            {
              id: 2,
              date: 2019,
              title: "Title 2",
              text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
            },
            {
              id: 3,
              date: 2018,
              title: "Title 3",
              text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
            },
            {
              id: 4,
              date: 2017,
              title: "Title 4",
              text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
            },
            {
              id: 5,
              date: 2016,
              title: "Title 5",
              text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
            },
            {
              id: 6,
              date: 2015,
              title: "Title 5",
              text: "Labore esse tempor nisi non mollit enim elit ullamco veniam elit duis nostrud. Enim pariatur ullamco dolor eu sunt ad velit aute eiusmod aliquip voluptate. Velit magna labore eiusmod eiusmod labore amet eiusmod. In duis eiusmod commodo duis. Exercitation Lorem sint do aliquip veniam duis elit quis culpa irure quis nulla. Reprehenderit fugiat amet sint commodo ex.\r\n",
            },
          ],
        }),
        { timing: 3000 }
      );

      // post request for generating new educations
      let newId = 7;
      this.post("/educations", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;

        return { education: attrs };
      });

      // get request for skills
      this.get("/skills", () => {
          return {
            skills: [
              {
                id: 1,
                name: "React",
                range: 80,
              },
              {
                id: 2,
                name: "HTML",
                range: 45,
              },
              {
                id: 3,
                name: "CSS",
                range: 95,
              },
            ],
          };
        },
        { timing: 3000 }
      );
      // let newId = 4;
      this.post("/skills", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;
        return { skills: attrs };
      });
    },
  });
  return server;
}
