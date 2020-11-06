rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:wang7211401/gvui-example.git &&
git push -f -u origin main &&
cd ..
echo https://wang7211401.github.io/gvui-example/index.html