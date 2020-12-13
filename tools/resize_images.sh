#!/bin/sh

# reduces the image canvas size in the given folder
find $1 -iname '*.jpg' -execdir /usr/bin/magick convert {} -resize $2x$3 -verbose {} \;