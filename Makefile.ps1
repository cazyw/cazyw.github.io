function Up {
  docker build . -t docker-node-image
  docker run --rm -it -v ${PWD}:/app -p 8000:8000 --name docker-node docker-node-image sh
}

function Down {
  docker container stop docker-node
}