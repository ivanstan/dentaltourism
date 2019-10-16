#!/usr/bin/env bash
yarn build
cp -R build docs
git add docs
git commit -m "release"
git push