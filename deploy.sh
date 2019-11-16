#!/usr/bin/env bash
rm -R build
rm -R docs
yarn build
cp -R build docs
rm -R build
cp ./CNAME ./docs/
git add docs
git commit -m "release"
git push