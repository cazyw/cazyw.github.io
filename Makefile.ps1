function Up {
  docker build . -t docker-node-image
  docker run --rm -it -v ${PWD}:/app -p 8000:8000 -e GATSBY_WEBPACK_PUBLICPATH=/ --name docker-node docker-node-10 sh
}

function Down {
  docker container stop docker-node
}