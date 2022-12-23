#!/bin/sh

source /home/ec2-user/app/scripts/deploy/config.sh

$(aws ecr get-login --no-include-email --region ap-northeast-2)
docker pull ${DOCKER_IMAGE_NAME}:${DOCKER_TAG}