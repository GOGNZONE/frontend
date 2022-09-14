#!/bin/bash

echo "> Build 파일 복사"
cp -r /home/ubuntu/frontend/zip/build/* /home/ubuntu/file/
sudo systemctl restart nginx