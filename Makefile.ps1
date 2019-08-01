function Up {
  docker build . -t docker-node-10
  docker run --rm -it -v ${PWD}:/app -p 8000:8000 -e GATSBY_WEBPACK_PUBLICPATH=/ -e CHOKIDAR_USEPOLLING=1 --name docker-node docker-node-10 sh
}

function Down {
  docker container stop docker-node
}