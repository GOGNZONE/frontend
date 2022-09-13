#!/bin/bash
REPOSITORY=/home/ubuntu/frontend
PROJECT_NAME=front_test

echo "> Build 파일 복사"
mkdir -p $PROJECT_NAME
cp -r $REPOSITORY/build $PROJECT_NAME
sudo systemctl restart nginx