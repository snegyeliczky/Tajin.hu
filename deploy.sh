#!/bin/sh

if [ $1 = prod ]
then
	export REACT_APP_ENV=production
else
	export REACT_APP_ENV=staging-$1
fi
rm -rf tajine.deploy
echo $REACT_APP_ENV
echo REACT_APP_ENV = $REACT_APP_ENV
npm run build
mkdir tajine.deploy

cp -r build tajine.deploy/
if [ $1 != prod ]
then 
	cp app.staging.yaml app.$REACT_APP_ENV.yaml
fi
cp -r app.${REACT_APP_ENV}.yaml tajine.deploy/app.yaml
cd tajine.deploy
if [ $1 = prod ]
then
	gcloud app deploy
else
	gcloud app deploy --version $REACT_APP_ENV --no-promote
fi
cd ..

