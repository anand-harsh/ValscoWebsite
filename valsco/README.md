## Docker Documentation

**<span style="color: red;">Note: For Now its my personal repo "Lakshay's" just for testing, in future it will be official repo of ValscoTech itself.</span>**

### Pulling the image

```sh
docker pull joshi53/vt_test_images
```

### Running the pulled image

```sh
docker run joshi53/vt_test_images
```

### Command for building a new image

```sh
docker-compose up -d
```

- Above command will create an image with the container up and running in a detached mode, no need to type long commands with container name or image name.

```sh
docker-compose down
```

- This will stop the container.

## A little guide to docker compose

- Stop services only

```sh
docker-compose stop
```

- Stop and remove containers, networks..

```sh
docker-compose down
```

- Down and remove volumes

```sh
docker-compose down --volumes
```

- Down and remove images

```sh
docker-compose down --rmi <all|local>
```
