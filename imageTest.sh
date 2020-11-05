#!/bin/bash

#for i in /Users/new/desktop/imageTest/* 
# for i in ./src/images/*.jpg
# do
# 	echo $i
# done

names=`for i in /Users/new/desktop/imageTest/*.jpg
do
  echo -n "$i "                
done`

for i in /Users/new/desktop/imageTest/*.jpg
do
	# echo $names
    guetzli --quality 84 $i /Users/new/Documents/$i_new.jpg
done