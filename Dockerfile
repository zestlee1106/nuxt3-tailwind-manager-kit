FROM node:18.12.1-alpine

# Dockerfile 관리자
LABEL maintainer="ltg2206@hanatour.com"
LABEL version="1.0"
LABEL description="Nuxt3 Dockerfile"

ARG PROFILE=${PROFILE}
ARG APP_NAME=${APP_NAME}

ENV TZ=Asia/Seoul
ENV PROFILE=${PROFILE}
ENV APP_NAME=${APP_NAME}
ENV HOST=0.0.0.0

# 타임존 설정
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# /app 디렉토리를 workdir로 설정
WORKDIR /${APP_NAME}

# 현재 Dockerfile에 있는 경로의 모든 파일을 /app에 복사
ADD . /${APP_NAME}

# 패키지 설치
RUN npm install -g pnpm \
 && pnpm install

# 앱 빌드
RUN pnpm build:${PROFILE}

# app run
CMD ["node", "./.output/server/index.mjs"]