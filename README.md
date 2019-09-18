# Profile Page

My profile page contains a collection of coding projects on my journey in software development. Started whilst doing Free Code Camp (awesome free resource for those interested in getting into or trying out coding). Please see [cazyw.dev](https://cazyw.dev)

The website has undergone a number of iterations and did used to have some cool fancy jquery features. It was originally built using HTML, CSS, Javascript, Jquery, Bootstrap with some Ruby thrown in to do some migrations.

Currently updating to use Gatsby, React, CSS Grid and Docker in development.

To query graphql using graphiQL while the server is running...

http://localhost:8000/___graphql

## Docker

Can either

- use the options in the Makefile

- use docker-compose

```
docker-compose up --build -d
docker-compose exec nodedev sh
docker-compose down -v
```
