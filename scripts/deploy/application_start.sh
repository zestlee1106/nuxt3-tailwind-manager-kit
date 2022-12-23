#!/bin/sh

# 환경파일 로드
source /home/ec2-user/app/scripts/deploy/config.sh

docker run -d -p 3000:3000 \
  --name ${APP_NAME} ${DOCKER_IMAGE_NAME}:${DOCKER_TAG}

#   -e "HOST_IP=$(hostname -i)" \
#   --add-host host.docker.internal:host-gateway \
#   --log-driver=${LOG_DRIVER} \
#   --log-opt fluentd-address="${LOG_URL}" \
#   --log-opt tag="${LOG_TAG}" \
#   --log-opt mode=non-blocking \