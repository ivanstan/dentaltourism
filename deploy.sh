#!/usr/bin/env bash
git checkout master
yarn build
git add build
git commit -m "release"
git subtree split --prefix build -b gh-pages # create a local gh-pages branch containing the splitted output folder
#git push origin --delete gh-pages
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
#git branch -d gh-pages # delete the local gh-pages because you will need it: ref
#rm -rf build