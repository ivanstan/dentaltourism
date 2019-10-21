#!/usr/bin/env bash
rm -R docs
yarn build
cp -R build docs
git add docs
git commit -m "release"
git push