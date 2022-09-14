#!/bin/bash

echo "> Build 파일 복사"
mkdir /home/ubuntu/front-file
cp -r /home/ubuntu/frontend/zip/build /home/ubuntu/front-file/
sudo systemctl restart nginx