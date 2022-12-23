#!/bin/sh

# 환경파일 로드
source /home/ec2-user/hntap/dcr-front/scripts/deploy/config.sh

docker stop ${APP_NAME}
docker rm ${APP_NAME}

exit 0
