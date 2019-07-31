function Up {
  docker build . -t docker-node-image
  docker run --rm -it -v ${PWD}:/app --name docker-node docker-node-image sh
}

function Down {
  docker container stop docker-node
}