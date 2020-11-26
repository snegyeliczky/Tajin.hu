#!/bin/sh

if [ $1 = prod ]
then
	export REACT_APP_ENV=production
else
	export REACT_APP_ENV=staging
fi
rm -rf tajine.deploy
echo $REACT_APP_ENV
echo REACT_APP_ENV = $REACT_APP_ENV
npm run build
mkdir tajine.deploy

cp -r build tajine.deploy/
cp -r app.${REACT_APP_ENV}.yaml tajine.deploy/app.yaml
cd tajine.deploy
if [ $1 = prod ]
then
	gcloud app deploy
else
	gcloud app deploy --version staging --no-promote
fi
cd ..

